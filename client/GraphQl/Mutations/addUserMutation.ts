import { gql } from '@apollo/client';
import { User } from '../Queries/userQuery';


export type UserInputData = Omit<User, 'cv'>;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $sex: Boolean!, $birthDate: String!, $phoneNumber: String!) {
  addUser(firstName: $firstName, lastName: $lastName, sex: $sex, birthDate: $birthDate, phoneNumber: $phoneNumber) {
    phoneNumber
  }
}

`;
