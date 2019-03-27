const initialState = {
    projectName: 'hahahaha'
  };
  
  export default function counter(state = initialState, action) {
    let newState = state;
    switch (action.type) {
      case 'GET_PROJECT':
        newState.projectName = action.payload.projectName;
        break;
      default:
        break;
    }
    return {...newState}
  }