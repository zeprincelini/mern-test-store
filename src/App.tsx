import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import './App.css';
import Add from './components/add';
import Home from './components/home';
import Product from './components/products';

const App = () => {
  const [displayForm, setForm] = useState(false)
  const showForm = () => {
    setForm(!displayForm)
  }

  return (
    <Box>
       <Home onClick= {showForm} />
       {displayForm && <Add/>}
       <Product />
    </Box>
  );
}

export default App;
