import React, { useState } from 'react';
import { User, Home, ChevronRight, Layout, ChevronDown, Save, Plus } from 'lucide-react';

import Workspace from './components/Workspace';
import ProjectOverview from './components/ProjectOverview';

function App() {
  const [activeTab, setActiveTab] = useState('workspace');
  const [customerName] = useState('Marcus Hill');
  const [orderId] = useState('#275');
  const [status, setStatus] = useState('Review');
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const statusOptions = [
    { value: 'In Progress', label: 'In Progress', color: 'blue' },
    { value: 'Review', label: 'Review', color: 'orange' },
    { value: 'Approved', label: 'Approved', color: 'green' },
    { value: 'Completed', label: 'Completed', color: 'purple' },
    { value: 'On Hold', label: 'On Hold', color: 'yellow' }
  ];

  const getStatusColor = (status: string) => {
    const option = statusOptions.find(opt => opt.value === status);
    return option ? option.color : 'gray';
  };

  return (
    <div className="min-h-screen bg-gray-50" onClick={() => setStatusDropdownOpen(false)}>
      {/* Header */}
      <header 
        className="bg-white border-b border-gray-200 px-6 py-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Home className="w-4 h-4 mr-1" />
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 font-medium">Styling tool</span>
        </div>

        {/* Desktop Layout */}
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-4 min-w-0 flex-shrink-0">
            <div className="flex flex-col">
              <div className="text-lg font-bold text-gray-900">
                {customerName}
              </div>
              <div className="text-sm text-gray-500">
                Order ID : {orderId}
              </div>
            </div>
            <div className="relative px-3 py-1.5 rounded-lg">
              <button
                onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                className={`text-sm font-medium text-${getStatusColor(status)}-700 flex items-center cursor-pointer transition-colors rounded px-1 py-0.5`}
              >
                <span className="mr-2">Status:</span>
                <span className="font-semibold">{status}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {statusDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <div className="py-1">
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setStatus(option.value);
                          setStatusDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${
                          status === option.value ? `text-${option.color}-700 bg-${option.color}-50` : 'text-gray-700'
                        }`}
                      >
                        <div className={`w-2 h-2 bg-${option.color}-500 rounded-full mr-3`}></div>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Centered Tabs */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('workspace')}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-md font-medium transition-all ${
                  activeTab === 'workspace'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Layout className="w-4 h-4" />
                <span>Workspace</span>
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-md font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Overview</span>
              </button>
            </div>
          </div>
          
          {/* Right section */}
          <div className="flex items-center space-x-3 min-w-0 flex-shrink-0">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
              <Plus className="w-4 h-4" />
              <span>Publish</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="workspace-wrapper">
          {activeTab === 'workspace' ? <Workspace /> : <ProjectOverview />}
        </div>
      </main>
    </div>
  );
}

export default App;
