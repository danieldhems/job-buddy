import React, { Component, PropTypes } from 'react';
import SelectOption from './select-option';
import ClassNameUtil from '../../../utils/class-name';

export default class Select extends Component{

  constructor(options) {
    super(options);
    this.bindHandlers();
    this.state = this.buildInitialState();
  }

  bindHandlers() {
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  buildInitialState() {
    return {
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.onChange();
  }

  render(){
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    const identifier = this.props.id || this.props.name;
    console.log(this.props.items);
    return (
      <select className={classNamesContent} id={identifier} defaultValue={this.state.value} name={this.props.name} disabled={this.props.disabled} onChange={this.handleInputChange} value>
        {this.props.items.map( item => {
          return (<SelectOption key={item.id} value={item[this.props.valueIdentifier]}>{this.props.textIdentifier}</SelectOption>) 
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
  classNames: PropTypes.array
}

Select.defaultProps = {
  defaultClassName: 'fbra_select',
  className: '',
  classNames:[],
  children: [],
  selectedMonth: 1
}
