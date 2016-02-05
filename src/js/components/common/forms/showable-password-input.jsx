import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../../../utils/class-name';
export default class ShowablePasswordInput extends Component {
  constructor(options) {
    super(options);
    this.bindHandlers();
    this.state = {
      passwordVisible: false
    }
  }

  bindHandlers(){
    this.handlePasswordVisibilityToggleClick = this.handlePasswordVisibilityToggleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  togglePasswordVisibility() {
    this.setState({
      passwordVisible: !this.state.passwordVisible
    });
  }

  handleInputChange(event){
    event.preventDefault();
    this.props.onChange(event.currentTarget.value);
  }

  handlePasswordVisibilityToggleClick(event){
    event.preventDefault();
    this.togglePasswordVisibility();
  }

  render() {
    const inputFieldType = this.state.passwordVisible ? 'text' : 'password';
    return (
      <span className={ClassNameUtil.getClassNames(['fbra_showablePassword', 'fbra_test_showablePassword'])}>
        <input ref="passwordInputField" type={inputFieldType} className={ClassNameUtil.getClassNames(['fbra_showablePasswordInput', 'fbra_test_showablePasswordInput'])} value={this.props.value} onChange={this.handleInputChange} />
        <a ref="visibilityToggler" className={ClassNameUtil.getClassNames(['fbra_showablePasswordVisibilityToggler', 'fbra_test_showablePasswordVisibilityToggler'])} onClick={this.handlePasswordVisibilityToggleClick}>{this.props.visibilityTogglerText}</a>
      </span>
    );
  }
}

ShowablePasswordInput.propTypes = {
  visibilityTogglerText: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
}

ShowablePasswordInput.defaultProps = {
  onChange: (event) => {},
  visibilityTogglerText: "",
  value: ""
}
