import React, { Component, PropTypes } from 'react';
import RadioOption from './radio-option.jsx'
import ClassNameUtil from '../utils/class-name';

export default class RadioGroup extends Component{

  renderRadioOptions() {
    return React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        name: this.props.name
      });
    }.bind(this));
  }

  render(){
    let radioChildren = this.renderRadioOptions();

    if(React.Children.count(this.props.children) > 0){
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <div className={classNamesContent}>
          {radioChildren}
        </div>
      );
    }

    return null;
  }
}

RadioGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  name: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array
}

RadioGroup.defaultProps = {
  defaultClassName: 'fbra_radioGroup',
  className: '',
  classNames:[],
  children: []
}
