// knowledge.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchKnowledge } from './knowledgeAPI';

export interface IKnowledge {
  id: number;
  theme: string; 
  description: string;
  author: string;
  skills: number[]; 
}

interface IKnowledgeBase {
  knowledge_base: IKnowledge[];
}

export const getKnowledgeApi = createAsyncThunk(
  '@@knowledge/knowledge',
  async (arg: { token: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { token } = arg;
      const response = await fetchKnowledge(token);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

const initialState: IKnowledgeBase = {
  knowledge_base: [],
};

const knowledgeSlice = createSlice({
  name: '@@knowledge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getKnowledgeApi.fulfilled, (state, action) => {
      state.knowledge_base = action.payload;
    });
  },
});

export const knowledgeReducer = knowledgeSlice.reducer;

export const knowledgeSelect = (state: { knowledge: IKnowledgeBase }) => {
  return state.knowledge;
};
