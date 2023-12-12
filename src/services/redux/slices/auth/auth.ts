import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, getuser, register } from './authAPI';

interface IGrade {
  title: string;
}

export interface IUser {
  id: number;
  email: string;
  specializations: ISpecialization[];
  grades: IGrade[];
  next_grade: IGrade;
  test_date: string;
  next_test_date: string;
}

interface ISpecialization {
  id: number;
  title: string;
}

interface IAuthState {
  user: IUser;
  id_speciality: number;
  title_speciality: string;
  accessToken: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: string | null;
}

export const loginUser = createAsyncThunk(
  '@@auth/login',
  async (
    payload: { email: string; password: string },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const response = await login(payload.email, payload.password);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to login' }); // Возвращаем объект с ошибкой
    }
  },
);

export const logoutUser = createAsyncThunk(
  '@@auth/logout',
  async (
    payload: { token: string },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const response = await logout(payload.token);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to logout' }); // Возвращаем объект с ошибкой
    }
  },
);

export const getProfileUser = createAsyncThunk(
  '@@auth/getUser',
  async (
    payload: { token: string },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const response = await getuser(payload.token);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get user' }); // Возвращаем объект с ошибкой
    }
  },
);

export const registerUser = createAsyncThunk(
  '@@auth/register',
  async (
    payload: { email: string; password: string },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const response = await register(payload.email, payload.password);
      return fulfillWithValue(response);
    } catch (err: unknown) {
      console.log(err);
      return rejectWithValue({ error: 'Failed to register user' }); // Возвращаем объект с ошибкой
    }
  },
);

export const updateSpecialization = createAsyncThunk(
  '@@auth/updateSpecialization',
  async (payload: { id_speciality: number }, { fulfillWithValue }) => {
    return fulfillWithValue(payload);
  }
);

const initialState: IAuthState = {
  user: {
    id: 0,
    email: '',
  } as IUser,
  id_speciality: 0,
  title_speciality: '',
  accessToken: '',
  isLoading: true,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        // state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem('accessToken', action.payload.auth_token);
        // localStorage.setItem('refreshToken', action.payload.refresh);
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.accessToken = action.payload.auth_token;
        state.id_speciality = 0;
        state.title_speciality = '';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        // state.user = null;
        state.error = action.error.message as string;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        localStorage.removeItem('accessToken');
        // localStorage.removeItem('refreshToken');
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = {
          id: 0,
          email: '',
          id_speciality: 0,
          title_speciality: '',
          accessToken: '',
          specializations: [],
          grades: [],
          next_grade: {
            title: '',
          } as IGrade,
          test_date: '',
          next_test_date: '',
        } as IUser;
        console.log(action);
        // state.user = action.payload;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        localStorage.removeItem('accessToken');
        // localStorage.removeItem('refreshToken');
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.error.message as string;
      })
      .addCase(registerUser.pending, (state) => {
        // state.isLoading = true;
        console.log(state);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getProfileUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfileUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(getProfileUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      }).addCase(updateSpecialization.fulfilled, (state, action) => {
        state.id_speciality = action.payload.id_speciality;
        // Optionally, you can update the title_speciality here if needed
      });
  },
});

export const authReducer = authSlice.reducer;

export const selectUser = (state: { user: IAuthState }) => state.user;
export const selectLoggedIn = (state: { isLoggedIn: IAuthState }) =>
  state.isLoggedIn;
export const selectLoading = (state: { isLoading: IAuthState }) =>
  state.isLoading;
export const selectError = (state: { error: IAuthState }) => state.error;

// export const getToken = (state: { user: IAuthState }) => state.user.accessToken;

export const getSpecId = (state: { user: IAuthState }) => state.user.id_speciality;
