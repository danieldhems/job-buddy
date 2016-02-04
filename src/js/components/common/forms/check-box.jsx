import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';
import Label from './label.jsx'

export default class CheckBox extends Component {

  constructor(options){
    super(options);
    this.bindHandlers();
  }

  bindHandlers(){
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    // Note: Don't prevent event default behaviour or browser wont show checkbox as checked
    this.props.onChange(event);
  }

  handleClick(event){
    // Note: Don't prevent event default behaviour or browser wont show checkbox as checked
    this.props.onClick(event);
  }

  render() {
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    const identifier = this.props.id || this.props.name;
    return (
      <Label htmlFor={identifier}>
        <input className={classNamesContent} type="checkbox" id={identifier} name={this.props.name} value={this.props.value} onChange={this.handleChange} onClick={this.handleClick} checked={this.props.checked} />
        {this.props.children}
      </Label>
    );
  }
}

CheckBox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  checked: PropTypes.bool
}

CheckBox.defaultProps = {
  name: '',
  defaultClassName: 'fbra_checkBox',
  className: '',
  classNames: [],
  label: '',
  onChange: function(event){},
  onClick: function(event){},
  checked: false
}
