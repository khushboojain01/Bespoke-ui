import React from 'react';ov
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';

const Workspace = () => {
  return (
    <div className="flex flex-col xl:flex-row h-[calc(100vh-120px)] bg-gray-50">
      <div className="flex xl:flex-1 h-[75vh] xl:h-auto">
        <LeftPanel />
        <CenterPanel />
      </div>
             
      {/* Right Panel - Below on mobile/tablet, right sidebar on desktop */}
      <RightPanel />
    </div>
  );
};

export default Workspace;