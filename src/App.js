import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listRouters } from './graphql/queries';
import { createRouter as createRouterMutation, deleteRouter as deleteRouterMutation } from './graphql/mutations';

const initialFormState = { name: '', address: '', status: 'COMMUNITY', proposer: '' };

function App() {
  const [routers, setRouters] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchRouters();
  }, []);

  async function fetchRouters() {
    const apiData = await API.graphql({query: listRouters });
    setRouters(apiData.data.listRouters.items);
  }

  async function createRouter() {
    setFormData({ ...formData, 'proposer': "0x8C..."});
    if (!formData.name || !formData.address || !formData.proposer) return;
    await API.graphql({query: createRouterMutation, variables: {input: formData}});
    setRouters([...routers, formData]);
    setFormData(initialFormState);
  }

  async function deleteRouter({ id }) {
    const newRoutersArray = routers.filter(router => router.id !== id);
    setRouters(newRoutersArray);
    await API.graphql({ query: deleteRouterMutation, variables: { input: {id} }});
  }

  return (
    <div className="App">
      <h1>My Routers App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Router name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'address': e.target.value})}
        placeholder="Router address"
        value={formData.address}
      />
      <button onClick={createRouter}>Create Router</button>
      <div style={{marginBottom: 30}}>
        {
          routers.map(router => (
            <div key={router.id || router.name}>
              <h2>{router.name}</h2>
              <p>{router.address}</p>
              <button onClick={() => deleteRouter(router)}>Delete router</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
