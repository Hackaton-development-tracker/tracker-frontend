import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProjects } from './projectsAPI';

interface ISpecialization {
  id: number;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  external_resources: number;
  specializations?: ISpecialization[];  
}

interface IProjects {
  recommended_projects: IProject[];
}

export const getProjectsApi = createAsyncThunk(
  '@@project/project',
  async (arg: { token: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { token } = arg;
      const response = await fetchProjects(token);

      // Check if the response is an array or a single object
      const projects = Array.isArray(response) ? response : [response];

      return fulfillWithValue({ recommended_projects: projects });
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

const initialState: IProjects = {
  recommended_projects: [],
};

const projectsSlice = createSlice({
  name: '@@projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjectsApi.fulfilled, (state, action) => {
      state.recommended_projects = action.payload.recommended_projects;
    });    
  },
});

export const projectsReducer = projectsSlice.reducer;

export const projectsSelect = (state: { projects: IProjects }) => {
  return state.projects;
};
