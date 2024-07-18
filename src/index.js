import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderDetails from './pages/OrderDetails';
import PrivateRoute from './utils/PrivateRoute';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order-details" element={<PrivateRoute component={OrderDetails} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));



