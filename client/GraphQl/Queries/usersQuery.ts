import { gql } from '@apollo/client';
import { Nurse } from './userCVQuery';

export interface User {
    cv: Nurse | null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    sex: boolean;
    birthDate: string
}

export interface UserData {
    users: User[]
}

export const GET_USERS = gql`
  query Users{
    users {
        cv{
            secondName,
            address,
            info,
            docScan,
            idScan,
            docNumber,
            isValidated,
        }
        firstName
        lastName
        phoneNumber
        sex
        birthDate
    }
  }
`;