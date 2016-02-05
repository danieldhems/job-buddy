import React, { Component, PropTypes } from 'react';
import Label from './label.jsx'
import ClassNameUtil from '../../../utils/class-name';

export default class RadioOption extends Component{

  constructor(options){
    super(options);
    this.bindHandlers();
  }

  bindHandlers(){
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    this.props.onChange(event);
  }

  handleClick(event){
    this.props.onClick(event);
  }

  render(){
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    const identifier = this.props.id || this.props.name;
    return (
      <div>
        <Label htmlFor={identifier}>
          <input id={identifier} className={classNamesContent} type="radio" value={this.props.value} name={this.props.name} checked={this.props.checked} onChange={this.handleChange} onClick={this.handleClick} />
          {this.props.children}
        </Label>
      </div>
    );
  }

}

RadioOption.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

RadioOption.defaultProps = {
  defaultClassName: 'fbra_radioOption fbra_test_radioOption',
  className: '',
  classNames: [],
  value: '',
  name: '',
  checked: false,
  onChange: function(event){},
  onClick: function(event){}
}
