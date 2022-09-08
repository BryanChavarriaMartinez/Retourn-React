/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRentOrder = /* GraphQL */ `
  query GetRentOrder($id: ID!) {
    getRentOrder(id: $id) {
      id
      cardId
      borrowerUserId
      lenderUserID
      rentValue
      borrowerEmailID
      lenderEmailID
      commonID
      createdAt
      updatedAt
      listing {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rentValue
        userID
        commonID
        createdAt
        updatedAt
      }
    }
  }
`;
export const listRentOrders = /* GraphQL */ `
  query ListRentOrders(
    $filter: ModelRentOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRentOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cardId
        borrowerUserId
        lenderUserID
        rentValue
        borrowerEmailID
        lenderEmailID
        commonID
        createdAt
        updatedAt
        listing {
          id
          title
          categoryName
          categoryID
          description
          images
          locationID
          locationName
          owner
          rentValue
          userID
          commonID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getOrderByBorrowerID = /* GraphQL */ `
  query GetOrderByBorrowerID(
    $borrowerUserId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRentOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderByBorrowerID(
      borrowerUserId: $borrowerUserId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cardId
        borrowerUserId
        lenderUserID
        rentValue
        borrowerEmailID
        lenderEmailID
        commonID
        createdAt
        updatedAt
        listing {
          id
          title
          categoryName
          categoryID
          description
          images
          locationID
          locationName
          owner
          rentValue
          userID
          commonID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getOrderByLenderID = /* GraphQL */ `
  query GetOrderByLenderID(
    $lenderUserID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRentOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderByLenderID(
      lenderUserID: $lenderUserID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cardId
        borrowerUserId
        lenderUserID
        rentValue
        borrowerEmailID
        lenderEmailID
        commonID
        createdAt
        updatedAt
        listing {
          id
          title
          categoryName
          categoryID
          description
          images
          locationID
          locationName
          owner
          rentValue
          userID
          commonID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      title
      categoryName
      categoryID
      description
      images
      locationID
      locationName
      owner
      rentValue
      userID
      commonID
      createdAt
      updatedAt
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rentValue
        userID
        commonID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getListingByCreatedAt = /* GraphQL */ `
  query GetListingByCreatedAt(
    $commonID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getListingByCreatedAt(
      commonID: $commonID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rentValue
        userID
        commonID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchListings = /* GraphQL */ `
  query SearchListings(
    $filter: SearchableListingFilterInput
    $sort: SearchableListingSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchListings(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rentValue
        userID
        commonID
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
