/*****************************************
 * Debug utility class
 *****************************************/

export default class DebugUtil {
	constructor() {
		this.debugLevel = 0;
	}

	/**
	 * setDebugLevel
	 * Sets the debug level
	 */
	static setDebugLevel(debugLevel=0) {
		this.debugLevel = debugLevel;
	}

	static getPropertyContents(prop){
		return typeof prop == "object" ? JSON.stringify(prop) : prop;
	}

	/**
	 * log
	 * Decorator for the console.log method
	 *
	 * Optional argument for outputting to the UI, disabled by default
	 */

	static log() {
		if (this.debugLevel && this.debugLevel != 0 && console && typeof console.log == "function") {
			console.log.apply(console, arguments);
		}
	}

	static printToUI(){
		if (this.debugLevel && this.debugLevel != 0){
			let outputElement = document.createElement('div');
			Object.keys(arguments).map( ( value, index ) => {
				console.log('value ', arguments[value]);
				outputElement.innerHTML += this.getPropertyContents(arguments[value]);
				outputElement.appendChild( document.createElement('br') );
			});
			document.body.querySelector('#application-log').appendChild(outputElement);
			document.body.querySelector('#application-log').appendChild( document.createElement('br') );
		}
	}
}