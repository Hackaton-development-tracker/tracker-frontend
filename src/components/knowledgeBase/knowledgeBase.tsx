import styles from './knowledgeBase.module.scss';
import { Card } from '../card/card';
import { KNOWLEDGE_BASE } from '../../utils/constants';
import { SourceTypography, TitleTypography, TextTypography, GreyTypography } from '../cardelements';
import vars from '../../static/scss/export.module.scss';
import Tag from '../tag';
import { IKnowledge, knowledgeSelect  } from '../../services/redux/slices/knowledge/knowledge';
import { useAppSelector } from '../../services/typeHooks';
import { getSourceColor } from '../../utils/helpers/getSourceColor';

const KnowledgeBase = () => {
  const sources = useAppSelector(knowledgeSelect);
  const sourceList = sources.knowledge_base || [];

  const sourceTitle = (source: IKnowledge) => (
    <>
      <div className={styles.sourceTitle}>
        <SourceTypography>{source.theme}</SourceTypography>
        <GreyTypography>{source.author}</GreyTypography>
      </div>
      <Tag
        text={source.type}
        color={getSourceColor(source.type)}
        radius="100px"
      />
    </>
  );

  const sourceContent = (source: IKnowledge) => (
    <div className={styles.sourceContent}>
      <div className={styles.sourceDescription}>
        <TextTypography>{source.description}</TextTypography>
      </div>
      <div className={styles.sourceTags}>
        {source.tags.map((tag) => {
          return (
            <Tag key={tag.id} text={tag.name} color={vars.colorGrey} radius="6px" />
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <TitleTypography>{KNOWLEDGE_BASE}</TitleTypography>
      <div className={styles.sourceContainer}>
        {sourceList.map((source) => (
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
