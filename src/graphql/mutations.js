/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRouterVote = /* GraphQL */ `
  mutation CreateRouterVote(
    $input: CreateRouterVoteInput!
    $condition: ModelRouterVoteConditionInput
  ) {
    createRouterVote(input: $input, condition: $condition) {
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
export const updateRouterVote = /* GraphQL */ `
  mutation UpdateRouterVote(
    $input: UpdateRouterVoteInput!
    $condition: ModelRouterVoteConditionInput
  ) {
    updateRouterVote(input: $input, condition: $condition) {
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
export const deleteRouterVote = /* GraphQL */ `
  mutation DeleteRouterVote(
    $input: DeleteRouterVoteInput!
    $condition: ModelRouterVoteConditionInput
  ) {
    deleteRouterVote(input: $input, condition: $condition) {
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
export const createRouter = /* GraphQL */ `
  mutation CreateRouter(
    $input: CreateRouterInput!
    $condition: ModelRouterConditionInput
  ) {
    createRouter(input: $input, condition: $condition) {
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
export const updateRouter = /* GraphQL */ `
  mutation UpdateRouter(
    $input: UpdateRouterInput!
    $condition: ModelRouterConditionInput
  ) {
    updateRouter(input: $input, condition: $condition) {
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
export const deleteRouter = /* GraphQL */ `
  mutation DeleteRouter(
    $input: DeleteRouterInput!
    $condition: ModelRouterConditionInput
  ) {
    deleteRouter(input: $input, condition: $condition) {
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
export const createChefVote = /* GraphQL */ `
  mutation CreateChefVote(
    $input: CreateChefVoteInput!
    $condition: ModelChefVoteConditionInput
  ) {
    createChefVote(input: $input, condition: $condition) {
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
export const updateChefVote = /* GraphQL */ `
  mutation UpdateChefVote(
    $input: UpdateChefVoteInput!
    $condition: ModelChefVoteConditionInput
  ) {
    updateChefVote(input: $input, condition: $condition) {
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
export const deleteChefVote = /* GraphQL */ `
  mutation DeleteChefVote(
    $input: DeleteChefVoteInput!
    $condition: ModelChefVoteConditionInput
  ) {
    deleteChefVote(input: $input, condition: $condition) {
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
export const createChef = /* GraphQL */ `
  mutation CreateChef(
    $input: CreateChefInput!
    $condition: ModelChefConditionInput
  ) {
    createChef(input: $input, condition: $condition) {
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
export const updateChef = /* GraphQL */ `
  mutation UpdateChef(
    $input: UpdateChefInput!
    $condition: ModelChefConditionInput
  ) {
    updateChef(input: $input, condition: $condition) {
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
export const deleteChef = /* GraphQL */ `
  mutation DeleteChef(
    $input: DeleteChefInput!
    $condition: ModelChefConditionInput
  ) {
    deleteChef(input: $input, condition: $condition) {
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
