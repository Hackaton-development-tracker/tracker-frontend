import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from './knowledgeBase.module.scss';
import knowledgeBase from '../../utils/backendData/knowledgeBase.json';
import { Card } from '../card/card';
import { KNOWLEDGE_BASE } from '../../utils/constants';
import vars from '../../static/scss/export.module.scss';
import Tag from '../tag';
import { getSourceColor } from '../../utils/helpers/getSourceColor';

type Source = {
  id: number;
  type: string;
  title: string;
  author: string;
  description: string;
  tags: string[];
};

const SourceTitleTypography = styled(Typography)({
  fontFamily: ['YS Display Medium'],
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: 0,
});

const SourceTextTypography = styled(Typography)({
  fontFamily: ['YS Text Regular'],
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 0,
});

const SourceGreyTypography = styled(Typography)({
  fontFamily: ['YS Text Regular'],
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  color: `${vars.colorBlack500}`,
});

const KnowledgeBase = () => {
  const sourceTitle = (source: Source) => (
    <>
      <div className={styles.titlecontainer}>
        <SourceTitleTypography>{source.title}</SourceTitleTypography>
        <SourceGreyTypography>{source.author}</SourceGreyTypography>
      </div>
      <Tag
        text={source.type}
        color={getSourceColor(source.type)}
        radius="100px"
      />
    </>
  );

  const sourceContent = (source: Source) => (
    <div className={styles.sourcecontent}>
      <div className={styles.description}>
        <SourceTextTypography>{source.description}</SourceTextTypography>
      </div>
      <div className={styles.tags}>
        {source.tags.map((tag) => {
          return (
            <Tag key={tag} text={tag} color={vars.colorGrey} radius="6px" />
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <SourceTitleTypography>{KNOWLEDGE_BASE}</SourceTitleTypography>
      <div className={styles.sourcescontainer}>
        {knowledgeBase[0].knowledge_base.map((source) => (
          <Card
            key={source.id}
            title={sourceTitle(source)}
            content={sourceContent(source)}
            classname={styles.card}
          />
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
