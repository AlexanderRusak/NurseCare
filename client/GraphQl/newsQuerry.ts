import { gql } from '@apollo/client';

interface News {
  id: number;
  title: string;
  imageLink: string,
  link: string,
}

export interface NewsData {
  news: News[]
}

export const GET_NEWS = gql`
  query News {
    news {
      id
      title
      imageLink
      link
    }
  }
`;
