const applicationReducer = (state: any, action: any) => {
	console.log("Success: applicationReducer loginObj", action, state);

	return {
		...state,
	};
};

export default applicationReducer;
