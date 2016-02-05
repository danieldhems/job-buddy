import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../../utils/class-name';
export default class Input extends Component {

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
      value: this.props.defaultValue
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.onChange();
  }

  render() {
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    return (
      <input
        className={classNamesContent}
        id={this.props.id || this.props.name}
        name={this.props.name}
        type={this.props.type}
        value={this.state.value}
        maxLength={this.props.maxlength}
        title={this.props.title} onChange={this.handleInputChange} />
    );
    return null;
  }

};
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  title: PropTypes.string,
  defaultClassName: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  onChange: PropTypes.func
}
Input.defaultProps = {
  defaultValue: '',
  title: '',
  defaultClassName: 'fbra_input',
  className: '',
  classNames:[],
  onChange: function(event){},
  maxlength: 524288
}
