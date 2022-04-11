import { HashRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './util/ProtectedRoutes';
import './App.css';
import Login from './component/Login';
import ProfileAdmin from './component/ProfileAdmin';
import ProfileOperator from './component/ProfileOperator';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/profileOperator" element={<ProfileOperator />} />
            <Route path="/profileAdmin" element={<ProfileAdmin />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
