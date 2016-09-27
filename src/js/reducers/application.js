export default (state, action) => {
	switch(action.type){
		case 'GET':
			switch( action.source ){
				case 'agents':
					return state.agents;
				case 'roles':
					return state.roles;
				case 'interviews':
					return state.interviews;
				case 'offers':
					return state.offers;
				default:
					return state;
			}
	}
}