import styles from './header.module.scss';
// import { RootState } from '../../services/redux/store';
// import { useNavigate } from 'react-router-dom';
// import { EXIT, ROUTE_LOGIN } from '../../utils/constants';
// import { logoutUser } from '../../services/redux/slices/auth/auth';
// import { useAppDispatch, useAppSelector } from '../../services/typeHooks';


const Header = () => {
  // const isLoggedIn = useAppSelector(
  //   (state: RootState) => state.user.isLoggedIn,
  // );
  // const mail = useAppSelector((state: RootState) => state.user.user?.email);
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const access = localStorage.getItem('accessToken') ?? '';
  // const refresh = localStorage.getItem('refreshToken') ?? '';

  return (
    <div className={styles.header}>
      <div>
      </div>
    </div>
  );
};

export default Header;
