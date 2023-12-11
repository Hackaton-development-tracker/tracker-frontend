import vars from '../../static/scss/export.module.scss';

export const getSourceColor = (type: string) => {
  if (type === 'Книга') {
    return "#FFE1BD80";
  } else if (type === 'Видео') {
    return "#CCC2ED80";
  } else return vars.colorGrey;
};