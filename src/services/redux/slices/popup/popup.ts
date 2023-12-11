import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPopup {
  id: string;
  isOpen: boolean;
}

interface IPopupState {
  popups: IPopup[];
}

const initialState: IPopupState = {
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