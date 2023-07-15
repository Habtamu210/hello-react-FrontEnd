import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
