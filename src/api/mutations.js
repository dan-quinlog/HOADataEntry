import { gql } from '@apollo/client';

export const CREATE_OWNER = gql`
    mutation CreateOwner($input: CreateOwnerInput!) {
      createOwner(input: $input) {
        id
        name
        address1
        address2
        city
        state
        zip
        email
        phone
      }
    }
`;

export const UPDATE_OWNER = gql`
    mutation UpdateOwner($input: UpdateOwnerInput!) {
      updateOwner(input: $input) {
        id
        name
        address1
        address2
        city
        state
        zip
        email
        phone
      }
    }
`;

export const CREATE_PAYMENT = gql`
    mutation CreatePayment($input: CreatePaymentInput!) {
      createPayment(input: $input) {
        id
        checkDate
        checkNumber
        checkAmount
        invoiceNumber
        invoiceAmount
        owner {
          id
          name
        }
        ownerPaymentsId
      }
    }
`;

export const UPDATE_PAYMENT = gql`
    mutation UpdatePayment($input: UpdatePaymentInput!) {
      updatePayment(input: $input) {
        id
        checkDate
        checkNumber
        checkAmount
        invoiceNumber
        invoiceAmount
        owner {
          id
          name
        }
        ownerPaymentsId
      }
    }
`;

export const DELETE_OWNER = gql`
  mutation DeleteOwner($input: DeleteOwnerInput!, $condition: ModelOwnerConditionInput) {
  deleteOwner(input: $input, condition: $condition) {
    id
    type
    name
    address1
    address2
    city
    state
    zip
    email
    phone
  }
}
`;

export const CREATE_UNIT = gql`
  mutation CreateUnit($input: CreateUnitInput!, $condition: ModelUnitConditionInput) {
  createUnit(input: $input, condition: $condition) {
    id
    unitNumber
      owner {
      id
      type
      name
      address1
      address2
      city
      state
      zip
      email
      phone
    }
    ownerUnitsId
  }
}
`;

export const UPDATE_UNIT = gql`
  mutation UpdateUnit($input: UpdateUnitInput!, $condition: ModelUnitConditionInput) {
  updateUnit(input: $input, condition: $condition) {
    id
    unitNumber
      owner {
      id
      type
      name
    }
    ownerUnitsId
  }
}
`;

export const DELETE_UNIT = gql`
  mutation DeleteUnit($input: DeleteUnitInput!, $condition: ModelUnitConditionInput) {
  deleteUnit(input: $input, condition: $condition) {
    id
    unitNumber
    ownerUnitsId
  }
}
`;

export const DELETE_PAYMENT = gql`
  mutation DeletePayment($input: DeletePaymentInput!, $condition: ModelPaymentConditionInput) {
  deletePayment(input: $input, condition: $condition) {
    id
    type
    checkDate
    ownerPaymentsId
  }
}
`;
