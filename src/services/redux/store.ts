import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/auth';
import popupReducer from './slices/popup/popup';

export const store = configureStore({
  reducer: {
    user: authReducer,
    popup: popupReducer,
  } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
