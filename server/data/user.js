let users = [
    {
      id: '1',
      username: '1번bob',
      password: '$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm',
      name: '1번Bob',
      },
      {
        id: '2',
        username: '2번bob',
        password: '$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm',
        name: '2번Bob',
        },
  ];

  
  export async function findById(id) {
    return users.find((user) => user.id === id);
  }
  
