import vars from '../../static/scss/export.module.scss';
export const getCurrentLevelColor = (
  index: number,
  currentLevel: number,
) => {
   if (
    index === currentLevel ||
    currentLevel > index
  ) {
    return vars.colorGreen;
  } else {
    return vars.colorBlack100;
  }
};
export const getNextLevelColor = (
  index: number,
  currentLevel: number,
  targetLevel: number,
  nextLevel?: number,
) => {
  if (
    currentLevel < targetLevel &&
    index === targetLevel || 
    index === nextLevel
    
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