/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRentOrder = /* GraphQL */ `
  mutation CreateRentOrder(
    $input: CreateRentOrderInput!
    $condition: ModelRentOrderConditionInput
  ) {
    createRentOrder(input: $input, condition: $condition) {
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
export const updateRentOrder = /* GraphQL */ `
  mutation UpdateRentOrder(
    $input: UpdateRentOrderInput!
    $condition: ModelRentOrderConditionInput
  ) {
    updateRentOrder(input: $input, condition: $condition) {
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
export const deleteRentOrder = /* GraphQL */ `
  mutation DeleteRentOrder(
    $input: DeleteRentOrderInput!
    $condition: ModelRentOrderConditionInput
  ) {
    deleteRentOrder(input: $input, condition: $condition) {
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
export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
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
