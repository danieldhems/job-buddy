import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../../utils/class-name';
export default class Form extends Component {

  render() {
    if(React.Children.count(this.props.children) > 0) {
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <form className={classNamesContent} action={this.props.action} method={this.props.method} title={this.props.title}>
          {this.props.children}
        </form>
      );
    }
    return null;
  }

};
Form.propTypes = {
  title: PropTypes.string,
  method: PropTypes.string,
  action: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  children: PropTypes.node
}
Form.defaultProps = {
  title: '',
  method: 'get',
  action: '',
  defaultClassName: 'fbra_form',
  className: '',
  classNames: [],
  children: []
}