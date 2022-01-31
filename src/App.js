import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
// import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import Navbar from './components/Navbar'
import Posts from './components/Posts';


const theme = createTheme({
  palette: {
    secondary: {
      main: '#E33E7F'
    }
  }
})

function App() {
  return (
    <Container maxwidth="lg">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />

          <Route path="*" element={<h4>Page Not Found</h4>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
