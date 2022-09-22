import { gql } from '@apollo/client';

export interface Nurse {
    secondName: string
    address: string
    info: string
    docScan: string
    idScan: string
    isValidated: boolean
}



export const GET_USER_CV = gql`
  query Nurse {
    usersCV {
        secondName
        address
        info
        docScan
        idScan
        isValidated
    }
  }
`;