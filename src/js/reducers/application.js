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
		case 'remove':
			const indexToRemove = state[action.source].findIndex( (item) => item.id === action.id);
			switch( action.source ){
				case 'agents':
					return Object.assign( {}, state, {agents: [...state.agents.slice(0, indexToRemove), ...state.agents.slice(indexToRemove + 1)]} );
				case 'roles':
					return Object.assign( {}, state, {roles: [...state.roles.slice(0, indexToRemove), ...state.roles.slice(indexToRemove + 1)]} );
				case 'interviews':
					return Object.assign( {}, state, {interviews: [...state.interviews.slice(0, indexToRemove), ...state.interviews.slice(indexToRemove + 1)]} );
				case 'offers':
					return Object.assign( {}, state, {offers: [...state.offers.slice(0, indexToRemove), ...state.offers.slice(indexToRemove + 1)]} );
				default:
					return state;
			}
		default:
			return state;
	}
}