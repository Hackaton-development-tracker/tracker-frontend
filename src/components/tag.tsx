import Chip from '@mui/material/Chip';

type TagProps = {
  key?: number;
  text: string;
  color: string;
  radius?: string;
  border?: string;
};

const Tag: React.FC<TagProps> = ({ text, color, radius, border }) => {
  return (
    <Chip
      label={<span>{text}</span>}
      sx={{
        borderRadius: radius,
        backgroundColor: color,
        maxHeight: '24px',
        border: border,
      }}
    />
  );
};

export default Tag;
