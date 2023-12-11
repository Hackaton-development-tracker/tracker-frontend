import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/auth';

import { specializationReduser } from './slices/specialization/specialization';
import { quizReducer } from './slices/quiz/quiz';
import { quizResultsReducer } from './slices/quiz/quizRezults';

import popupReducer from './slices/popup/popup';
import { skillsReducer } from './slices/skills/skills';
import { coursesReducer } from './slices/courses/courses';
import { projectsReducer } from './slices/projects/projects';
import { knowledgeReducer } from './slices/knowledge/knowledge';

export const store = configureStore({
  reducer: {
    user: authReducer,
    specializations: specializationReduser,
    questions: quizReducer,
    quizResults: quizResultsReducer,
    popup: popupReducer,
    skills: skillsReducer,
    courses: coursesReducer,
    projects: projectsReducer,
    knowledge: knowledgeReducer
  } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
