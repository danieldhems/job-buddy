import React, { PropTypes, Component } from 'react';
import ErrorMessages from './error-messages.jsx';
export default class TemporaryPassword extends Component{

  constructor(options){
    super(options);
    this.bindEventListeners();
    this.state = {};
  }

  bindEventListeners(){
    this.handleSendTemporaryPasswordClick = this.handleSendTemporaryPasswordClick.bind(this);
  }

  getErrorMessages(){
    if(this.props.errors.length > 0){
      return(<ErrorMessages errors={this.props.errors} />);
    }
    return null;
  }

  handleSendTemporaryPasswordClick(event){
    event.preventDefault();
    this.props.onSubmit();
  }

  getPasswordRequestedMessageContent(){
    if(this.props.hasBeenSentTemporaryPassword){
      return(<p>{this.props.newTemporaryPasswordSentText}</p>);
    }
    return null;
  }

  getPasswordRequestButtonContent(){
    if(!this.props.hasBeenSentTemporaryPassword){
      return(
        <button
          ref="sendTemporaryPasswordButton"
          className="fbra_test_requestTempPasswordButton"
          onClick={this.handleSendTemporaryPasswordClick}>{this.props.sendTemporaryPasswordText}</button>
      );
    }
    return null;
  }

  render(){
    const errorMessages = this.getErrorMessages();
    if(this.props.hasBeenSentTemporaryPassword){
      const passwordRequestedMessage = this.getPasswordRequestedMessageContent();
      return(
        <div>
          {passwordRequestedMessage}
        </div>
      );
    }else{
      const passwordRequestButton = this.getPasswordRequestButtonContent();
      return (
        <div>
          {errorMessages}
          {passwordRequestButton}
        </div>
      );
    }
  }

}
TemporaryPassword.propTypes = {
  sendTemporaryPasswordText: PropTypes.string.isRequired,
  newTemporaryPasswordSentText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  hasBeenSentTemporaryPassword: PropTypes.bool,
  hasRequestedFromThisContext: PropTypes.bool,
  errors: PropTypes.array
}
TemporaryPassword.defaultProps = {
  onSubmit: function(event){},
  hasBeenSentTemporaryPassword: false,
  hasRequestedFromThisContext: false,
  errors: []
}
