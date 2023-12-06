import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Popup {
  id: string;
  isOpen: boolean;
}

interface PopupState {
  popups: Popup[];
}

const initialState: PopupState = {
  popups: [],
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<string>) => {
      const popupId = action.payload;
      const existingPopup = state.popups.find(popup => popup.id === popupId);

      if (existingPopup) {
        existingPopup.isOpen = true;
      } else {
        state.popups.push({ id: popupId, isOpen: true });
      }
    },
    closePopup: (state, action: PayloadAction<string>) => {
      const popupId = action.payload;
      const existingPopup = state.popups.find(popup => popup.id === popupId);

      if (existingPopup) {
        existingPopup.isOpen = false;
      }
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;