import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/auth';
import { specializationReduser } from './slices/specialization/specialization';
import { quizReducer } from './slices/quiz/quiz';

export const store = configureStore({
  reducer: {
    user: authReducer,
    specializations: specializationReduser,
    questions: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
