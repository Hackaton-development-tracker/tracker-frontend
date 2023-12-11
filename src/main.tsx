import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Layout } from './pages/layout/layout';
import { Provider } from 'react-redux';
import { RootState, store } from './services/redux/store';
import { useAppDispatch, useAppSelector } from './services/typeHooks';
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_LOGOUT,
  ROUTE_REGISTER,
  ROUTE_PROFILE,
  ROUTE_DEVELOPMENT_MAP,
  ROUTE_STEP1,
  ROUTE_STEP2,
  ROUTE_STEP3,
} from './utils/constants';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import Step3 from './pages/step3';
import LoginPage from './pages/login/login';
import NotFound404 from './pages/notfound404/notfound404';
import RegisterPage from './pages/register/register';
import DevelopmentMap from './pages/developmentMap/developmentMap';
import Loader from './components/loader';
import { getProfileUser, logoutUser } from './services/redux/slices/auth/auth';
import LogoutPage from './pages/logout/logout';
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
    else return isLoggedIn === false ? children : <Navigate to={ROUTE_STEP1} />;
};

const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state: RootState) => state.user.isLoading);
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn,
  );
  const access = localStorage.getItem('accessToken') ?? '';
  useEffect(() => {
    if (access.length !== 0) {
      dispatch(getProfileUser({ access }));
    } else {
      dispatch(logoutUser({ access }));
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
        <Route
          path={ROUTE_STEP1}
          element={
            <section className="page">
              <Step1 />
            </section>
          }
        ></Route>
        <Route
          path={ROUTE_STEP2}
          element={
            <section className="page">
              <Step2 />
            </section>
          }
        ></Route>
        <Route
          path={ROUTE_STEP3}
          element={
            <section className="page">
              <Step3 />
            </section>
          }
        ></Route>
        <Route
          path={ROUTE_LOGOUT}
          element={
            <RequireAuth
              onlyAuth={true}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
            >
              <section className="auth-page">
                <LogoutPage />
              </section>
            </RequireAuth>
          }
        ></Route>
        <Route path={ROUTE_HOME} element={<Navigate to={ROUTE_PROFILE} />} />
        <Route path={ROUTE_PROFILE} element={<SkillsProfile />} />
        <Route path={ROUTE_DEVELOPMENT_MAP} element={<DevelopmentMap />} />
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
