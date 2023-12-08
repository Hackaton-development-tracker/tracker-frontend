import { useEffect } from "react";
import { useAppDispatch } from '../../services/typeHooks';
import { logoutUser } from '../../services/redux/slices/auth/auth';
import { useNavigate } from "react-router-dom";
import { ROUTE_LOGIN } from "../../utils/constants";
const LogoutPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const access = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    dispatch(logoutUser({ access })).then((resultAction) => {
      if (logoutUser.fulfilled.match(resultAction)) {
        navigate(ROUTE_LOGIN);
      } else {
        // console.log('Logout error');
      }
    });
  })

  return (
    <></>
  );
};

export default LogoutPage;
