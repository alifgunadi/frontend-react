import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { ThemeProvider } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <ThemeProvider
        breakpoints={[ 'xl', 'md', 'sm' ]}
        minBreakpoint="sm"
      >
          <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route index element={<Home />}/>

        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
