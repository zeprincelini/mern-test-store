import { Box } from '@chakra-ui/react';
import './App.css';
import Add from './components/add';
import Home from './components/home';

const toggle =(show: boolean = false) => {
  show = !show;
  return show;
}

function App() {
  return (
    <Box>
       <Home/>
       <Add/>
    </Box>
  );
}

export default App;
