import { gql } from "@apollo/client";

export const getUserID = gql`
  query GET_USER_ID($uid: String!) {
    users(where: { firebase_token: { _eq: $uid } }) {
      id
    }
  }
`;

export const getPublcCodesheets = gql`
  query GET_PUBLIC_CODESHEETS($uid: uuid) {
    codesheets(order_by: { title: asc }, where: { is_public: { _eq: true } }) {
      title
      user {
        name
      }
      id
      codesheet_questions_aggregate {
        aggregate {
          count(columns: codesheet_id)
        }
      }
      codesheet_ratings_aggregate {
        aggregate {
          count(columns: codesheet_id)
        }
      }
      codesheet_ratings(where: { user_id: { _eq: $uid } }) {
        id
      }
    }
  }
`;

export const getMyCodesheets = gql`
  query GET_MY_CODESHEETS($uid: uuid) {
    codesheets(order_by: { title: asc }, where: { user_id: { _eq: $uid } }) {
      title
      id
      is_public
      codesheet_questions_aggregate {
        aggregate {
          count(columns: codesheet_id)
        }
      }
      codesheet_ratings_aggregate {
        aggregate {
          count(columns: codesheet_id)
        }
      }
      codesheet_ratings(where: { user_id: { _eq: $uid } }) {
        id
      }
    }
  }
`;

export const getTopRatedCodesheets = gql`
  query GET_TOP_RATED_CODESHEETS {
    codesheets(
      order_by: { codesheet_ratings_aggregate: { count: desc } }
      where: { is_public: { _eq: true } }
      limit: 6
    ) {
      title
      id
    }
  }
`;

export const getCodeSheetQuestions = gql`
  query GET_CODESHEET_QUESTIONS($id: uuid!) {
    codesheets_by_pk(id: $id) {
      codesheet_questions {
        question {
          difficulty
          id
          question_url
          source
          title
          tags {
            tag_name
          }
        }
      }
      title
      description
      codesheet_ratings_aggregate {
        aggregate {
          count(columns: codesheet_id)
        }
      }
    }
  }
`;
export const getUser = gql`
  query GET_USER($id: uuid!) {
    users_by_pk(id: $id) {
      email
      name
    }
  }
`;
