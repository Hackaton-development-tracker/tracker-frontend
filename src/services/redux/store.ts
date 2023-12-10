import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/auth';
import popupReducer from './slices/popup/popup';
import { skillsReducer } from './slices/skills/skills';

export const store = configureStore({
  reducer: {
    user: authReducer,
    popup: popupReducer,
    skills: skillsReducer,
  } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
