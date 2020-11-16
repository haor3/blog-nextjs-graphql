import { useQuery } from '@apollo/client';
import _ from 'lodash';

import { retrievePageArticles } from 'queries';
import { ArticleCard } from 'components';

export default function Articles(props) {
  if (props.page === 1) return <></>;

  const { data, loading } = useQuery(retrievePageArticles, {
    variables: {
      page: props.page,
    },
  });

  if (loading) return <span>loading...</span>;

  return (
    <div>
      {_.map(data.retrievePageArticles, (article) => {
        return (
          <ArticleCard
            key={article.id}
            articleId={article.id}
            articleUrl={article.url}
            title={article.title}
            description={article.description}
          />
        );
      })}
    </div>
  );
}
