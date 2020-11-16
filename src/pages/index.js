import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import _ from 'lodash';

import { GlobalStyles } from 'styles/global-styles';

import { getFirstPageArticles } from 'queries';
import {
  ArticleCard,
  TopNavBar,
  SecondNavBar,
  Articles,
  ToggleMode,
  ArticleModal,
} from 'components';

export default function Home() {
  const { data, loading } = useQuery(getFirstPageArticles);

  const [pageNumbers, setPageNumbers] = useState([1]);
  const [mode, setMode] = useState('light');
  const [newArticles, setNewArticles] = useState([]);

  const handleScroll = () => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      let numbers = [...pageNumbers, pageNumbers[pageNumbers.length - 1] + 1];
      setPageNumbers(numbers);
    }
  };

  const onChange = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  const getNewArticle = (article) => {
    setNewArticles([article, ...newArticles]);
  };

  const updateArticle = (id, article) => {
    let _newArticles = [...newArticles];
    _newArticles[id] = article;
    setNewArticles([..._newArticles]);
  };

  const deleteArticle = (id) => {
    let _newArticles = _.filter(
      [...newArticles],
      (article, index) => index !== id
    );
    setNewArticles([..._newArticles]);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [pageNumbers, newArticles]);

  if (loading) return <span>loading...</span>;

  return (
    <>
      <GlobalStyles mode={mode} />
      <div onScroll={handleScroll}>
        <TopNavBar />
        <SecondNavBar mode={mode} />
        <div style={{ height: 650 }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src="https://fintrosapp-external-images.s3.amazonaws.com/www.fintros.com.png"
            alt="img"
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ToggleMode onChange={onChange} />
          <ArticleModal
            style={{
              position: 'fixed',
              textAlign: 'center',
              bottom: 20,
            }}
            buttonText="Create New Article"
            formTitle="New Article"
            getNewArticle={(article) => getNewArticle(article)}
          />
        </div>

        {!_.isEmpty(newArticles) &&
          _.map([...newArticles], (article, index) => (
            <ArticleCard
              isCustomArticle={true}
              key={index}
              articleId={index}
              imageUrl={article.imageUrl}
              articleUrl={article.articleUrl}
              title={article.title}
              description={article.description}
              updateArticle={updateArticle}
              deleteArticle={deleteArticle}
            />
          ))}

        {_.map(data.firstPageArticles, (article) => {
          return (
            <ArticleCard
              key={article.id}
              articleUrl={article.url}
              title={article.title}
              description={article.description}
            />
          );
        })}

        {_.map(pageNumbers, (number) => (
          <Articles key={number} page={number} />
        ))}
      </div>
    </>
  );
}
