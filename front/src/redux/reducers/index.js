const INITIAL_STATE = {
  role: '',
  listTask: []
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ROLE':
      return {
        ...state,
        role: action.payload
      };
    case 'SET_TASK':
      return {
        ...state,
        listTask: (state.listTask = action.payload)
      };

    default:
      return state;
  }
};

export default taskReducer;
