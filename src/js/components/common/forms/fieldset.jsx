import React, {Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';

export default class Fieldset extends Component{

  render(){
    if(React.Children.count(this.props.children) > 0){
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <fieldset className={classNamesContent}>{this.props.children}</fieldset>
      );
    }

    return null;
  }
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNames: PropTypes.array
}

Fieldset.defaultProps = {
  className: '',
  defaultClassName: 'fbra_fieldset',
  classNames:[],
  children: []
}
