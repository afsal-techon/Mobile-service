
"use client"

import { useState } from "react"
import { FiMenu, FiX, FiSettings, FiBell, FiUser } from "react-icons/fi"

export function AdmminNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-100 border-b border-gray-200 p-1">
      <div className="max-w-8xl  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - Left side */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">Logo</span>
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center gap-6">
            {/* Settings Icon */}
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <FiSettings size={20} className="text-gray-600" />
            </button>

            {/* Notification Icon */}
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors relative">
              <FiBell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Info */}
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-blue-600">Hashim</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>

            {/* Profile Icon */}
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <FiUser size={20} className="text-blue-600" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              {isOpen ? <FiX size={24} className="text-gray-600" /> : <FiMenu size={24} className="text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              {/* Settings */}
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors w-full">
                <FiSettings size={20} className="text-gray-600" />
                <span className="text-sm text-gray-700">Settings</span>
              </button>

              {/* Notifications */}
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors w-full">
                <FiBell size={20} className="text-gray-600" />
                <span className="text-sm text-gray-700">Notifications</span>
              </button>

              {/* User Profile */}
              <div className="px-4 py-2 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <FiUser size={20} className="text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-blue-600">Hashim</span>
                    <span className="text-xs text-gray-500">Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
