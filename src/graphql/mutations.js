import { gql } from '@apollo/client';

export const CREATE_OWNER = gql`
  mutation CreateOwner(
    $input: CreateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    createOwner(input: $input, condition: $condition) {
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
        nextToken
        __typename
      }
      payments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const UPDATE_OWNER = gql`
  mutation UpdateOwner(
    $input: UpdateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    updateOwner(input: $input, condition: $condition) {
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
        nextToken
        __typename
      }
      payments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const DELETE_OWNER = gql`
  mutation DeleteOwner(
    $input: DeleteOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    deleteOwner(input: $input, condition: $condition) {
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
        nextToken
        __typename
      }
      payments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const CREATE_UNIT = gql`
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
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
export const UPDATE_UNIT = gql`
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
export const DELETE_UNIT = gql`
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
export const CREATE_PAYMENT = gql`
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const UPDATE_PAYMENT = gql`
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const DELETE_PAYMENT = gql`
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
