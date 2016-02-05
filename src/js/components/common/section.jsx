/*****************************************
 * Section component
 *****************************************/
import React, { Component, PropTypes } from 'react';
import ClassNameUtil from '../../utils/class-name';
export default class Section extends Component {

  render() {
    if(React.Children.count(this.props.children) > 0) {
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      return (
        <section className={classNamesContent} title={this.props.title}>
          {this.props.children}
        </section>
      );
    }
    return null;
  }

};
Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array,
  children: PropTypes.node
}
Section.defaultProps = {
  title: '',
  defaultClassName: 'fbra_section',
  className: '',
  classNames:[],
  children: []
}