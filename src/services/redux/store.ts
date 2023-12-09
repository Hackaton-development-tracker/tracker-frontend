import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/auth';
import { specializationReduser } from './slices/specialization/specialization';

export const store = configureStore({
  reducer: {
    user: authReducer,
    specializations: specializationReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
