import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiUsers, FiFileText, FiTruck, FiSettings, FiBell, FiList, FiBox, FiUserCheck, FiStar, FiLogIn } from 'react-icons/fi';

export default function Sidebar() {
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  useEffect(() => {
    // Simulert API-kall
    const fetchNotifications = async () => {
      // Her erstatter du med faktisk API-kall senere
      const result = await Promise.resolve({ unread: 5 });
      setUnreadNotifications(result.unread);
    };

    fetchNotifications();
  }, []);

  const navItem = (to, label, icon, badgeCount = 0) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-4 py-2 text-sm font-medium rounded hover:bg-orange-100 ${
          isActive ? 'bg-orange-200 text-orange-900' : 'text-gray-700'
        }`
      }
    >
      <div className="flex items-center space-x-2">
        {icon}
        <span>{label}</span>
      </div>
      {badgeCount > 0 && (
        <span className="bg-red-600 text-white text-xs font-semibold rounded-full px-2">
          {badgeCount}
        </span>
      )}
    </NavLink>
  );

  return (
    <aside className="w-64 bg-white h-screen border-r shadow-sm p-4 space-y-4">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Move Vision</h2>

      <div className="space-y-2">
        {navItem('/', 'Dashboard', <FiHome />)}
        {navItem('/calendar', 'Calendar', <FiCalendar />)}
        {navItem('/leads', 'Leads', <FiList />)}
        {navItem('/invoices', 'Invoices', <FiFileText />)}
        {navItem('/users', 'Users', <FiUserCheck />)}
        {navItem('/vehicles', 'Vehicles', <FiTruck />)}
        {navItem('/services', 'Services', <FiSettings />)}
        {navItem('/products', 'Products', <FiBox />)}
        {navItem('/reviews', 'Reviews', <FiStar />)}
        {navItem('/notifications', 'Notifications', <FiBell />, unreadNotifications)}
        {navItem('/customers', 'Customers', <FiUsers />)}
        {navItem('/logins', 'Login Audit', <FiLogIn />)}
      </div>

      <div className="pt-6 border-t">
        {navItem('/company', 'Company Settings', <FiSettings />)}
      </div>
    </aside>
  );
}
