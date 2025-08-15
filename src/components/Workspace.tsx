import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';

const Workspace = () => {
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row h-[calc(100vh-120px)] bg-gray-50 overflow-hidden">
      <div className={`flex xl:flex-1 h-[75vh] xl:h-auto transition-all duration-500 ease-out ${
        showCustomerProfile ? 'xl:mr-2' : 'xl:mr-0'
      }`}>
        <LeftPanel />
        <CenterPanel 
          showCustomerProfile={showCustomerProfile}
          setShowCustomerProfile={setShowCustomerProfile}
        />
      </div>
             
      {/* Right Panel - Smooth slide in/out animation */}
      <div className={`transition-all duration-500 ease-out ${
        showCustomerProfile 
          ? 'xl:translate-x-0 xl:opacity-100 xl:w-80 w-full opacity-100 translate-y-0' 
          : 'xl:translate-x-full xl:opacity-0 xl:w-0 w-full opacity-0 translate-y-full xl:translate-y-0'
      } ${showCustomerProfile ? 'xl:overflow-y-auto' : 'xl:overflow-hidden'}`}>
        <div className={`transition-all duration-300 delay-100 ${
          showCustomerProfile ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Workspace;