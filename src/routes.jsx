import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import LeadsInbox from './components/LeadsInbox';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CalendarView />} />
      <Route path="/leads" element={<LeadsInbox />} />
      {/* Legg til flere her etter behov */}
    </Routes>
  );
}
