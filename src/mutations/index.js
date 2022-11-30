import { gql } from "@apollo/client";

export const addNewUser = gql`
  mutation ADD_NEW_USER(
    $email: String!
    $firebase_token: String!
    $graduation_year: Int!
    $name: String!
    $university_name: String!
  ) {
    insert_users_one(
      object: {
        email: $email
        firebase_token: $firebase_token
        graduating_year: $graduation_year
        name: $name
        university_name: $university_name
      }
    ) {
      name
      email
      id
    }
  }
`;
