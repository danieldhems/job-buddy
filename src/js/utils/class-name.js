import classnames from 'classnames';
export default class ClassNameUtil {
	/**
	 * getComponentClassNames
	 * Returns a string value for a components classes
	 */
	static getComponentClassNames(component) {
		return classnames([component.props.defaultClassName].concat(component.props.classNames).concat(component.props.className.split(" ")));
	}

  	/**
	 * getClassNames
	 * Returns a string value for an array of classes
	 */
	static getClassNames(classNames) {
  		return classnames(classNames);
  	}
}
