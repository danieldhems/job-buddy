import React, { Component, PropTypes } from 'react';
import ContextualErrorStore from '../stores/contextual-error-store';
import ErrorMessages from './error-messages.jsx';
export default class ContextualErrorMessages extends Component{

  constructor(options){
    super(options);
    this.bindHandlers();
    this.mounted = false;
    this.state = this.buildStateFromStores();
  }

  bindHandlers(){
    this.storeChangeHandler = this.storeChangeHandler.bind(this);
  }

  componentDidMount(){
    this.mounted = true;
    this.contextualErrorStoreListener = ContextualErrorStore.addChangeListener(this.storeChangeHandler);
  }

  componentWillUnmount(){
    this.mounted = false
    this.contextualErrorStoreListener.dispose();
  }

  storeChangeHandler(){
    if(this.mounted){
      this.setState(this.buildStateFromStores());
    }
  }

  buildStateFromStores(){
    return {
      errors: ContextualErrorStore.getErrorsForContext(this.props.for)
    }
  }

  render(){
    if(this.props.for !== null){
      return(<ErrorMessages errors={this.state.errors} />);
    }
    return null;
  }

}
ContextualErrorMessages.defaultProps = {
  for: null
}
ContextualErrorMessages.propTypes = {
  for: PropTypes.string
}
