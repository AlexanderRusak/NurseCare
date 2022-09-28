import { gql } from '@apollo/client';

interface Adv{
    id: number;
    title: string;
    imageLink: string,
    link: string,
}

export interface AdvsData {
    advs: Adv[]
}

export const GET_ADVS = gql`
  query Advs {
    advs {
      id
      title
      imageLink
      link
    }
  }
`;
