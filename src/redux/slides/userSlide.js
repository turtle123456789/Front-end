import { createSlice, isAction } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  avatar: '',
  access_token: '',
  id: '',
  isAdmin : false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser:(state,action) => {
        const{ name = '', email = '', phone = '', address = '', avatar = '', access_token = '', _id = '',isAdmin} = action.payload
        state.name = name;
        state.email = email;
        state.id = _id;
        state.phone = phone;
        state.address = address;
        state.avatar = avatar;
        state.access_token = access_token;
        state.isAdmin = isAdmin;
    },
    resetUser:(state) => {
      state.name = '';
      state.email = '';
      state.id = '';
      state.phone = '';
      state.address = '';
      state.avatar = '';
      state.access_token = '';
      state.access_token = false;
      
  },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser,resetUser } = userSlice.actions

export default userSlice.reducer