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
      }
      payments(sortDirection: ASC) {
        items {
          id
          checkDate
          checkNumber
          checkAmount
          invoiceNumber
          invoiceAmount
        }
      }
    }
  }
`;



export const LIST_OWNERS = gql`
  query ListOwners {
    listOwners {
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
      }
    }
  }
`;

export const LIST_PAYMENTS = gql`
  query ListPayments {
    listPayments {
      items {
        id
        checkDate
        checkNumber
        checkAmount
        invoiceNumber
        invoiceAmount
        ownerPaymentsId
        owner {
          id
          name
        }
      }
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

export const LIST_UNITS = gql`
  query ListUnits($filter: ModelUnitFilterInput, $limit: Int, $nextToken: String) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unitNumber
        ownerUnitsId
      }
      nextToken
    }
  }
`;

export const GET_PAYMENT = gql`
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
      }
      ownerPaymentsId
    }
  }
`;


export const LIST_PAYMENTS_SORTED = gql`
  query PaymentsByDate($type: String!, $sortDirection: ModelSortDirection, $limit: Int) {
    paymentsByDate(type: $type, sortDirection: $sortDirection, limit: $limit) {
      items {
        id
        type
        checkDate
        checkNumber
        checkAmount
        invoiceNumber
        invoiceAmount
        ownerPaymentsId
      }
      nextToken
    }
  }
`;

export const LIST_OWNERS_SORTED = gql`
  query OwnersByName($type: String!, $sortDirection: ModelSortDirection, $limit: Int) {
    ownersByName(type: $type, sortDirection: $sortDirection, limit: $limit) {
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
      }
      nextToken
    }
  }
`;
