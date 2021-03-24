import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import './App.css';
import Add from './components/add';
import Home from './components/home';
import Product from './components/products';

const App = () => {
  const [displayForm, setForm] = useState(false)
  const [refresh, setRefresh] = useState(0);
  const showForm = () => {
    setForm(!displayForm)
  }

  return (
    <Box>
       <Home onClick= {showForm} />
       {displayForm && <Add counter ={setRefresh} />}
       <Product reloader ={refresh}/>
    </Box>
  );
}

export default App;
