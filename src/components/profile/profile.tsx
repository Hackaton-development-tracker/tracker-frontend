import { useLocation } from 'react-router-dom';
import { RootState } from '../../services/redux/store';
import { useAppSelector } from '../../services/typeHooks';
import profileImg from '../../static/assets/icons/user.svg';
import {
    ROUTE_DEVELOPMENT_MAP,
    ROUTE_DEVELOPMENT_MAP_MESSAGE,
    ROUTE_PROFILE,
  ROUTE_PROFILE_MESSAGE,
  ROUTE_STEP1,
  ROUTE_STEP1_MESSAGE,
  ROUTE_STEP2,
  ROUTE_STEP2_MESSAGE,
  ROUTE_STEP3,
  ROUTE_STEP3_MESSAGE,
  ROUTE_TRACKER,
  ROUTE_TRACKER_MESSAGE,
} from '../../utils/constants';

const NextStageText: React.FC = () => {
  const location = useLocation();

  // Определите текст в зависимости от текущего пути
  let nextStageText = '';
  if (location.pathname === ROUTE_STEP1) {
    nextStageText = ROUTE_STEP1_MESSAGE;
  } else if (location.pathname === ROUTE_STEP2) {
    nextStageText = ROUTE_STEP2_MESSAGE;
  } else if (location.pathname === ROUTE_STEP3) {
    nextStageText = ROUTE_STEP3_MESSAGE;
  } else if (location.pathname === ROUTE_TRACKER) {
    nextStageText = ROUTE_TRACKER_MESSAGE;
  } else if (location.pathname === ROUTE_PROFILE) {
    nextStageText = ROUTE_PROFILE_MESSAGE;
  } else if (location.pathname === ROUTE_DEVELOPMENT_MAP) {
    nextStageText = ROUTE_DEVELOPMENT_MAP_MESSAGE;
  }

  return <>{nextStageText}</>;
};

export const Profile: React.FC = () => {
  const mail = useAppSelector((state: RootState) => state.user.user?.email);

  return (
    <div className="profile__container">
      <div className="profile">
        <div className="profile__info">
          <img src={profileImg} className="profile__img" />
          <span className="profile__name">{mail}</span>
        </div>
        <div className="profile__stage">
          <span className="profile__stage-current">Текущий этап</span>
          <span className="profile__stage-next">
            <NextStageText />
          </span>
        </div>
      </div>
    </div>
  );
};
