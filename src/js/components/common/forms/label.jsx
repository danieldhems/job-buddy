import React, {Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';

export default class Label extends Component{

  render(){
    if(React.Children.count(this.props.children) > 0){
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <label htmlFor={this.props.htmlFor} className={classNamesContent}>{this.props.children}</label>
      );
    }

    return null;
  }
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNames: PropTypes.array,
  htmlFor: PropTypes.string
}

Label.defaultProps = {
  children: [],
  htmlFor: '',
  defaultClassName: 'fbra_label',
  classNames: [],
  className: ''
}
