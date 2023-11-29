import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Layout } from './pages/layout/layout';
import { Provider } from 'react-redux';
import { RootState, store } from './services/redux/store';
import { useAppDispatch, useAppSelector } from './services/typeHooks';
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER } from './utils/constants';
import LoginPage from './pages/login';
import NotFound404 from './pages/notfound404/notfound404';
import RegisterPage from './pages/register';
import Loader from './components/loader';
import { logoutUser } from './services/redux/slices/auth/auth';
import SkillsProfile from './pages/skillsProfile/skillsProfile';

const RequireAuth = ({
  children: children,
  onlyAuth: onlyAuth,
  isLoggedIn: isLoggedIn,
  isLoading: isLoading,
}: {
  children: JSX.Element;
  onlyAuth: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
}) => {
  if (isLoading === false)
    if (onlyAuth === true)
      return isLoggedIn === true ? children : <Navigate to={ROUTE_LOGIN} />;
    else return isLoggedIn === false ? children : <Navigate to={ROUTE_HOME} />;
};

const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state: RootState) => state.user.isLoading);
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn,
  );
  const access = localStorage.getItem('accessToken') ?? '';
  const refresh = localStorage.getItem('refreshToken') ?? '';
  useEffect(() => {
    if (access.length !== 0) {
      // dispatch(getProfileUser({ access }));
    } else {
      dispatch(logoutUser({ access, refresh }));
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <section className={isLoggedIn ? 'page' : 'auth-page'}>
        <Loader />
      </section>
    );
  }
  return (
    <Routes>
      <Route
        path={ROUTE_HOME}
        element={
          <RequireAuth
            onlyAuth={true}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
          >
            <section className="page">
              <Layout />
            </section>
          </RequireAuth>
        }
      >
        <Route path="/development-tracker" element={<SkillsProfile />} />
      </Route>
      <Route
        path={ROUTE_LOGIN}
        element={
          <RequireAuth
            onlyAuth={false}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
          >
            <section className="auth-page">
              <LoginPage />
            </section>
          </RequireAuth>
        }
      ></Route>
      <Route
        path={ROUTE_REGISTER}
        element={
          <RequireAuth
            onlyAuth={false}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
          >
            <section className="auth-page">
              <RegisterPage />
            </section>
          </RequireAuth>
        }
      ></Route>
      <Route
        path="*"
        element={
          <section className="page">
            <NotFound404 />
          </section>
        }
      ></Route>
    </Routes>
  );
};

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
