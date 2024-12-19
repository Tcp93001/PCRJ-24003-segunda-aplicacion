import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Public from './components/Public/Public';
import RequireAuth from './components/RequireAuth';
import Gallery from './components/Gallery/Gallery';

function App() {

  return (
    <>
      <Header  />
      <main>
        <Routes>
          <Route path='/' element={<Public />} />
          <Route path='/login' element={<Login />} />
          <Route path='/gallery/*' element={<Gallery />} />
          <Route
            path='/home/:userId?'
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;