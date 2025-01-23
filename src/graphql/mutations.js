/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOwner = /* GraphQL */ `
  mutation CreateOwner(
    $input: CreateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    createOwner(input: $input, condition: $condition) {
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
export const updateOwner = /* GraphQL */ `
  mutation UpdateOwner(
    $input: UpdateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    updateOwner(input: $input, condition: $condition) {
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
export const deleteOwner = /* GraphQL */ `
  mutation DeleteOwner(
    $input: DeleteOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
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
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
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
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      type
      checkDate
      checkNumber
      checkAmount
      invoiceNumber
      invoiceAmount
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
        createdAt
        updatedAt
        __typename
      }
      ownerPaymentsId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      type
      checkDate
      checkNumber
      checkAmount
      invoiceNumber
      invoiceAmount
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
        createdAt
        updatedAt
        __typename
      }
      ownerPaymentsId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      type
      checkDate
      checkNumber
      checkAmount
      invoiceNumber
      invoiceAmount
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
        createdAt
        updatedAt
        __typename
      }
      ownerPaymentsId
      createdAt
      updatedAt
      __typename
    }
  }
`;
