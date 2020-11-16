import { useState, useEffect } from 'react';
import _ from 'lodash';

import { Button, Modal } from 'react-bootstrap';

import ArticleForm from './ArticleForm';

export default function ArticleModal({
  buttonText,
  formTitle,
  getNewArticle,
  updateArticle,
  style,
  values,
  articleId,
}) {
  const [show, setShow] = useState(false);
  const [articleValues, setArticleValues] = useState({});

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const emptyValues = _.filter(
      Object.values(articleValues),
      (value) => value === null || value === ''
    );
    if (emptyValues.length !== 0) {
      alert('Please fill in all fields!');
    } else {
      getNewArticle && getNewArticle(articleValues);
      updateArticle && updateArticle(articleId, articleValues);
      handleClose();
    }
  };

  useEffect(() => {
    if (!show) setArticleValues({});
  }, [show]);

  return (
    <div style={style}>
      <Button variant="primary" onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArticleForm values={values} setArticleValues={setArticleValues} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
