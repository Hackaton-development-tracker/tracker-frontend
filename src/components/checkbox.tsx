import { Checkbox, styled } from '@mui/material';
import vars from '../static/scss/export.module.scss';

const CustomCheckbox = styled(Checkbox)(() => ({
  '&.MuiCheckbox-root': {
    padding: '4px',
    color: vars.colorBlack300,
  },
  '& .MuiSvgIcon-root': {
    height: '24px',
    width: '24px',
  },
  '&.Mui-checked': {
    color: vars.colorBlueMain,
    // '& svg': {
    //   '& path': {
    //     d: "path('M10.3055 15.9188L6.38647 11.9998C6.19895 11.8123 5.94464 11.707 5.67947 11.707C5.41431 11.707 5.16 11.8123 4.97247 11.9998C4.785 12.1873 4.67969 12.4416 4.67969 12.7068C4.67969 12.972 4.785 13.2263 4.97247 13.4138L8.89147 17.3328C9.0772 17.5186 9.29772 17.666 9.54042 17.7666C9.78312 17.8671 10.0433 17.9189 10.306 17.9189C10.5687 17.9189 10.8288 17.8671 11.0715 17.7666C11.3142 17.666 11.5347 17.5186 11.7205 17.3328L20.9725 8.08081C21.1599 7.89328 21.2653 7.63897 21.2653 7.37381C21.2653 7.10865 21.1599 6.85434 20.9725 6.66681C20.7849 6.47934 20.5306 6.37402 20.2655 6.37402C20.0003 6.37402 19.746 6.47934 19.5585 6.66681L10.3055 15.9188Z')",
    //   },
    // },
  },
}));

interface CheckboxTapProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const CheckboxTap : React.FC<CheckboxTapProps> = ({ checked, onChange, name }) => {
  return <CustomCheckbox checked={checked} onChange={onChange} name={name} />;
};

export default CheckboxTap;