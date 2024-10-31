/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOwner = /* GraphQL */ `
  subscription OnCreateOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onCreateOwner(filter: $filter) {
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
export const onUpdateOwner = /* GraphQL */ `
  subscription OnUpdateOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onUpdateOwner(filter: $filter) {
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
export const onDeleteOwner = /* GraphQL */ `
  subscription OnDeleteOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onDeleteOwner(filter: $filter) {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit($filter: ModelSubscriptionUnitFilterInput) {
    onCreateUnit(filter: $filter) {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit($filter: ModelSubscriptionUnitFilterInput) {
    onUpdateUnit(filter: $filter) {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit($filter: ModelSubscriptionUnitFilterInput) {
    onDeleteUnit(filter: $filter) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
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
