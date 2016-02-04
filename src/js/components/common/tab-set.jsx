import React, { Component, PropTypes } from 'react';
import Tab from './tab.jsx';
import ClassNameUtil from '../utils/class-name';

export default class TabSet extends Component{

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

TabSet.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
  className: PropTypes.string,
  classNames: PropTypes.array
}

TabSet.defaultProps = {
  className: '',
  classNames:[],
  children: [],
  defaultClassName: 'fbra_tabSet',
}
