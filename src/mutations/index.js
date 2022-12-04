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
export const addNewCodesheet = gql`
  mutation ADD_NEW_CODESHEET(
    $description: String!
    $is_public: Boolean
    $user_id: uuid
    $title: String
  ) {
    insert_codesheets_one(
      object: {
        description: $description
        title: $title
        user_id: $user_id
        is_public: $is_public
      }
    ) {
      id
    }
  }
`;

export const deleteUserRating = gql`
  mutation DELETE_USER_RATING($codesheet_id: uuid, $user_id: uuid) {
    delete_codesheet_ratings(
      where: {
        codesheet_id: { _eq: $codesheet_id }
        user_id: { _eq: $user_id }
      }
    ) {
      affected_rows
    }
  }
`;

export const addUserRating = gql`
  mutation ADD_USER_RATING($codesheet_id: uuid, $user_id: uuid) {
    insert_codesheet_ratings_one(
      object: { codesheet_id: $codesheet_id, user_id: $user_id }
    ) {
      id
    }
  }
`;

export const toggleVisibility = gql`
  mutation TOGGLE_VISIBILITY($id: uuid, $is_public: Boolean) {
    update_codesheets(
      where: { id: { _eq: $id } }
      _set: { is_public: $is_public }
    ) {
      affected_rows
    }
  }
`;

export const addQuestionCodesheet = gql`
  mutation MyMutation($codesheet_id: uuid, $question_id: uuid) {
    insert_codesheet_questions(
      objects: { codesheet_id: $codesheet_id, question_id: $question_id }
    ) {
      affected_rows
    }
  }
`;
