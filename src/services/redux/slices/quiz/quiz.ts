import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuiz } from './quizAPI';

export interface Option {
  id: number;
  answer: string;
}

export interface Question {
  id: number;
  question: string;
  param: string;
  answers: Option[];
}

export interface Quiz {
  questions: Question[];
}

export const getQuiz = createAsyncThunk(
  '@@quiz/getQuiz',
  async (
    payload: { access: string; id: number },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const response = await fetchQuiz(payload.access, payload.id);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get quiz' }); // Возвращаем объект с ошибкой
    }
  },
);

const initialState: Quiz = {
  questions: [],
};

const quizSlice = createSlice({
  name: '@@quiz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuiz.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export const quizReducer = quizSlice.reducer;

export const selectQuiz = (state: { questions: Quiz }) => state.questions;
