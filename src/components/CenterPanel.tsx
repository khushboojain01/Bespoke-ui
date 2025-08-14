import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Search, ZoomIn, ZoomOut, X } from 'lucide-react';

const CenterPanel = () => {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [showVirtualTryOn, setShowVirtualTryOn] = useState(false);
  const [currentView, setCurrentView] = useState('front');

  const styles = [
    { id: 'modern-navy', name: 'Modern Navy Business Suit' },
    { id: 'charcoal-evening', name: 'Charcoal Evening Ensemble' },
    { id: 'light-grey-weekend', name: 'Light Grey Weekend Suit' },
  ];

  const prevStyle = () => {
    setCurrentStyleIndex((prev) => (prev - 1 + styles.length) % styles.length);
  };

  const nextStyle = () => {
    setCurrentStyleIndex((prev) => (prev + 1) % styles.length);
  };

  return (
    <div className="flex-1 flex flex-col bg-white min-w-0">
      {/* Header - Mobile Responsive */}
      <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          {/* Style Navigation */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={prevStyle}
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              disabled={styles.length <= 1}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-900 truncate">
                {styles[currentStyleIndex].name}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-1">
                <span className="text-xs sm:text-sm text-gray-600">Estimated price: $4000</span>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium w-fit mt-1 sm:mt-0">
                  Within budget
                </span>
              </div>
            </div>
            
            <button
              onClick={nextStyle}
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              disabled={styles.length <= 1}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Virtual Try On Button */}
          <div className="flex justify-center sm:justify-end">
            <button
              onClick={() => setShowVirtualTryOn(!showVirtualTryOn)}
              className={`flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-sm ${
                showVirtualTryOn
                  ? 'bg-white text-purple-600 border border-purple-300 hover:bg-purple-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {showVirtualTryOn ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <Camera className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">{showVirtualTryOn ? 'Go Back' : 'Virtual Try On'}</span>
              <span className="sm:hidden">{showVirtualTryOn ? 'Back' : 'Try On'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Canvas Area - Mobile Responsive */}
      <div className="flex-1 p-3 sm:p-4 lg:p-4 flex items-center justify-center bg-gray-50 relative min-h-0">

        {/* Main Canvas Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {showVirtualTryOn ? (
            /* Virtual Try On Mode */
            <div className="relative bg-white rounded-lg w-full h-full aspect-[3/4] max-h-full flex items-center justify-center">

              <button
                onClick={() => setShowVirtualTryOn(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1 rounded-full hover:bg-gray-100 z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="p-4">
                <div className="w-full aspect-[3/4] bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3" />
                    <p className="text-xs sm:text-sm text-gray-500">Customer photo with design overlay</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Normal Suit Display Mode */
            <div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-4">
                <div className="w-full h-full aspect-[3/4] max-h-full bg-gray-100 rounded-lg flex items-center justify-center">

                  <div className="text-center text-gray-400">
                    <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-300 rounded mx-auto mb-2"></div>
                    <p className="text-xs sm:text-sm">Suit Display ({currentView})</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View Buttons - Responsive Positioning */}
        <div className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 sm:space-y-3 z-10">
          {['front', 'back', 'side'].map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`flex flex-col items-center p-2 sm:p-3 rounded-lg transition-all ${
                currentView === view
                  ? 'bg-blue-50 border border-blue-200'
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className={`w-4 h-4 sm:w-6 sm:h-6 mb-1 ${
                currentView === view ? 'text-blue-600' : 'text-gray-600'
              }`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="4" r="2"/>
                  <path d="M8 8h8v8c0 0.5-0.5 1-1 1h-6c-0.5 0-1-0.5-1-1V8z"/>
                  <path d="M10 17v5"/>
                  <path d="M14 17v5"/>
                  {view === 'back' && <path d="M12 8v8"/>}
                </svg>
              </div>
              <span className={`text-xs capitalize ${
                currentView === view ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}>
                {view}
              </span>
            </button>
          ))}
        </div>

        {/* Zoom Controls - Mobile Responsive Bottom Center */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 bg-white rounded-full px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm border border-gray-200 z-10">
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ZoomOut className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
        </div>

        {/* 3D View - Mobile Responsive Bottom Right */}
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-6 z-10">
          <button className="bg-white rounded-lg border border-gray-200 p-2 sm:p-3 w-16 sm:w-20 lg:w-24  transition-colors">
            <div className="w-full h-20 aspect-[4/3] bg-gray-200  border flex items-center justify-center mb-1 sm:mb-2 relative hover:bg-gray-300">
              {/* 3D Icon in top right */}
              <div className="absolute top-1 right-1 w-3 h-5 sm:w-4 sm:h-4">
                <img 
                  src="/rotate.svg" 
                  alt="3D rotate icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Existing content */}
              
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterPanel;