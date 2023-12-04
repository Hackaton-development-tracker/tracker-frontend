import vars from '../../static/scss/export.module.scss';

export const getColor = (
  index: number,
  currentLevel: number,
  targetLevel: number,
) => {
  if (
    currentLevel < targetLevel &&
    index === targetLevel
  ) {
    return vars.colorBlueMain;
  } else if (
    index === currentLevel ||
    currentLevel > index
  ) {
    return vars.colorGreen;
  } else {
    return vars.colorBlack100;
  }
};