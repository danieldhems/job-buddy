/*****************************************
 * Paragraph component
 *****************************************/
import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';
export default class Paragraph extends Component {

  render() {
    if (React.Children.count(this.props.children) > 0) {
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <p className={classNamesContent} title={this.props.title}>
          {this.props.children}
        </p>
      );
    }
    return null;
  }

};
Paragraph.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  children: PropTypes.node
}
Paragraph.defaultProps = {
  title: '',
  defaultClassName: 'fbra_paragraph',
  className: '',
  classNames: [],
  children: []
}