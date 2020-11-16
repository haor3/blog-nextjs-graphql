import { useEffect, useState } from 'react';
import { getLinkPreview } from 'link-preview-js';
import _ from 'lodash';

import { Button } from 'react-bootstrap';

import {
  Container,
  ImgContainer,
  ArticleContainer,
  ModalContainer,
} from './styles/ArticleCard';

import ArticleModal from './ArticleModal';

const noImgUrl =
  'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6';

export default function ArticleCard({
  imageUrl,
  articleUrl,
  title,
  description,
  updateArticle,
  isCustomArticle,
  articleId,
  deleteArticle,
}) {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(async () => {
    try {
      if (!imageUrl) {
        let obj = await getLinkPreview(
          `https://cors-anywhere.herokuapp.com/${articleUrl}`
        );

        if (obj.images && !_.isEmpty(obj.images)) {
          setImgUrl(obj.images[0]);
        } else {
          setImgUrl(noImgUrl);
        }
      }
    } catch (err) {
      setImgUrl(noImgUrl);
    }
    return () => {};
  }, []);

  return (
    <>
      <Container>
        <ImgContainer>
          <img src={imageUrl || imgUrl} alt="img" />
        </ImgContainer>
        <ArticleContainer>
          <h2>{title || 'Anti-Anxiety Medications: A Complete Guide'}</h2>
          <p>
            {description ||
              'Suffering from anxiety can be emotionally and psychologically exhausting. Luckily, there are a range of medications designed to help.'}
          </p>
          <a href={articleUrl} target="blank">
            READ THIS ARTICLE
          </a>
          {isCustomArticle && (
            <ModalContainer>
              <ArticleModal
                updateArticle={updateArticle}
                articleId={articleId}
                values={{ imageUrl, articleUrl, title, description }}
                buttonText="Edit"
                formTitle="Edit Article"
              />
              <Button onClick={() => deleteArticle(articleId)}>Delete</Button>
            </ModalContainer>
          )}
        </ArticleContainer>
      </Container>
      <hr />
    </>
  );
}
