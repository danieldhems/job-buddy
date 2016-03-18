import React, { Component, PropTypes } from 'react';
import SelectOption from './select-option';
import ClassNameUtil from '../../../utils/class-name';

export default class Select extends Component{

  constructor(options) {
    super(options);
    this.bindHandlers();
    this.state = {};
  }

  bindHandlers() {
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.onChange();
  }

  render(){
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    return (
      <select
        className={classNamesContent}
        defaultValue={this.props.defaultValue}
        name={this.props.name}
        disabled={this.props.disabled}
        onChange={this.handleInputChange}
      >
        <SelectOption key="0" value="">Select</SelectOption>
        {this.props.items.map( item => {
          return (<SelectOption key={item.id} value={item[this.props.valueIdentifier]}>{item[this.props.textIdentifier]}</SelectOption>) 
        })}
      </select>
    );
  }
}

Select.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  classNames: PropTypes.array,
  items: PropTypes.array
}

Select.defaultProps = {
  defaultClassName: 'fbra_select',
  className: '',
  classNames:[],
  children: [],
  items: []
}
