export default (state = {}, action) => {
	console.log('Action dispatched:', action);
	switch(action.type){
		case 'hydrate':
			switch( action.source ){
				case 'agents':
					return Object.assign( {}, state, {agents: action.payload} );
				case 'roles':
					return Object.assign( {}, state, {roles: action.payload} );
				case 'interviews':
					return Object.assign( {}, state, {interviews: action.payload} );
				case 'offers':
					return Object.assign( {}, state, {offers: action.payload} );
				default:
					return state;
			}
			break;
		case 'create':
			switch( action.source ){
				case 'agents':
					return Object.assign( {}, state, state.agents, action.payload );
				case 'roles':
					return Object.assign( {}, state, state.roles, action.payload );
				case 'interviews':
					return Object.assign( {}, state, state.interviews, action.payload );
				case 'offers':
					return Object.assign( {}, state, state.offers, action.payload );
				default:
					return state;
			}
			break;
		default:
			return state;
	}
}