/**
*
*	Use these types when you want a store to decide whether to act on an action that may or may not apply to it

e.g. Many stores receive web service request actions, but the payload often won't apply to all of them
*
*/

export default {
	AGENT: 'SourceTypes.AGENT',
	ROLE: 'SourceTypes.ROLE',
	INTERVIEW: 'SourceTypes.INTERVIEW'
}