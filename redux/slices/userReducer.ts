import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface userSatate {
  users: Array<any>;
  loading: boolean;
  error: string | null;
}

const initialState: userSatate = {
  users: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  return users?.json();
});

export default userSlice.reducer;
