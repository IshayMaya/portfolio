import React, {useEffect} from 'react';
import Layout from './Layout'
import './App.scss';

function App() {

  useEffect(() => {
    window.scrollTo(0,1);
  },[])
  
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
