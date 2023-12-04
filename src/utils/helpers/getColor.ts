import vars from '../../static/scss/export.module.scss';

export const getColor = (
  index: number,
  currentLevel: number,
  targetLevel: number,
  levels: number,
) => {
  if (
    currentLevel < targetLevel &&
    targetLevel < levels &&
    index === targetLevel
  ) {
    return vars.colorBlueMain;
  } else if (
    currentLevel > targetLevel ||
    index === currentLevel ||
    currentLevel > index
  ) {
    return vars.colorGreen;
  } else {
    return vars.colorBlack100;
  }
};