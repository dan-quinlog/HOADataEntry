import { gql } from '@apollo/client';

export const GET_OWNER_DETAILS = gql`
  query GetOwner($id: ID!) {
    getOwner(id: $id) {
      id
      name
      address1
      address2
      city
      state
      zip
      email
      phone
      units {
        items {
          id
          unitNumber
        }
        nextToken
        __typename
      }
      payments {
        items {
          id
          checkDate
          checkNumber
          checkAmount
          invoiceNumber
          invoiceAmount
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const LIST_OWNERS = gql`
  query ListOwners(
    $filter: ModelOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address1
        address2
        city
        state
        zip
        email
        phone
        units {
          items {
            id
            unitNumber
          }
        }
        payments {
          items {
            id
            checkDate
            checkNumber
            checkAmount
            invoiceNumber
            invoiceAmount
          }
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const GET_UNIT = gql`
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      id
      unitNumber
      owner {
        id
        name
        address1
        address2
        city
        state
        zip
        email
        phone
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      ownerUnitsId
      __typename
    }
  }
`;
export const LIST_UNITS = gql`
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unitNumber
        createdAt
        updatedAt
        ownerUnitsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const GET_PAYMENT = gql`
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      checkDate
      checkNumber
      checkAmount
      invoiceNumber
      invoiceAmount
      owner {
        id
        name
        address1
        address2
        city
        state
        zip
        email
        phone
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      ownerPaymentsId
      __typename
    }
  }
`;
export const LIST_PAYMENTS = gql`
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        checkDate
        checkNumber
        checkAmount
        invoiceNumber
        invoiceAmount
        createdAt
        updatedAt
        ownerPaymentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
