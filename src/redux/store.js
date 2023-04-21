import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import HomeSlice from './Home-Api/HomeSlice';

const store = configureStore({
  reducer: {
    Home: HomeSlice,
  },
  middleware: [thunk],
});

export default store;
