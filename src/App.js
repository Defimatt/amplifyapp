import React, { useState, useEffect } from 'react';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

const initialFormState = { name: '', address: '', status: 'COMMUNITY', proposer: '' };

function App() {
  let walletAddress = "0x8C";
  const [routers, setRouters] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [state, setState] = useState({ 'busy': false });
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchRouters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchStats();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFormData(formData => ({ ...formData, 'proposer': walletAddress}));
  }, [walletAddress]);

  async function getStats() {
    let result;
    try {
      result = await API.get('mylpapi', '/items/stats', {});
      result = JSON.parse(result);
    } catch (e) {
      alert(e);
    }
    return result;
  }

  async function fetchStats() {
    setStats((await getStats()));
  }

  async function getRouters() {
    let result;
    try {
      result = await API.get('mylpapi', '/items/', {});
      result = JSON.parse(result.body);
    } catch (e) {
      alert(e);
    }
    return result;
  }

  async function fetchRouters() {
    setRouters((await getRouters()));
  }

  async function createRouter() {
    setState({...state, 'busy': true});
    if (!formData.name || !formData.address || !formData.proposer) return;
    //const routers = await API.graphql({query: listRouters });
    const existingRouter = routers.data.listRouters.items.filter(router => router.address.toLowerCase() === formData.address.toLowerCase());
    if (existingRouter.length !== 0) {
      alert(`A router with that address already exists, called '${existingRouter[0].name}'`);
    } else {
      //await API.graphql({query: createRouterMutation, variables: {input: formData}});
      //setFormData({ ...initialFormState, 'proposer': walletAddress});
      await fetchRouters();
    }
    setState({...state, 'busy': false});
  }

  async function deleteRouter({ id }) {
    const newRoutersArray = routers.filter(router => router.id !== id);
    setRouters(newRoutersArray);
    //await API.graphql({ query: deleteRouterMutation, variables: { input: {id} }});
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
      <button onClick={createRouter} disabled={!formData.name || !formData.address || state.busy}>Create Router</button>
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
