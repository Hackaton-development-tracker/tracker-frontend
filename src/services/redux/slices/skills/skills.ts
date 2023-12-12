import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSkills } from './skillsAPI';

export interface ISkill {
  id: number;
  skill: {
    id: number;
    title: string;
    description: string;
  };
  current_level: number;
  target_level: number;
  total_levels: number;
  levels_description: {
    [key: string]: string;
  };
}

interface ISkills {
  skillsToImprove: ISkill[];
  achievedSkills: ISkill[];
}

export const getSkillsApi = createAsyncThunk(
  '@@skill/skill',
  async (arg: { token: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { token } = arg;
      const response = await fetchSkills(token);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

const initialState: ISkills = {
  skillsToImprove: [],
  achievedSkills: [],
};

const skillsSlice = createSlice({
  name: '@@skills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSkillsApi.fulfilled, (state, action) => {
      state.skillsToImprove = action.payload.skillsToImprove;
      state.achievedSkills = action.payload.achievedSkills;
    });
  },
});

export const skillsReducer = skillsSlice.reducer;

export const skillsSelect = (state: { skills: ISkills }) => {
  return state.skills;
};
