import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';

export default class Tab extends Component{

  render(){
    if(React.Children.count(this.props.children) > 0){
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <div className={classNamesContent}>
          {this.props.children}
        </div>
      );
    }

    return null;
  }
}

Tab.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
  className: PropTypes.string,
  classNames: PropTypes.array
}

Tab.defaultProps = {
  defaultClassName: 'fbra_tab',
  children: [],
  classNames:[],
  className: ''
}
