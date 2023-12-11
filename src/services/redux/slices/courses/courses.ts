// courses.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses } from './coursesAPI';

export interface ICourse {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date?: string;
  resource?: string;
  // completion_time: number;
  // image: string;
}
interface ICourses {
  recommended_courses: ICourse[];
}

export const getCoursesApi = createAsyncThunk(
  '@@course/course',
  async (arg: { token: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { token } = arg;
      const response = await fetchCourses(token);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

const initialState: ICourses = {
  recommended_courses: [],
};

const coursesSlice = createSlice({
  name: '@@courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoursesApi.fulfilled, (state, action) => {
      state.recommended_courses = action.payload;
    });
  },
});

export const coursesReducer = coursesSlice.reducer;

export const coursesSelect = (state: { courses: ICourses }) => {
  return state.courses;
};