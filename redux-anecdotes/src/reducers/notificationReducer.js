import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  text: null
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notify(state, action) {
      state.count++;
      state.text = action.payload;
    },
    removeNotification(state, action) {
      if(state.count <= 1) {
        state.text = null;
        state.count = 0;
      } else {
        state.count--;
      }
    }
  }
});

export const { notify, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;