import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import CalendarView from './components/CalendarView';
import LeadsInbox from './components/LeadsInbox';
import Invoices from './components/Invoices';
import Users from './components/Users';
import Vehicles from './components/Vehicles';
import Services from './components/Services';
import Products from './components/Products';
import Company from './components/Company';
import ReviewRequest from './components/ReviewRequest';
import ReviewPopup from './components/ReviewPopup';
import NotificationLog from './components/NotificationLog';
import CustomerRegistration from './components/CustomerRegistration';
import CustomerProfile from './components/CustomerProfile';
import CustomerList from './components/CustomerList';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/leads" element={<LeadsInbox />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/users" element={<Users />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company" element={<Company />} />
        <Route path="/reviews" element={<ReviewRequest />} />
        <Route path="/review-popup" element={<ReviewPopup />} />
        <Route path="/notifications" element={<NotificationLog />} />
        <Route path="/customers/register" element={<CustomerRegistration />} />
        <Route path="/customers/:id" element={<CustomerProfile />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </Router>
  );
}
