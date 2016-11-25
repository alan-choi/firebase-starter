import React from 'react';
// import {EditorState, convertFromRaw, CompositeDecorator} from 'draft-js';

import PostContent from './PostContent';

import './richTextExample.css';

export default class HomePage extends React.Component {
  constructor(){
    super()
    this.convertRawContent = this.convertRawContent.bind(this);
  }

  componentWillMount(){
    let postId = this.props.params.id;
    console.log(postId);
    this.props.getOnePost(postId);
  }

  componentWillReceiveProps(newProps){
    console.log("NEW PROPS", newProps)
  }

  convertRawContent(raw){
    console.log("RAW", raw);
    let contentState = convertFromRaw(Object.assign({
      entityMap: {}
    }, raw))
    console.log('content', contentState);
    let editorState = EditorState.createWithContent(contentState);
    console.log('editor start', editorState);
    return EditorState.createWithContent(contentState);
  }

  render(){
    let content = this.props.currentPostContent;
    let post = !content ? <span></span> :
      <PostContent content={this.convertRawContent(content)} />

    return(
      <div>
        POST PAGE
        { post }
      </div>
    );
  }
}
