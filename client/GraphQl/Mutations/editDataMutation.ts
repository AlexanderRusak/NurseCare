import { gql } from '@apollo/client';
import { UserInputData } from './addUserMutation';


export type UserEditData = Partial<UserInputData> & Required<Pick<UserInputData, 'phoneNumber'>>;


export const EDIT_USER = gql`
 mutation editUser($firstName: String, 
                  $lastName: String,
                  $sex: Boolean, 
                  $birthDate: String,
                  $phoneNumber: String!) {
    editUser(
    firstName: $firstName, 
    lastName: $lastName, 
    sex: $sex, 
    birthDate: $birthDate, 
    phoneNumber: $phoneNumber) {
      phoneNumber
    }
}
`;