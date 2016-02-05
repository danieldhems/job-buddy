/*****************************************
 * Text component
 *****************************************/
import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../utils/class-name';
export default class Text extends Component {

  render() {
    if(React.Children.count(this.props.children) > 0) {
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <span className={classNamesContent} title={this.props.title}>
          {this.props.children}
        </span>
      );
    }
    return null;
  }

};
Text.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array
}
Text.defaultProps = {
  title: '',
  defaultClassName: 'fbra_text',
  className: '',
  classNames:[],
  children: []
}