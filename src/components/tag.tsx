import Chip from '@mui/material/Chip';

type TagProps = {
  key?: string;
  text: string;
  color: string;
  radius?: string;
};

const Tag: React.FC<TagProps> = ({ text, color, radius }) => {
  return (
    <Chip
      label={<span>{text}</span>}
      sx={{
        borderRadius: radius,
        backgroundColor: color,
        maxHeight: '24px',
      }}
    />
  );
};

export default Tag;
