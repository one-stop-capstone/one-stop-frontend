import { gql } from "@apollo/client";

export const getUserID = gql`
  query GET_USER_ID($uid: String!) {
    users(where: { firebase_token: { _eq: $uid } }) {
      id
    }
  }
`;
