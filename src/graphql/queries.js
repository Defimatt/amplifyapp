/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRouterVote = /* GraphQL */ `
  query GetRouterVote($id: ID!) {
    getRouterVote(id: $id) {
      id
      router {
        id
        name
        address
        status
        proposer
        chefs {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      voter
      direction
      createdAt
      updatedAt
    }
  }
`;
export const listRouterVotes = /* GraphQL */ `
  query ListRouterVotes(
    $filter: ModelRouterVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouterVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        router {
          id
          name
          address
          status
          proposer
          createdAt
          updatedAt
        }
        voter
        direction
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRouter = /* GraphQL */ `
  query GetRouter($id: ID!) {
    getRouter(id: $id) {
      id
      name
      address
      status
      proposer
      chefs {
        items {
          id
          name
          address
          status
          proposer
          createdAt
          updatedAt
        }
        nextToken
      }
      votes {
        items {
          id
          voter
          direction
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRouters = /* GraphQL */ `
  query ListRouters(
    $filter: ModelRouterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        status
        proposer
        chefs {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChefVote = /* GraphQL */ `
  query GetChefVote($id: ID!) {
    getChefVote(id: $id) {
      id
      chef {
        id
        name
        address
        status
        proposer
        router {
          id
          name
          address
          status
          proposer
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      voter
      direction
      createdAt
      updatedAt
    }
  }
`;
export const listChefVotes = /* GraphQL */ `
  query ListChefVotes(
    $filter: ModelChefVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChefVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chef {
          id
          name
          address
          status
          proposer
          createdAt
          updatedAt
        }
        voter
        direction
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChef = /* GraphQL */ `
  query GetChef($id: ID!) {
    getChef(id: $id) {
      id
      name
      address
      status
      proposer
      router {
        id
        name
        address
        status
        proposer
        chefs {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      votes {
        items {
          id
          voter
          direction
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChefs = /* GraphQL */ `
  query ListChefs(
    $filter: ModelChefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        status
        proposer
        router {
          id
          name
          address
          status
          proposer
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const routersByStatus = /* GraphQL */ `
  query RoutersByStatus(
    $status: EntryStatus
    $sortDirection: ModelSortDirection
    $filter: ModelRouterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    routersByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        address
        status
        proposer
        chefs {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const chefsByStatus = /* GraphQL */ `
  query ChefsByStatus(
    $status: EntryStatus
    $sortDirection: ModelSortDirection
    $filter: ModelChefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chefsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        address
        status
        proposer
        router {
          id
          name
          address
          status
          proposer
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
