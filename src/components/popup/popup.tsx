import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../../services/redux/slices/popup/popup';
import { RootState } from '../../services/redux/store';
import styles from './popup.module.scss';
import { CloseButton } from '../buttons';
import closeIcon from '../../static/assets/icons/close.svg';

type PopupProps = {
  popupId: string;
  children: React.ReactNode;
};

// renders base poopup
const Popup: React.FC<PopupProps> = ({ popupId, children }) => {
  const dispatch = useDispatch();
  const popups = useSelector((state: RootState) => state.popup.popups);

  const matchedPopup = popups.find((popup) => popup.id === popupId);

  if (!matchedPopup || !matchedPopup.isOpen) {
    return null;
  }

  return (
    <div className={styles.popup__overlay}>
      <div className={styles.popup__content}>
        <div className={styles.popup__close}>
          <CloseButton onClick={() => dispatch(closePopup(popupId))}>
            <img
              src={closeIcon}
              alt="Close"
              style={{ width: '24px', height: '24px' }}
            />
          </CloseButton>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
