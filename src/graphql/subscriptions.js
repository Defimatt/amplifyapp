/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRouterVote = /* GraphQL */ `
  subscription OnCreateRouterVote {
    onCreateRouterVote {
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
export const onUpdateRouterVote = /* GraphQL */ `
  subscription OnUpdateRouterVote {
    onUpdateRouterVote {
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
export const onDeleteRouterVote = /* GraphQL */ `
  subscription OnDeleteRouterVote {
    onDeleteRouterVote {
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
export const onCreateRouter = /* GraphQL */ `
  subscription OnCreateRouter {
    onCreateRouter {
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
export const onUpdateRouter = /* GraphQL */ `
  subscription OnUpdateRouter {
    onUpdateRouter {
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
export const onDeleteRouter = /* GraphQL */ `
  subscription OnDeleteRouter {
    onDeleteRouter {
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
export const onCreateChefVote = /* GraphQL */ `
  subscription OnCreateChefVote {
    onCreateChefVote {
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
export const onUpdateChefVote = /* GraphQL */ `
  subscription OnUpdateChefVote {
    onUpdateChefVote {
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
export const onDeleteChefVote = /* GraphQL */ `
  subscription OnDeleteChefVote {
    onDeleteChefVote {
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
export const onCreateChef = /* GraphQL */ `
  subscription OnCreateChef {
    onCreateChef {
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
export const onUpdateChef = /* GraphQL */ `
  subscription OnUpdateChef {
    onUpdateChef {
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
export const onDeleteChef = /* GraphQL */ `
  subscription OnDeleteChef {
    onDeleteChef {
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
