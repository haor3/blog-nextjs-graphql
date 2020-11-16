import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

export default function ArticleForm({ values, setArticleValues }) {
  const [article, setArticle] = useState({
    title: '',
    articleUrl: '',
    description: '',
    imageUrl: null,
  });

  useEffect(() => {
    if (values) {
      setArticle(values);
    }
  }, []);

  const onChange = (e) => {
    let updatedArticle = article;

    updatedArticle[e.target.name] = e.target.value;
    setArticle(updatedArticle);
    setArticleValues(article);
  };

  const handleImageInput = (e) => {
    e.preventDefault();
    let file = e.target.files[0];

    fileToDataUri(file).then((dataUri) => {
      let updatedArticle = article;
      updatedArticle['imageUrl'] = dataUri;
      setArticle(updatedArticle);
      setArticleValues(article);
    });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Enter title"
          defaultValue={article.title}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>URL</Form.Label>
        <Form.Control
          name="articleUrl"
          type="text"
          placeholder="Enter url"
          defaultValue={article.articleUrl}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          rows={3}
          placeholder="Enter description"
          defaultValue={article.description}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.File
          name="imageUrl"
          id="exampleFormControlFile1"
          label="Image file input"
          onChange={handleImageInput}
        />
        {article.imageUrl && (
          <img width="100%" height="50%" src={article.imageUrl} alt="img" />
        )}
      </Form.Group>
    </Form>
  );
}
