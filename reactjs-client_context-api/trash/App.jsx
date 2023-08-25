import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import AddProfile from './AddProfile';
import UpdateProfile from '../src/pages/UpdateProfile';
import UpdateProfilePageWrapper from '../src/components/UpdateProfilePageWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add-profile' element={<AddProfile />} />
        <Route path='update-profile' element={<UpdateProfilePageWrapper />}>
          <Route path=':profileId' element={<UpdateProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
