var express = require('express'),
  path = require('path'),
  fs = require('fs'),
  uuid = require('uuid'),
  cookieSession = require('cookie-session'),
  cookieParser = require('cookie-parser'),
  assign = require('object-assign'),
  bodyParser = require('body-parser'),
  compress = require('compression')
  app = express();

const ONE_DAY = 60*60*24;


app.set('trust proxy', 1);
app.use(cookieParser());
// app.use(cookieSession({
//   name: 'session',
//   keys: ['superLongKeysAreGreatForLotsOfTyping', 'AnotherKeyIsUsedAsASecondaryKey'],
//   secure: global.__PROD__,
//   secureProxy: global.__PROD__,
//   httpOnly: true
// }));
app.use((req, res, next) => {
  if (!req.cookies.sid && (req.url || "").indexOf('heartbeat') === -1){
    req.session.id = uuid.v4();
    req.session.init = +new Date();
    res.cookie('sid', req.session.id);
  }
  var isJsFile = req.url.split(".").indexOf("js") > -1;

  if(isJsFile){
    res.setHeader("Cache-Control", "public, max-age: "+ONE_DAY);
  }
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', 0);
  res.setHeader("x-powered-by", '');
  next();
});

app.use(compress());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const everythingButFilesRegex = /^[^\.]+$/;

app.use(everythingButFilesRegex, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(process.env.PORT || 8080, '0.0.0.0');

console.log(`WebBoarding is up`);
