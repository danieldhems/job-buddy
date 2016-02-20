import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../../utils/class-name';
import Input from './input';
import Select from './select';
import Text from '../text';
import Button from '../button';

export default class ChooseOrCreateNew extends Component {

  constructor(options) {
    super(options);
    this.bindHandlers();
    this.state = this.buildInitialState();
  }

  bindHandlers() {
    this.handleCreateNew = this.handleCreateNew.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  buildInitialState() {
    return {
      isCreatingNew: false,
      isSelectingFromDropdown: true
    }
  }

  handleCancel(){
    this.setState({
      isCreatingNew: false,
      isSelectingFromDropdown: true
    })
  }

  handleCreateNew(){
    this.setState({
      isCreatingNew: true,
      isSelectingFromDropdown: false
    })
  }

  getInputForCreateNew(){
    if(this.state.isCreatingNew){
      return (
        <div>
          <Input
            id={this.props.id || this.props.name}
            name={this.props.nameForInput}
            type={this.props.type}
            value={this.state.value}
            title={this.props.title}
            onChange={this.handleInputChange}
            disabled={this.state.isCreatingNew}
          />
          <Button onClick={this.handleCancel}>Cancel</Button>
        </div>
      )
    }
  }

  render() {
    const inputForCreateNew = this.getInputForCreateNew();
    return (
      <div>
        <Text>Choose from dropdown</Text>
        <Select
          items={this.props.items}
          name={this.props.nameForSelect}
          valueIdentifier={this.props.valueIdentifier}
          textIdentifier={this.props.textIdentifier}
          defaultValue={this.props.defaultValue}
          disabled={this.state.isCreatingNew}
        />
        <Button onClick={this.handleCreateNew}>Or create new</Button>
        {inputForCreateNew}
      </div>
    )
  }
};
ChooseOrCreateNew.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  title: PropTypes.string,
  defaultClassName: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  onChange: PropTypes.func
}
ChooseOrCreateNew.defaultProps = {
  defaultValue: '',
  title: '',
  defaultClassName: 'fbra_input',
  className: '',
  classNames:[],
  onChange: function(event){},
  maxlength: 524288
}
