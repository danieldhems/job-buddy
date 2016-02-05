import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../../utils/class-name';
export default class Textarea extends Component {

  constructor(options) {
    super(options);
    this.bindHandlers();
    this.state = this.buildInitialState();
  }

  bindHandlers() {
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }

  buildInitialState() {
    return {
      defaultValue: this.props.defaultValue,
      value: this.props.value
    }
  }

  handleTextareaChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  }

  render() {
    const classNamesContent = ClassNameUtil.getComponentClassNames(this);
    return (
      <textarea className={classNamesContent}
                id = {this.props.id || this.props.name}
                name = {this.props.name}
                title = {this.props.title}
                onChange = {this.handleTextareaChange}
                maxLength={this.props.maxlength}
                placeholder={this.state.defaultValue}
                value = {this.state.value}>
      </textarea>
    );
  }
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  title: PropTypes.string,
  defaultClassName: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  onChange: PropTypes.func
}
Textarea.defaultProps = {
  defaultValue: '',
  title: '',
  defaultClassName: 'fbra_textarea',
  className: '',
  classNames: [],
  onChange: (event) => {},
  maxlength: 524288
}
