import React, { useState } from 'react';
import { User, Home, ChevronRight, Layout, ChevronDown, Save, Plus, Menu } from 'lucide-react';

import Workspace from './components/Workspace';
import ProjectOverview from './components/ProjectOverview';

function App() {
  const [activeTab, setActiveTab] = useState('workspace');
  const [customerName] = useState('Marcus Hill');
  const [orderId] = useState('#275');
  const [status, setStatus] = useState('Review');
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const statusOptions = [
    { value: 'In Progress', label: 'In Progress', color: 'blue' },
    { value: 'Review', label: 'Review', color: 'orange' },
    { value: 'Approved', label: 'Approved', color: 'green' },
    { value: 'Completed', label: 'Completed', color: 'purple' },
    { value: 'On Hold', label: 'On Hold', color: 'yellow' }
  ];

  // Progress steps for the progress bar (only shown in overview tab)
  const progressSteps = [
    { id: 'consultation', label: 'Consultation', date: '01/15', status: 'completed' },
    { id: 'design', label: 'Design', date: '01/18', status: 'completed' },
    { id: 'review', label: 'Review', date: '01/22', status: 'current' },
    { id: 'iteration', label: 'Iteration', date: '01/25', status: 'upcoming' },
    { id: 'confirmation', label: 'Confirmation', date: '01/28', status: 'upcoming' }
  ];

  const getStatusColor = (status) => {
    const option = statusOptions.find(opt => opt.value === status);
    return option ? option.color : 'gray';
  };

  // Progress Bar Component - Made Smaller
  const ProgressBar = () => (
    <div className="bg-white border-b border-gray-200 p-3 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Background progress line */}
          <div className="absolute top-3 left-3 right-3 h-0.5 bg-gray-300 rounded-full" style={{ height: '2px' }}></div>
          
          {/* Active progress line */}
          <div 
            className="absolute top-3 left-3 bg-blue-500 rounded-full transition-all duration-300"
            style={{ 
              height: '2px',
              width: `${(progressSteps.filter(step => step.status === 'completed').length / (progressSteps.length - 1)) * 100}%` 
            }}
          ></div>
          
          <div className="relative flex justify-between">
            {progressSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1 min-w-0">
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-medium relative z-10 transition-all duration-200 ${
                  step.status === 'completed' 
                    ? 'bg-blue-600 text-white' 
                    : step.status === 'current'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-500 border border-gray-300'
                }`}>
                  {step.status === 'completed' ? '✓' : index + 1}
                </div>
                
                <div className="mt-1.5 sm:mt-2 text-center">
                  <div className={`text-xs font-medium ${
                    step.status === 'completed' || step.status === 'current' 
                      ? 'text-gray-900' 
                      : 'text-gray-500'
                  } leading-tight px-1`}>
                    {step.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{step.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50" onClick={() => {
      setStatusDropdownOpen(false);
      setMobileMenuOpen(false);
    }}>
      {/* Header - Now Sticky */}
      <header 
        className="sticky top-0 z-50 bg-white border-b border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Header Content */}
        <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 relative">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-3 sm:mb-4">
            <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="hover:text-gray-700 cursor-pointer text-xs sm:text-sm">Home</span>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2" />
            <span className="text-gray-900 font-medium text-xs sm:text-sm">Styling tool</span>
          </div>

          {/* Mobile Layout */}
          <div className="block sm:hidden">
            <div className="flex items-center justify-between mb-3">
              {/* Customer Info */}
              <div className="flex flex-col min-w-0 flex-1">
                <div className="text-lg font-bold text-gray-900 truncate">
                  {customerName}
                </div>
                <div className="text-sm text-gray-500">
                  Order ID: {orderId}
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 ml-2"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Status */}
            <div className="mb-3">
              <div className="relative inline-block">
                <button
                  onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                  className={`text-sm font-medium text-${getStatusColor(status)}-700 flex items-center cursor-pointer transition-colors rounded px-2 py-1 bg-gray-50`}
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

            {/* Mobile Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-3">
              <button
                onClick={() => setActiveTab('workspace')}
                className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'workspace'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Layout className="w-4 h-4" />
                <span className="text-sm">Workspace</span>
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="text-sm">Overview</span>
              </button>
            </div>

            {/* Mobile Action Buttons - Collapsible */}
            {mobileMenuOpen && (
              <div className="flex flex-col space-y-2 pb-2">
                <button className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  <Plus className="w-4 h-4" />
                  <span>Publish</span>
                </button>
              </div>
            )}
          </div>

          {/* Tablet Layout (sm to lg) */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex items-center justify-between mb-3">
              {/* Left section */}
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <div className="flex flex-col min-w-0">
                  <div className="text-lg font-bold text-gray-900 truncate">
                    {customerName}
                  </div>
                  <div className="text-sm text-gray-500">
                    Order ID: {orderId}
                  </div>
                </div>
              </div>
              
              {/* Right section */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <button className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
                  <Plus className="w-4 h-4" />
                  <span>Publish</span>
                </button>
              </div>
            </div>

            {/* Status and Tabs Row */}
            <div className="flex items-center justify-between">
              <div className="relative">
                <button
                  onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                  className={`text-sm font-medium text-${getStatusColor(status)}-700 flex items-center cursor-pointer transition-colors rounded px-2 py-1 bg-gray-50`}
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

              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('workspace')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all ${
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
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all ${
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
          </div>

          {/* Desktop Layout (lg and up) - Original */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left section */}
            <div className="flex items-center space-x-4 min-w-0 flex-shrink-0">
              <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-900">
                  {customerName}
                </div>
                <div className="text-sm text-gray-500">
                  Order ID: {orderId}
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
        </div>

        {/* Progress Bar - Only shown when Overview tab is active */}
        {activeTab === 'overview' && <ProgressBar />}
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