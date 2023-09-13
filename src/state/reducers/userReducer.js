// userReducer.js
const initialState = {
    userList: []
  };
  
  const userReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          userList: [...state.userList, action.payload]
        };
      case 'EDIT_USER':
        return {
          ...state,
          userList: action.payload.updatedList
          // userList: state.userList.map(user => user.id === action.payload.id ? action.payload : user)
        };
      case 'DELETE_USER':
        return {
          ...state,
          userList: state.userList.filter(user => user.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  