/*****************************************
 * Password form input component
 *****************************************/
import ClassNameUtil from '../../../utils/class-name';
import ContextUtil from '../utils/context';
import DebugUtil from '../utils/debug';
import ApplicationDispatcher from '../dispatcher/application-dispatcher';
import PasswordFormInputActions from '../actions/password-form-input-actions';

export default class PasswordFormInput extends Component {
	constructor(options) {
		super(options);
		this.state = PasswordFormInput.initialState();
		this.context = ContextUtil.getRandomContextId();
	}

	/**
	 * getInitialState
	 * React method to return the initial state
	 */
	getInitialState() {
		return {
			inputType: PasswordFormInput.inputTypes.PASSWORD
		};
	}

	/**
	 * updateInputValue
	 * Updates the input value and dispatches an input update action
	 */
	updateInputValue(event) {
		DebugUtil.log("Input updated", event.target.value);
		PasswordFormInputActions.createPasswordFormInputUpdate(event.target.value);
	}

	/**
	 * toggleInputType
	 * Toggle the state input type
	 */
	toggleInputType() {
		const inputType = this.state.inputType == PasswordFormInput.inputTypes.PASSWORD
    		? PasswordFormInput.inputTypes.TEXT
    		: PasswordFormInput.inputTypes.PASSWORD;
    	this.setState({inputType: inputType});
	}

	/**
	 * getFormContent
	 * Return form label content
	 */
	getFormLabelContent() {
		if (this.props.textDictionary.labelText && this.props.textDictionary.labelText.length !== 0) {
			return (
				<label className={ClassNameUtil.getClassNames(['fbra_passwordFormInput_label', 'fbra_test_passwordFormInput_label'])}>{this.props.textDictionary.labelText}</label>
			);
		}
		return null;
	}

	/**
	 * render
	 * Render component
	 */
	render() {
		return (
			<div className="fbra_passwordFormInput">
				{this.getFormLabelContent()}
				<input type={this.state.inputType} className={ClassNameUtil.getClassNames(['fbra_passwordFormInput_input' 'fbra_test_passwordFormInput_input'])} onKeyPress={this.dispatchInputUpdateAction} onKeyUp={this.dispatchInputUpdateAction} />
				<a className={ClassNameUtil.getClassNames(['fbra_passwordFormInput_showPasswordButton', 'fbra_test_passwordFormInput_showPasswordButton'])} onClick={this.toggleInputType}>{this.props.textDictionary.showText}</a>
			</div>
		);
	}
}

PasswordFormInput.inputTypes = {
	PASSWORD: "password",
	TEXT: "text"
};

PasswordFormInput.propTypes = {
  textDictionary: PropTypes.object.isRequired
}
