import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitQuizResultsApi } from './quizResultsAPI';

export interface QuizResults {
  grade_info: {
    grade_current: string;
    next_grade: string;
    skills_current: number;
    skills_max: number;
  };
}

export const submitQuizResults = createAsyncThunk(
  '@@quizResults/submitQuizResults',
  async ( payload: { access: string, payload: unknown }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await submitQuizResultsApi(payload.payload, payload.access);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to submit quiz results' });
    }
  }
);

const initialState: QuizResults = {
  grade_info: {
    grade_current: '',
    next_grade: '',
    skills_current: 0,
    skills_max: 0,
  },
};

const quizResultsSlice = createSlice({
  name: '@@quizResults',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitQuizResults.fulfilled, (state, action) => {
      state.grade_info = action.payload;
    });
  },
});

export const quizResultsReducer = quizResultsSlice.reducer;
export const selectQuizResults = (state: { quizResults: QuizResults }) => state.quizResults;
