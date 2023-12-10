import styles from './knowledgeBase.module.scss';
import knowledgeBase from '../../utils/backendData/knowledgeBase.json';
import { Card } from '../card/card';
import { KNOWLEDGE_BASE } from '../../utils/constants';
import { SourceTypography, TitleTypography, TextTypography, GreyTypography } from '../cardelements';
import vars from '../../static/scss/export.module.scss';
import Tag from '../tag';
import { getSourceColor } from '../../utils/helpers/getSourceColor';

interface ISource {
  id: number;
  type: string;
  title: string;
  author: string;
  description: string;
  tags: string[];
};

// renders knowledge base with sources
const KnowledgeBase = () => {
  const sourceTitle = (source: ISource) => (
    <>
      <div className={styles.sourceTitle}>
        <SourceTypography>{source.title}</SourceTypography>
        <GreyTypography>{source.author}</GreyTypography>
      </div>
      <Tag
        text={source.type}
        color={getSourceColor(source.type)}
        radius="100px"
      />
    </>
  );

  const sourceContent = (source: ISource) => (
    <div className={styles.sourceContent}>
      <div className={styles.sourceDescription}>
        <TextTypography>{source.description}</TextTypography>
      </div>
      <div className={styles.sourceTags}>
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
      <TitleTypography>{KNOWLEDGE_BASE}</TitleTypography>
      <div className={styles.sourceContainer}>
        {knowledgeBase[0].knowledge_base.map((source) => (
          <Card
            key={source.id}
            title={sourceTitle(source)}
            content={sourceContent(source)}
            classname={styles.sourceCard}
          />
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
