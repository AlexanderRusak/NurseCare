import { gql } from '@apollo/client';
import { Nurse } from './userCVQuery';

export interface User {
    cv: Nurse | null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    sex: boolean;
    birthDate: number
}

export interface UserPhoneNumber {
    phoneNumber: string
}

export const GET_USER = gql`
  query User($phoneNumber:String!) {
    user(phoneNumber:$phoneNumber) {
        cv
        firstName
        lastName
        phoneNumber
        sex
        birthDate
    }
  }
`;