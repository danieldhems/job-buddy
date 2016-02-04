import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';

export default class Image extends Component{
  render(){
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    return (
      <img src={this.props.src} alt={this.props.alt} title={this.props.title} className={classNamesContent} />
    );
  }
};
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  onClick: PropTypes.func,
  children: PropTypes.node
}
Image.defaultProps = {
  src: '',
  alt: '',
  title: '',
  className: '',
  defaultClassName: 'fbra_image',
  classNames:[],
  onClick: function(event){}
}
