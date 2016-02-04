import React, { Children, Component, PropTypes } from 'react';
import ClassNameUtil from '../utils/class-name';
export default class Uneditable extends Component {

  getChildrenContent() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { disabled: 'disabled' });
    }); 
  }

  render() {
    if(React.Children.count(this.props.children) > 0) {
      const classNamesContent = ClassNameUtil.getComponentClassNames(this);
      const childrenContent = this.getChildrenContent();
      return (
        <div className={classNamesContent} title={this.props.title}>
          {childrenContent}
        </div>
      );
    }
    return null;
  }

}
Uneditable.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.array
}
Uneditable.defaultProps = {
  title: '',
  defaultClassName: 'fbra_uneditable',
  className: '',
  classNames:[],
  children: []
}