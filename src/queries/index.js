import { gql } from '@apollo/client';

export const getFirstPageArticles = gql`
  query firstPageArticles {
    firstPageArticles {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
    }
  }
`;

export const retrievePageArticles = gql`
  query($page: Int!) {
    retrievePageArticles(page: $page) {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
    }
  }
`;
