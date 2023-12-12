import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSpecialization } from './specializationAPI';

export interface ISpecialization {
  id: number;
  title: string;
}

interface ISpecializations {
  specializations: ISpecialization[];
}

export const getSpecializationApi = createAsyncThunk(
  '@@specialization/specialization',
  async (arg: { token: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { token } = arg;
      const response = await fetchSpecialization(token);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

const initialState: ISpecializations = {
  specializations: [],
};

const specializationSlice = createSlice({
  name: '@@specialization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecializationApi.fulfilled, (state, action) => {
      state.specializations = action.payload;
    });
  },
});

export const specializationReduser = specializationSlice.reducer;

export const specializationSelect = (state: {
  specializations: ISpecializations;
}) => {
  const categoriesData = state.specializations;
  return categoriesData ? categoriesData : [];
};
