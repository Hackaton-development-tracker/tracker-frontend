import { useEffect } from 'react';
import styles from './knowledgeBase.module.scss';
import { Card } from '../card/card';
import { KNOWLEDGE_BASE } from '../../utils/constants';
import { SourceTypography, TitleTypography, TextTypography, GreyTypography } from '../cardelements';
// import vars from '../../static/scss/export.module.scss';
// import Tag from '../tag';
import { IKnowledge, knowledgeSelect, getKnowledgeApi  } from '../../services/redux/slices/knowledge/knowledge';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';

const KnowledgeBase = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    dispatch(getKnowledgeApi({ token }));
  }, [dispatch, token]);

  const sources = useAppSelector(knowledgeSelect);
  const sourceList = sources.knowledge_base || [];

  const sourceTitle = (source: IKnowledge) => (
    <>
      <div className={styles.sourceTitle}>
        <SourceTypography>{source.theme}</SourceTypography>
        <GreyTypography>{source.author}</GreyTypography>
      </div>

    </>
  );

  const sourceContent = (source: IKnowledge) => (
    <div className={styles.sourceContent}>
      <div className={styles.sourceDescription}>
        <TextTypography>{source.description}</TextTypography>
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
