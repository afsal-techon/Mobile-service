import React, { useState } from "react";
import {
  FaChartLine,
  FaTruck,
  FaUserFriends,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaCubes,
  FaClipboardList,
  FaRegFileAlt,
  FaUniversity,
  FaUserCog,
  FaBuilding,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { AdmminNav } from "./AdminNavbar";

const sections = [
  {
    title: "Sales & Delivery",
    items: [
      { name: "Sale", icon: <FaChartLine /> },
      { name: "Delivery", icon: <FaTruck /> },
      { name: "Customer", icon: <FaUserFriends /> },
    ],
  },
  {
    title: "Purchasing & Stock",
    items: [
      { name: "Purchase", icon: <FaShoppingCart /> },
      { name: "Expense", icon: <FaFileInvoiceDollar /> },
      { name: "Supplier", icon: <FaCubes /> },
      { name: "Item", icon: <FaClipboardList /> },
    ],
  },
  {
    title: "Reports & Accounts",
    items: [
      { name: "Reports", icon: <FaRegFileAlt /> },
      { name: "Accounts", icon: <FaUniversity /> },
    ],
  },
  {
    title: "Administration",
    items: [
      { name: "User", icon: <FaUserCog /> },
      { name: "Company", icon: <FaBuilding /> },
      { name: "Settings", icon: <FaCog /> },
    ],
  },
];

const AdminSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white shadow-lg flex flex-col transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
            {isOpen && (
              <h1 className="text-lg font-bold text-gray-700">
                ABC Restaurant
              </h1>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600"
          >
            <FaBars />
          </button>
        </div>

        {/* Sections */}
        <nav className="flex-1 overflow-y-auto mt-4">
          {sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-4">
              {/* Section Title */}
              {isOpen && (
                <h2 className="text-xs font-semibold text-gray-500 uppercase px-5 mb-2">
                  {section.title}
                </h2>
              )}

              {/* Items */}
              <div className="flex flex-col">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center  gap-4 px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all duration-200"
                  >
                    <div className="text-xl text-blue-600 ">{item.icon}</div>
                    {isOpen && (
                      <span className="text-sm font-medium">{item.name}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider between sections */}
              <div className="border-t border-gray-200 mt-3"></div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          {isOpen ? "© 2025 TecPOS" : "©"}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <AdmminNav/>
        
      </div>
    </div>
  );
};

export default AdminSideBar;
