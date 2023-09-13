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
  