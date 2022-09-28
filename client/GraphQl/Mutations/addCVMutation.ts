import { gql } from '@apollo/client';
export interface User_CV_Data {
    phoneNumber: string
    secondName: string
    address: string
    info?: string
    docScan: string
    idScan: string
}

export const ADD_CV = gql`
 mutation addCV($phoneNumber: String!, $secondName: String!, $address: String!, $info: String, $docScan: String!, $idScan: String) {
  addCv(phoneNumber: $phoneNumber, secondName: $secondName, address: $address, info: $info, docScan: $docScan, idScan: $idScan) {
    phoneNumber
  }
}
`;