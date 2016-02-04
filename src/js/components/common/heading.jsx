import React, { Component, PropTypes } from 'react';
import DebugUtil from '../utils/debug';
import ClassNameUtil from '../utils/class-name';
export default class Heading extends Component{

  getTag(level, classNames){
    switch(level){
      case 1:
        return React.createElement('h1', {className: classNames}, this.props.children);
        break;
      case 2:
        return React.createElement('h2', {className: classNames}, this.props.children);
        break;
      case 3:
        return React.createElement('h3', {className: classNames}, this.props.children);
        break;
      case 4:
        return React.createElement('h4', {className: classNames}, this.props.children);
        break;
      case 5:
        return React.createElement('h5', {className: classNames}, this.props.children);
        break;
      case 6:
        return React.createElement('h6', {className: classNames}, this.props.children);
        break;
      default:
        DebugUtil.log("Heading component [WARN]: Invalid heading level provided - using default");
        return React.createElement('h1', {classNames: classNames}, this.props.children);
    }
  }

  render(){
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    const componentToRender = this.getTag(this.props.level, classNamesContent);
    return componentToRender;
  }
};

Heading.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  classNames: PropTypes.array,
  children: PropTypes.node
}
Heading.defaultProps = {
  level: 1,
  defaultClassName: 'fbra_heading',
  className: '',
  classNames: [],
  children: []
}
