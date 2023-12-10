// knowledge.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchKnowledge } from './knowledgeAPI';

export interface IKnowledge {
  id: number;
  type: string;
  title: string;
  author: string;
  description: string;
  tags: string[];
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
      state.knowledge_base = action.payload.knowledge_base;
    });
  },
});

export const knowledgeReducer = knowledgeSlice.reducer;

export const knowledgeSelect = (state: { knowledge: IKnowledgeBase }) => {
  return state.knowledge;
};
