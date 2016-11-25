import React from 'react';

class FlexBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const flexStyles = {
      display: 'flex',
      flexDirection: this.props.direction || 'row',
      flexWrap: this.props.wrap || 'nowrap',
      alignContent: this.props.alignContent || 'flex-start',
      justifyContent: this.props.justify || 'flex-start',
      alignItems: this.props.alignItems || 'flex-start'
    }
    return(
      <div className={this.props.className} style={flexStyles}>
        { this.props.children }
      </div>
    )
  }
}

FlexBox.defaultProps = {

};

FlexBox.propTypes = {

};

export default FlexBox;
