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
					return Object.assign( {}, state, {agents: [...state.agents, action.payload]} );
				case 'roles':
					return Object.assign( {}, state, {roles: [...state.roles, action.payload]} );
				case 'interviews':
					return Object.assign( {}, state, {interviews: [...state.interviews, action.payload]} );
				case 'offers':
					return Object.assign( {}, state, {offers: [...state.offers, action.payload]} );
				default:
					return state;
			}
		default:
			return state;
	}
}