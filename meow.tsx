
import React, { useState } from 'react';
import { 
  Camera, Plus, Shirt, Palette, Ruler, MessageSquare, Heart, X, 
  ChevronLeft, ChevronRight, FileText, Search, SlidersHorizontal, 
  User, Zap, Save, Edit3, Check, ChevronDown, Menu, PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';

const Workspace = () => {
  // Global UI state
  const [activeLeftTab, setActiveLeftTab] = useState('style');
  const [activeTab, setActiveTab] = useState('style');
  const [showVirtualTryOn, setShowVirtualTryOn] = useState(false);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [fabricSearch, setFabricSearch] = useState('');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true); // New state for panel visibility
  
  // Garment selection
  const [selectedGarment, setSelectedGarment] = useState('suits');
  const [selectedFabric, setSelectedFabric] = useState('navy-wool');
  const [selectedFit, setSelectedFit] = useState('modern');
  // Jacket style options
  const [selectedJacketStyle, setSelectedJacketStyle] = useState('single-1');
  const [selectedLapel, setSelectedLapel] = useState('notched');
  const [selectedPocket, setSelectedPocket] = useState('flap');
  const [selectedVent, setSelectedVent] = useState('center');
  const [selectedCollar, setSelectedCollar] = useState('spread');
  const [selectedCuff, setSelectedCuff] = useState('button');
  const [selectedFront, setSelectedFront] = useState('placket');
  // Pant style options
  const [selectedPantStyle, setSelectedPantStyle] = useState('flat-front');
  const [selectedPantCuff, setSelectedPantCuff] = useState('no-cuff');
  const [selectedPleats, setSelectedPleats] = useState('none');
  // Waistcoat options
  const [selectedWaistcoatStyle, setSelectedWaistcoatStyle] = useState('single-breasted');
  const [selectedWaistcoatBack, setSelectedWaistcoatBack] = useState('fabric-back');
  // Tie options
  const [selectedTieStyle, setSelectedTieStyle] = useState('classic');
  const [selectedTieWidth, setSelectedTieWidth] = useState('standard');
  const [selectedTiePattern, setSelectedTiePattern] = useState('solid');
  const [editablePreferences, setEditablePreferences] = useState({
    occasion: 'Business meetings, Evening events, Wedding guest',
    likes: ['Modern cuts', 'Subtle patterns', 'High-quality fabrics'],
    dislikes: ['Bright colors', 'Loose fitting', 'Heavy textures'],
    bodyType: 'Athletic build',
    measurements: {
      chest: '40"',
      waist: '34"',
      shoulders: '18"',
      height: '5\'10"'
    }
  });

  const styles = [
    { id: 'modern-navy', name: 'Modern Navy Business Suit', description: 'Professional and contemporary' },
    { id: 'charcoal-evening', name: 'Charcoal Evening Ensemble', description: 'Elegant formal wear' },
    { id: 'light-grey-weekend', name: 'Light Grey Weekend Suit', description: 'Casual sophistication' },
  ];

  const nextStyle = () => {
    setCurrentStyleIndex((prev) => (prev + 1) % styles.length);
  };

  const prevStyle = () => {
    setCurrentStyleIndex((prev) => (prev - 1 + styles.length) % styles.length);
  };

  const garments = [
    { id: 'suits', name: 'Suits', icon: User },
    { id: 'shirt', name: 'Shirt', icon: Shirt },
    { id: 'pant', name: 'Pant', icon: Zap },
    { id: 'waist-coat', name: 'Waist coat', icon: Palette },
    { id: 'tie', name: 'Tie', icon: Plus },
  ];

  const fabrics = [
    { 
      id: 'navy-wool', 
      name: 'Twill', 
      subtitle: 'Navy Blue • 100s', 
      color: '#1e293b', 
      type: 'Wool', 
      price: '259€',
      priceBreakdown: {
        fabric: '180€',
        construction: '65€',
        finishing: '14€'
      }
    },
    { 
      id: 'charcoal-wool', 
      name: 'Melange', 
      subtitle: 'Twill • Iron gray', 
      color: '#374151', 
      type: 'Wool', 
      price: '259€',
      priceBreakdown: {
        fabric: '180€',
        construction: '65€',
        finishing: '14€'
      }
    },
    { 
      id: 'comfort-stretch-navy', 
      name: 'Comfort stretch', 
      subtitle: 'Basic • Twill', 
      color: '#1e293b', 
      type: 'Wool', 
      price: '229€',
      priceBreakdown: {
        fabric: '150€',
        construction: '65€',
        finishing: '14€'
      }
    },
    { 
      id: 'charcoal-wool-2', 
      name: 'Melange', 
      subtitle: 'Twill • Iron gray', 
      color: '#374151', 
      type: 'Wool', 
      price: '259€',
      priceBreakdown: {
        fabric: '180€',
        construction: '65€',
        finishing: '14€'
      }
    },
    { 
      id: 'comfort-stretch-navy-2', 
      name: 'Comfort stretch', 
      subtitle: 'Basic • Twill', 
      color: '#1e293b', 
      type: 'Wool', 
      price: '229€'
    },
    { 
      id: 'light-grey', 
      name: 'Light Grey', 
      color: '#9ca3af', 
      type: 'Wool', 
      price: '279€'
    },
    { 
      id: 'black-formal', 
      name: 'Black Formal', 
      color: '#111827', 
      type: 'Wool', 
      price: '299€'
    },
    { 
      id: 'brown-casual', 
      name: 'Brown Casual', 
      color: '#92400e', 
      type: 'Cotton', 
      price: '199€'
    },
    { 
      id: 'cream-linen', 
      name: 'Cream Linen', 
      color: '#fef3c7', 
      type: 'Linen', 
      price: '189€'
    },
    { 
      id: 'burgundy-wool', 
      name: 'Burgundy Wool', 
      color: '#7c2d12', 
      type: 'Wool', 
      price: '319€'
    },
    { 
      id: 'forest-green', 
      name: 'Forest Green', 
      color: '#166534', 
      type: 'Wool', 
      price: '289€'
    },
    { 
      id: 'midnight-blue', 
      name: 'Midnight Blue', 
      color: '#1e1b4b', 
      type: 'Cashmere', 
      price: '459€'
    },
    { 
      id: 'camel-wool', 
      name: 'Camel Wool', 
      color: '#d97706', 
      type: 'Wool', 
      price: '329€'
    },
    { 
      id: 'slate-grey', 
      name: 'Slate Grey', 
      color: '#475569', 
      type: 'Cotton', 
      price: '219€'
    },
    { 
      id: 'olive-cotton', 
      name: 'Olive Cotton', 
      color: '#65a30d', 
      type: 'Cotton', 
      price: '179€'
    },
    { 
      id: 'royal-blue', 
      name: 'Royal Blue', 
      color: '#1d4ed8', 
      type: 'Wool', 
      price: '309€'
    },
    { 
      id: 'pearl-grey', 
      name: 'Pearl Grey', 
      color: '#e5e7eb', 
      type: 'Linen', 
      price: '199€'
    },
    { 
      id: 'espresso-brown', 
      name: 'Espresso Brown', 
      color: '#451a03', 
      type: 'Cashmere', 
      price: '489€'
    }
  ];

  const filteredFabrics = fabrics.filter(fabric =>
    fabric.name.toLowerCase().includes(fabricSearch.toLowerCase()) ||
    fabric.type.toLowerCase().includes(fabricSearch.toLowerCase())
  );

  const fits = [
    { id: 'slim', name: 'Slim Fit', description: 'Close-fitting, tailored silhouette' },
    { id: 'modern', name: 'Modern Fit', description: 'Balanced comfort and style' },
    { id: 'classic', name: 'Classic Fit', description: 'Traditional, comfortable cut' },
  ];

  const jacketStyles = [
    { id: 'single-1', image: '/jacket.svg'},
    { id: 'single-2', image: '/single 2 btn 1.svg'},
    { id: 'double-4', image:'double 4.svg' },
    { id: 'double-6', image:'/double 6.svg' },
    { id: 'mandarin', image:'/mandarin.svg' },
    /*{ id: 'three-piece', image:'/3pcsuit.svg'  }*/
  ];

  const lapelStyles = [
    { id: 'notched', name: 'Notched Lapel' },
    { id: 'peaked', name: 'Peaked Lapel' },
    { id: 'shawl', name: 'Shawl Lapel' }
  ];

  const pocketStyles = [
    { id: 'flap', name: 'Flap Pockets' },
    { id: 'jetted', name: 'Jetted Pockets' },
    { id: 'patch', name: 'Patch Pockets' }
  ];

  const ventStyles = [
    { id: 'center', name: 'Center Vent' },
    { id: 'side', name: 'Side Vents' },
    { id: 'none', name: 'No Vent' }
  ];

  const collarStyles = [
    { id: 'spread', name: 'Spread Collar' },
    { id: 'point', name: 'Point Collar' },
    { id: 'button-down', name: 'Button-down' },
    { id: 'cutaway', name: 'Cutaway' }
  ];

  const cuffStyles = [
    { id: 'button', name: 'Button Cuff' },
    { id: 'french', name: 'French Cuff' },
    { id: 'convertible', name: 'Convertible' }
  ];

  const frontStyles = [
    { id: 'placket', name: 'Standard Placket' },
    { id: 'hidden', name: 'Hidden Placket' },
    { id: 'bib', name: 'Bib Front' }
  ];

  const pantStyles = [
    { id: 'flat-front', name: 'Flat Front' },
    { id: 'pleated', name: 'Pleated Front' },
    { id: 'high-waist', name: 'High Waist' }
  ];

  const pantCuffs = [
    { id: 'no-cuff', name: 'No Cuff' },
    { id: 'cuffed', name: 'Cuffed' },
    { id: 'turn-up', name: 'Turn-up' }
  ];

  const pleatStyles = [
    { id: 'none', name: 'No Pleats' },
    { id: 'single', name: 'Single Pleat' },
    { id: 'double', name: 'Double Pleat' }
  ];

  const waistcoatStyles = [
    { id: 'single-breasted', name: 'Single Breasted' },
    { id: 'double-breasted', name: 'Double Breasted' },
    { id: 'shawl-collar', name: 'Shawl Collar' }
  ];

  const waistcoatBacks = [
    { id: 'fabric-back', name: 'Fabric Back' },
    { id: 'adjustable', name: 'Adjustable Back' },
    { id: 'lining-back', name: 'Lining Back' }
  ];

  const tieStyles = [
    { id: 'classic', name: 'Classic Tie' },
    { id: 'bow-tie', name: 'Bow Tie' },
    { id: 'ascot', name: 'Ascot' }
  ];

  const tieWidths = [
    { id: 'narrow', name: 'Narrow (2.5")' },
    { id: 'standard', name: 'Standard (3.25")' },
    { id: 'wide', name: 'Wide (4")' }
  ];

  const tiePatterns = [
    { id: 'solid', name: 'Solid' },
    { id: 'striped', name: 'Striped' },
    { id: 'dotted', name: 'Dotted' }
  ];

  const customerPreferences = {
    colors: ['Navy', 'Charcoal', 'Light Grey'],
    likes: ['Modern cuts', 'Subtle patterns', 'High-quality fabrics'],
    dislikes: ['Bright colors', 'Loose fitting', 'Heavy textures'],
    occasions: ['Business meetings', 'Evening events', 'Wedding guest'],
    bodyType: 'Athletic build',
    measurements: {
      chest: '40"',
      waist: '34"',
      shoulders: '18"',
      height: '5\'10"'
    }
  };

  return (
    <div className="flex h-[calc(100vh-120px)] bg-gray-50">
      {/* Left Panel - Customization */}
      <div className="flex bg-white border-r border-gray-200">
        {/* Fixed Garment Panel */}
        <div className="w-48 border-r border-gray-200 flex flex-col relative">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Home &gt; Styling tool</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Marcus Hill</h2>
            <p className="text-gray-600 mb-3">Order ID: #275</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Status:</span>
              <select className="text-sm border border-gray-300 rounded px-3 py-1">
                <option>Review</option>
              </select>
            </div>
          </div>
          
          {/* Vertical Garment Menu */}
            {/* Vertical Garment Menu */}
            <div className="flex-1">
              {garments.map((garment) => (
                <button
                  key={garment.id}
                  onClick={() => {
                    if (selectedGarment === garment.id && isPanelOpen) {
                      // If same garment is selected and panel is open, close it
                      setIsPanelOpen(false);
                    } else {
                      // Otherwise, select the garment and open panel
                      setSelectedGarment(garment.id);
                      setIsPanelOpen(true);
                    }
                  }}
                  className={`w-full px-4 py-6 text-left text-lg font-medium border-b border-gray-200 transition-colors ${
                    selectedGarment === garment.id && isPanelOpen
                      ? 'bg-blue-50 text-blue-700 border-r-4 border-r-blue-500'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {garment.name}
                </button>
              ))}
            </div>

          
        </div>

       {/* Collapsible Panel for Style and Fabric */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isPanelOpen ? 'w-80 opacity-100' : 'w-0 opacity-0'
        }`}>
          {selectedGarment && (
            <div className="w-80 h-full flex flex-col bg-white">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200 bg-gray-50 flex-shrink-0">
                <div className="flex">
                  <button
                    onClick={() => setActiveLeftTab('style')}
                    className={`flex-1 py-4 px-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                      activeLeftTab === 'style'
                        ? 'border-blue-500 text-blue-700 bg-white shadow-sm'
                        : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    Style
                  </button>
                  <button
                    onClick={() => setActiveLeftTab('fabric')}
                    className={`flex-1 py-4 px-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                      activeLeftTab === 'fabric'
                        ? 'border-blue-500 text-blue-700 bg-white shadow-sm'
                        : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    Fabric
                  </button>
                </div>
              </div>
              
              {/* Tab Content - Made Scrollable with Custom Scrollbar */}
              <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar" style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#d1d5db transparent'
              }}>
                {activeLeftTab === 'style' && (
                  <div className="p-6">    
                    {/* Pant Style Options */}
                    {selectedGarment === 'pant' && (
                      <>
                        {/* Pant Front Style */}
                        <div className="mt-4">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Pant Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {pantStyles.map((style) => (
                              <button
                                key={style.id}
                                onClick={() => setSelectedPantStyle(style.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedPantStyle === style.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedPantStyle === style.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedPantStyle === style.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {style.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Cuff Style */}
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Cuff Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {pantCuffs.map((cuff) => (
                              <button
                                key={cuff.id}
                                onClick={() => setSelectedPantCuff(cuff.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedPantCuff === cuff.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedPantCuff === cuff.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedPantCuff === cuff.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {cuff.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Waistcoat Style Options */}
                    {selectedGarment === 'waist-coat' && (
                      <>
                        {/* Waistcoat Back Style */}
                        <div className="mt-4">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Back Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {waistcoatBacks.map((back) => (
                              <button
                                key={back.id}
                                onClick={() => setSelectedWaistcoatBack(back.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedWaistcoatBack === back.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedWaistcoatBack === back.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedWaistcoatBack === back.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {back.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Tie Style Options */}
                    {selectedGarment === 'tie' && (
                      <>
                        {/* Tie Type */}
                        <div className="mt-4">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Tie Type</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {tieStyles.map((style) => (
                              <button
                                key={style.id}
                                onClick={() => setSelectedTieStyle(style.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedTieStyle === style.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedTieStyle === style.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedTieStyle === style.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {style.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Tie Width - only show for classic ties */}
                        {selectedTieStyle === 'classic' && (
                          <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Tie Width</h2>
                            <div className="grid grid-cols-3 gap-3">
                              {tieWidths.map((width) => (
                                <button
                                  key={width.id}
                                  onClick={() => setSelectedTieWidth(width.id)}
                                  className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                    selectedTieWidth === width.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                  }`}
                                >
                                  {selectedTieWidth === width.id && (
                                    <div className="absolute top-2 left-2">
                                      <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                    </div>
                                  )}
                                  
                                  <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                    <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                  </div>
                                  
                                  <div className={`text-xs font-medium ${
                                    selectedTieWidth === width.id ? 'text-blue-700' : 'text-gray-600'
                                  }`}>
                                    {width.name}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tie Pattern */}
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Pattern</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {tiePatterns.map((pattern) => (
                              <button
                                key={pattern.id}
                                onClick={() => setSelectedTiePattern(pattern.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedTiePattern === pattern.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedTiePattern === pattern.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedTiePattern === pattern.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {pattern.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Dynamic Style Options based on selected garment */}
                    {selectedGarment === 'suits' && (
                      <>
                        {/* Jacket Style Section */}
                        <div className="mt-4">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Jacket Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {jacketStyles.map((style) => (
                              <button
                                key={style.id}
                                onClick={() => setSelectedJacketStyle(style.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedJacketStyle === style.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedJacketStyle === style.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-28 mx-auto mb-2 flex items-center justify-center">
                                  <img
                                    src={style.image}
                                    alt={style.name}
                                    className="w-full h-50 object-contain"
                                  />
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedJacketStyle === style.id ? 'text-gray-800' : 'text-gray-600'
                                }`}>
                                  {style.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                       
                        {/* Lapel Style Section */}
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Lapel Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {lapelStyles.map((lapel) => (
                              <button
                                key={lapel.id}
                                onClick={() => setSelectedLapel(lapel.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedLapel === lapel.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedLapel === lapel.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-12 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedLapel === lapel.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {lapel.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Vent Style Section */}
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Vent Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {ventStyles.map((vent) => (
                              <button
                                key={vent.id}
                                onClick={() => setSelectedVent(vent.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedVent === vent.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedVent === vent.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-12 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedVent === vent.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {vent.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Pocket Styles */}
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Pocket Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {pocketStyles.map((pocket) => (
                              <button
                                key={pocket.id}
                                onClick={() => setSelectedPocket(pocket.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedPocket === pocket.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedPocket === pocket.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedPocket === pocket.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {pocket.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Shirt Style Options */}
                    {selectedGarment === 'shirt' && (
                      <>
                        {/* Collar Styles */}
                        <div className="mt-4">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Collar Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {collarStyles.map((collar) => (
                              <button
                                key={collar.id}
                                onClick={() => setSelectedCollar(collar.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedCollar === collar.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedCollar === collar.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedCollar === collar.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {collar.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Cuff Styles */}
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Cuff Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {cuffStyles.map((cuff) => (
                              <button
                                key={cuff.id}
                                onClick={() => setSelectedCuff(cuff.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedCuff === cuff.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedCuff === cuff.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedCuff === cuff.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {cuff.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        {/* Front Styles */}
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Front Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {frontStyles.map((front) => (
                              <button
                                key={front.id}
                                onClick={() => setSelectedFront(front.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedFront === front.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                              >
                                {selectedFront === front.id && (
                                  <div className="absolute top-2 left-2">
                                    <Check className="w-4 h-4 text-blue-600 bg-white rounded-full p-0.5 border border-blue-300" />
                                  </div>
                                )}
                                
                                <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-16 bg-gray-200 rounded"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedFront === front.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {front.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

{activeLeftTab === 'fabric' && (
  <div className="h-full flex flex-col">
    {/* Search and Filter Row */}
    <div className="p-4 border-b border-gray-100 flex-shrink-0">
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search fabrics..."
            value={fabricSearch}
            onChange={(e) => setFabricSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
         
        </div>
      </div>
    </div>

    {/* Fabric Grid - Full Height Scrollable */}
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Upload Card - Always First */}
        <button className="relative w-full p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-center group">
          <div className="w-full h-20 rounded-lg mb-3 border border-gray-200 bg-gray-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-600 group-hover:text-blue-700">
              Upload Fabric
            </div>
            <div className="text-xs text-gray-500">
              Add custom fabric
            </div>
          </div>
        </button>

        {filteredFabrics.map((fabric) => (
          <button
            key={fabric.id}
            onClick={() => setSelectedFabric(fabric.id)}
            className={`relative w-full p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-lg text-center group ${
              selectedFabric === fabric.id
                ? 'border-blue-500 bg-blue-50 shadow-md ring-1 ring-blue-200'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            }`}
          >
            {/* Color Swatch */}
            <div
              className="w-full h-20 rounded-lg mb-3 border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow"
              style={{ backgroundColor: fabric.color }}
            ></div>
            
            {/* Fabric Info */}
            <div className="space-y-1">
              <div className={`text-sm font-semibold leading-tight ${
                selectedFabric === fabric.id ? 'text-blue-800' : 'text-gray-900'
              }`}>
                {fabric.name}
              </div>
              
              {fabric.subtitle && (
                <div className="text-xs text-gray-500 leading-tight">
                  {fabric.subtitle}
                </div>
              )}
              
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                  {fabric.type}
                </span>
                <span className="text-sm font-bold text-blue-600">
                  {fabric.price}
                </span>
              </div>
            </div>

            {/* Selection Indicator */}
            {selectedFabric === fabric.id && (
              <div className="absolute top-2 right-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  </div>
)}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Center Panel - Canvas */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={prevStyle}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                disabled={styles.length <= 1}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-900">{styles[currentStyleIndex].name}</h2>
              </div>
              <button
                onClick={nextStyle}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                disabled={styles.length <= 1}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowVirtualTryOn(!showVirtualTryOn)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  showVirtualTryOn
                    ? 'bg-white text-purple-600 border border-purple-300 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {showVirtualTryOn ? (
                  <ChevronLeft className="w-4 h-4" />
                ) : (
                  <Camera className="w-4 h-4" />
                )}
                <span>{showVirtualTryOn ? 'Go Back' : 'Virtual Try On'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 flex items-center justify-center bg-gray-50">
          <div className="relative w-full h-full flex items-center justify-center">
            {showVirtualTryOn ? (
              <div className="relative bg-white max-w-lg">
                <button
                  onClick={() => setShowVirtualTryOn(false)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="w-4 h-4" />
                </button>
                <div>
                  <div className="w-96 h-[500px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-500 mt-2">Customer photo with design overlay</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>Canvas area ready for design work</p>
              </div>
            )}
            
            {/* View Buttons - Right Side */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
              <button className="flex flex-col items-center group hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="4" r="2"/>
                  <path d="M8 8h8v8c0 0.5-0.5 1-1 1h-6c-0.5 0-1-0.5-1-1V8z"/>
                  <path d="M8 10L6 12L8 14"/>
                  <path d="M16 10L18 12L16 14"/>
                  <path d="M10 17v5"/>
                  <path d="M14 17v5"/>
                  <path d="M9 11h6"/>
                  <path d="M10 13h4"/>
                </svg>
                <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 mt-1">Front</span>
              </button>
              
              <button className="flex flex-col items-center group hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="4" r="2"/>
                  <path d="M8 8h8v8c0 0.5-0.5 1-1 1h-6c-0.5 0-1-0.5-1-1V8z"/>
                  <path d="M8 10L6 12L8 14"/>
                  <path d="M16 10L18 12L16 14"/>
                  <path d="M10 17v5"/>
                  <path d="M14 17v5"/>
                  <path d="M12 8v8"/>
                </svg>
                <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 mt-1">Back</span>
              </button>
              
              <button className="flex flex-col items-center group hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 4c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z"/>
                  <path d="M11 8c-1 0-2 1-2 2v6c0 1 1 2 2 2h2c1 0 2-1 2-2V10c0-1-1-2-2-2h-2z"/>
                  <path d="M13 10L15 12L13 14"/>
                  <path d="M11 18v4"/>
                  <path d="M13 18v4"/>
                  <path d="M13 10v6"/>
                </svg>
                <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 mt-1">Side</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Customer Notes & Preferences */}
      <div className="w-64 bg-white border-l border-gray-200 overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Customer Profile
          </h2>
        </div>

        {/* Customer Preferences */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Customer Profile</h3>
            <button
              onClick={() => {
                if (isEditingProfile) {
                  setIsEditingProfile(false);
                } else {
                  setIsEditingProfile(true);
                }
              }}
              className="flex items-center space-x-1 px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              {isEditingProfile ? (
                <>
                  <Save className="w-3 h-3" />
                  <span>Save</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3 h-3" />
                  <span>Edit</span>
                </>
              )}
            </button>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Occasion</h3>
            {isEditingProfile ? (
              <input
                type="text"
                value={editablePreferences.occasion}
                onChange={(e) => setEditablePreferences(prev => ({ ...prev, occasion: e.target.value }))}
                className="w-full text-sm p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-sm text-gray-700">{editablePreferences.occasion}</p>
            )}
          </div>

          {/* Color Palette Row */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Color Palette</h4>
            <div className="flex space-x-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-700"></div>
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-blue-100"></div>
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-blue-200"></div>
              </div>
            </div>
          </div>

          {/* Keywords */}
          <h4 className="text-sm font-medium text-gray-700 mb-3">Likes</h4>
          {isEditingProfile ? (
            <div className="space-y-2 mb-4">
              {editablePreferences.likes.map((like, index) => (
                <input
                  key={index}
                  type="text"
                  value={like}
                  onChange={(e) => {
                    const newLikes = [...editablePreferences.likes];
                    newLikes[index] = e.target.value;
                    setEditablePreferences(prev => ({ ...prev, likes: newLikes }));
                  }}
                  className="w-full text-sm p-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-2 mb-4">
              {editablePreferences.likes.map((like, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {like}
                </div>
              ))}
            </div>
          )}

          <h4 className="text-sm font-medium text-gray-700 mb-3">Dislikes</h4>
          {isEditingProfile ? (
            <div className="space-y-2">
              {editablePreferences.dislikes.map((dislike, index) => (
                <input
                  key={index}
                  type="text"
                  value={dislike}
                  onChange={(e) => {
                    const newDislikes = [...editablePreferences.dislikes];
                    newDislikes[index] = e.target.value;
                    setEditablePreferences(prev => ({ ...prev, dislikes: newDislikes }));
                  }}
                  className="w-full text-sm p-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {editablePreferences.dislikes.map((dislike, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  {dislike}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Customer Review */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-medium text-gray-900 mb-4">Customer Review</h3>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? 'text-red-500 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">4/5</span>
            </div>
            <p className="text-sm text-gray-700 italic">
              "Love the modern approach! The navy color is perfect for my business meetings. 
              Could we explore a slightly more fitted waist on the jacket?"
            </p>
            <p className="text-xs text-gray-500 mt-2">- Marcus Hill, 2 days ago</p>
          </div>
        </div>

        <>
          {isEditingProfile && (
            <div className="space-y-3">
              {Object.entries(editablePreferences.measurements).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 capitalize">{key}:</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          )}
          {!isEditingProfile && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">{editablePreferences.bodyType}</p>
            </div>
          )}
        </>

        {/* Notes Section */}
        <div className="p-6">
          <h3 className="font-medium text-gray-900 mb-4">Stylist Notes</h3>
          <textarea
            placeholder="Add notes about customer preferences, consultation highlights, or design decisions..."
            className="w-full h-32 p-3 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workspace;