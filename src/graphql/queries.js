/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOwner = /* GraphQL */ `
  query GetOwner($id: ID!) {
    getOwner(id: $id) {
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
export const listOwners = /* GraphQL */ `
  query ListOwners(
    $filter: ModelOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
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
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        checkDate
        checkNumber
        checkAmount
        invoiceNumber
        invoiceAmount
        ownerPaymentsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ownersByName = /* GraphQL */ `
  query OwnersByName(
    $type: String!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ownersByName(
      type: $type
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const paymentsByDate = /* GraphQL */ `
  query PaymentsByDate(
    $type: String!
    $checkDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsByDate(
      type: $type
      checkDate: $checkDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        checkDate
        checkNumber
        checkAmount
        invoiceNumber
        invoiceAmount
        ownerPaymentsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const paymentsByOwnerPaymentsIdAndCheckDate = /* GraphQL */ `
  query PaymentsByOwnerPaymentsIdAndCheckDate(
    $ownerPaymentsId: ID!
    $checkDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsByOwnerPaymentsIdAndCheckDate(
      ownerPaymentsId: $ownerPaymentsId
      checkDate: $checkDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        checkDate
        checkNumber
        checkAmount
        invoiceNumber
        invoiceAmount
        ownerPaymentsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
