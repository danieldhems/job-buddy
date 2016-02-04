import React, { Component, PropTypes } from 'react';
import SelectOption from './select-option.jsx'
import ClassNameUtil from '../utils/class-name';

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
      value: this.props.selectedMonth
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.onChange();
  }

  render(){
    if(React.Children.count(this.props.children) > 0){
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      const identifier = this.props.id || this.props.name;
      
      return (
        <select className={classNamesContent} id={identifier} defaultValue={this.state.value} name={this.props.name} disabled={this.props.disabled} onChange={this.handleInputChange}>
          {this.props.children}
        </select>
      );
    }

    return null;
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
