// state/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, formData } = action.payload;
    
      const updatedUserList = state.userList.map(user =>
        user.id === id ? formData : user
      );
    
      state.userList = updatedUserList;
    },

    deleteUser: (state, action) => {
      state.userList = state.userList.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
