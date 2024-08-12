import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Dashboard from './pages/Dashboard'; 
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProtectedRoute from './components/ProtectedRoute';
import CreateCommunity from './pages/CreateCommunity';
import CommunityPage from './pages/CommunityPage';
import Footer from './components/Footer';

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route
            path="/dashboard"
            element={
                <Dashboard />
            }
          />
          <Route
            path="/createCommunity"
            element={
                <CreateCommunity />
            }
          />
          <Route
            path="/community/:communityName"
            element={
                <CommunityPage />
            }
          />

        </Routes>
      </BrowserRouter>
            <Footer />
    </div>
  );
}

export default App;
