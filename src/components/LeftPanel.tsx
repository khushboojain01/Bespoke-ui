import React, { useState } from 'react';
import { 
  Plus, Shirt, Palette, Ruler, User, Zap, Check, Search, 
  SlidersHorizontal, Upload
} from 'lucide-react';

const LeftPanel = () => {
  // Global UI state
  const [activeLeftTab, setActiveLeftTab] = useState('style');
  const [fabricSearch, setFabricSearch] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  
  // Garment selection
  const [selectedGarment, setSelectedGarment] = useState('suits');
  const [selectedFabric, setSelectedFabric] = useState('navy-wool');
  
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
  
  // Accents options
  const [selectedInternalLining, setSelectedInternalLining] = useState('by-default');
  const [selectedInitials, setSelectedInitials] = useState('');
  const [selectedInitialFont, setSelectedInitialFont] = useState('abc-script');
  const [selectedThreadColor, setSelectedThreadColor] = useState('default');
  const [selectedPocketSquare, setSelectedPocketSquare] = useState('without');
  const [selectedButtons, setSelectedButtons] = useState('by-default');
  const [selectedButtonThreads, setSelectedButtonThreads] = useState('by-default');
  const [selectedBowtie, setSelectedBowtie] = useState('no-bowtie');
  const [selectedNecktie, setSelectedNecktie] = useState('without');
  const [selectedBraces, setSelectedBraces] = useState('without');
  const [selectedBelt, setSelectedBelt] = useState('without');
  const [selectedSocks, setSelectedSocks] = useState('without');

  const garments = [
    { id: 'suits', name: 'Suits', icon: User },
    { id: 'shirt', name: 'Shirt', icon: Shirt },
    { id: 'pant', name: 'Pant', icon: Zap },
    { id: 'waist-coat', name: 'Waist coat', icon: Palette },
    { id: 'tie', name: 'Tie', icon: Plus },
    { id: 'accents', name: 'Accents', icon: Palette },
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

  const jacketStyles = [
    { id: 'single-1', image: '/jacket.svg', name: 'Single Breasted 1 Button' },
    { id: 'single-2', image: '/single 2 btn 1.svg', name: 'Single Breasted 2 Buttons' },
    { id: 'double-4', image:'double 4.svg', name: 'Double Breasted 4 Buttons' },
    { id: 'double-6', image:'/double 6.svg', name: 'Double Breasted 6 Buttons' },
    { id: 'mandarin', image:'/mandarin.svg', name: 'Mandarin Collar' },
  ];

  const lapelStyles = [
    { id: 'notched',image: '/notch.svg', name: 'Notched Lapel' },
    { id: 'peaked', image: '/peak.svg', name: 'Peaked Lapel' },
    { id: 'shawl',image: '/shawl.svg', name: 'Shawl Lapel' }
  ];

  const pocketStyles = [
    { id: 'flap', image: '/flap.svg' , name: 'Flap Pocket' },
    { id: 'jetted', image: '/jetted.svg', name: 'Jetted Pocket' },
    { id: 'patch',image: '/patched.svg', name: 'Patch Pocket' }
  ];

  const ventStyles = [
    { id: 'center',image: '/vent center.svg', name: 'Center Vent' },
    { id: 'side', image: '/sidevent.svg', name: 'Side Vent' },
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

  // Accents options data
  const internalLinings = [
    { id: 'by-default', name: 'By default' },
    { id: 'custom-colour', name: 'Custom colour (+12€)' },
    { id: 'unlined', name: 'Unlined (+25€)' },
    { id: 'quilted-lining', name: 'Quilted lining (+20€)' }
  ];

  const initialFonts = [
    { id: 'abc-script', name: 'Script', preview: 'ABC' },
    { id: 'abc-serif', name: 'Serif', preview: 'ABC' },
    { id: 'abc-sans', name: 'Sans', preview: 'ABC' },
    { id: 'abc-cursive', name: 'Cursive', preview: 'ABC' }
  ];

  const threadColors = [
    '#D4B896', '#8B7355', '#A0522D', '#8B4513', '#CD853F',
    '#DEB887', '#8B4500', '#654321', '#708090', '#696969',
    '#2F4F4F', '#000000', '#FFFFFF', '#F5F5DC', '#A0522D'
  ];

  const pocketSquareOptions = [
    { id: 'without', name: 'Without' },
    { id: 'add-pocket-square', name: 'Add pocket square (+10€)' }
  ];

  const buttonOptions = [
    { id: 'by-default', name: 'By default' },
    { id: 'custom', name: 'Custom (+5€)' }
  ];

  const buttonThreadOptions = [
    { id: 'by-default', name: 'By default' },
    { id: 'all', name: 'All (+6€)' },
    { id: 'lapel-only', name: 'Lapel only (+4€)' }
  ];

  const bowtieOptions = [
    { id: 'no-bowtie', name: 'No bow tie' },
    { id: 'custom-color', name: 'Custom color (+19€)' }
  ];

  const necktieOptions = [
    { id: 'without', name: 'Without' },
    { id: 'add', name: 'Add (+16€)' }
  ];

  const bracesOptions = [
    { id: 'without', name: 'Without' },
    { id: 'add', name: 'Add (+14.95€)' }
  ];

  const beltOptions = [
    { id: 'without', name: 'Without' },
    { id: 'add', name: 'Add (+19€)' }
  ];

  const socksOptions = [
    { id: 'without', name: 'Without' },
    { id: 'add-socks', name: 'Add socks (+4.25€)' }
  ];

return (
  <div className="flex bg-white border-r border-gray-200 h-full">
    {/* Fixed Garment Panel - Mobile Responsive */}
    <div className="w-14 sm:w-16 lg:w-[150px] border-r border-gray-200 flex flex-col relative flex-shrink-0">
      <div className="flex-1 overflow-y-auto">
        {garments.map((garment) => (
          <button
            key={garment.id}
            onClick={() => {
              if (selectedGarment === garment.id && isPanelOpen) {
                setIsPanelOpen(false);
              } else {
                setSelectedGarment(garment.id);
                setIsPanelOpen(true);
              }
            }}
            className={`w-full px-1 sm:px-2 lg:px-4 py-3 sm:py-4 lg:py-6 text-left text-xs sm:text-sm lg:text-lg font-medium border-b border-gray-200 transition-colors flex flex-col items-center lg:block ${
              selectedGarment === garment.id && isPanelOpen
                ? 'bg-blue-50 text-blue-700 border-r-4 border-r-blue-500'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {/* Mobile: Icon only, Desktop: Text */}
            <garment.icon className="lg:hidden w-7 h-7 text-gray-800 mb-1" />
            <span className="hidden lg:inline">{garment.name}</span>
            <span className="lg:hidden text-xs text-center leading-tight">{garment.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
    
    {/* Expandable Options Panel - Mobile Responsive */}
    <div className={`overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0 ${
      isPanelOpen 
        ? 'w-64 sm:w-72 lg:w-80 opacity-100' 
        : 'w-0 opacity-0'
    }`}>
      {selectedGarment && (
        <div className="w-64 sm:w-72 lg:w-80 h-full flex flex-col bg-white">
          {/* Tab Navigation - Mobile Responsive */}
          <div className="sticky top-0 z-10 border-b border-gray-200 bg-gray-50 flex-shrink-0">
            <div className="flex">
              <button
                onClick={() => setActiveLeftTab('style')}
                className={`flex-1 py-3 lg:py-4 px-2 lg:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all duration-200 ${
                  activeLeftTab === 'style'
                    ? 'border-blue-500 text-blue-700 bg-white shadow-sm'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-sm'
                }`}
              >
                Style
              </button>
              <button
                onClick={() => setActiveLeftTab('fabric')}
                className={`flex-1 py-3 lg:py-4 px-2 lg:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all duration-200 ${
                  activeLeftTab === 'fabric'
                    ? 'border-blue-500 text-blue-700 bg-white shadow-sm'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-sm'
                }`}
              >
                Fabric
              </button>
            </div>
          </div>
          
          {/* Tab Content - Scrollable with Custom Scrollbar */}
          <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db transparent'
          }}>
            {activeLeftTab === 'style' && (
              <div className="p-3 sm:p-4 lg:p-6">    
              {/* Accents Style Options */}
                {selectedGarment === 'accents' && (
                  <>
                    {/* Internal Lining */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Internal lining</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {internalLinings.map((lining) => (
                          <button
                            key={lining.id}
                            onClick={() => setSelectedInternalLining(lining.id)}
                            className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedInternalLining === lining.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedInternalLining === lining.id && (
                             <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                  <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                </div>
                              </div>
                            )}
                            
                            <div className="w-full h-12 lg:h-16 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-10 lg:w-10 lg:h-12 bg-gray-200 rounded border"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedInternalLining === lining.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {lining.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Blazer Initials */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">Blazer initials (+10€)</h2>
                      <input
                        type="text"
                        placeholder="Type your initials"
                        value={selectedInitials}
                        onChange={(e) => setSelectedInitials(e.target.value)}
                        className="w-full p-2 lg:p-3 border border-gray-300 rounded-lg mb-3 lg:mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        maxLength="3"
                      />
                      
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Font:</h3>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {initialFonts.map((font) => (
                          <button
                            key={font.id}
                            onClick={() => setSelectedInitialFont(font.id)}
                            className={`p-2 lg:p-3 text-center rounded-lg border transition-all ${
                              selectedInitialFont === font.id 
                                ? 'bg-gray-50  text-gray-700' 
                                : 'border-gray-300 hover:bg-gray-350'
                            }`}
                          >
                            <div className="text-base lg:text-lg font-semibold mb-1">{font.preview}</div>
                            <div className="text-xs text-gray-600">{font.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Thread Color */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">Thread Color</h2>
                      <div className="grid grid-cols-5 gap-1.5 lg:gap-2">
                        {threadColors.map((color, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedThreadColor(color)}
                            className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg border-2 transition-all hover:scale-110 ${
                              selectedThreadColor === color ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: color }}
                          ></button>
                        ))}
                      </div>
                    </div>

                    {/* Pocket Squares */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Pocket Squares</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {pocketSquareOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedPocketSquare(option.id)}
                           className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedPocketSquare === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedPocketSquare === option.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="w-full h-12 lg:h-16 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-10 lg:w-10 lg:h-12 bg-gray-200 rounded border"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedPocketSquare === option.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {option.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Buttons</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {buttonOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedButtons(option.id)}
                            className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedButtons === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedButtons === option.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="w-full h-12 lg:h-16 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-300 rounded-full border-2 border-gray-400"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedButtons === option.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {option.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Button threads/holes */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Button threads/ holes</h2>
                      <div className="grid grid-cols-1 gap-2 lg:gap-3">
                        {buttonThreadOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedButtonThreads(option.id)}
                             className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedButtonThreads === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedButtonThreads === option.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="flex items-center justify-center">
                              <div className="w-8 h-5 lg:w-10 lg:h-6 bg-gray-200 rounded border mr-3"></div>
                              <div className={`text-xs font-medium ${
                                selectedButtonThreads === option.id ? 'text-gray-700' : 'text-gray-600'
                              }`}>
                                {option.name}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bowtie */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Bowtie</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {bowtieOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedBowtie(option.id)}
                             className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedBowtie === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedBowtie === option.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="w-full h-12 lg:h-16 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-10 h-5 lg:w-12 lg:h-6 bg-gray-200 rounded border"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedBowtie === option.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {option.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Necktie */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Necktie</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {necktieOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedNecktie(option.id)}
                             className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedNecktie === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedNecktie === option.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="w-full h-12 lg:h-16 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-6 h-12 lg:w-8 lg:h-14 bg-gray-200 rounded border"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedNecktie === option.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {option.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Braces */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Braces</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {bracesOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedBraces(option.id)}
                             className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedBraces === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedBraces === option.id && (
                                <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="w-full h-12 lg:h-16 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-10 lg:w-10 lg:h-12 bg-gray-200 rounded border"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedBraces === option.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {option.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Belt */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Belt</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {beltOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedBelt(option.id)}
                             className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedBelt === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedBelt === option.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="w-full h-12 lg:h-16 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-10 h-3 lg:w-12 lg:h-4 bg-gray-200 rounded-full border"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedBelt === option.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {option.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Socks */}
                    <div className="mb-6 lg:mb-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Socks</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {socksOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedSocks(option.id)}
                             className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedSocks === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedSocks === option.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="w-full h-12 lg:h-16 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-10 lg:w-10 lg:h-12 bg-gray-200 rounded border"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedSocks === option.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {option.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )} 

                {/* Rest of your existing garment options with mobile responsive classes... */}
                {selectedGarment === 'pant' && (
                  <>
                    {/* Pant Front Style */}
                    <div className="mt-4">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Pant Style</h2>
                      <div className="grid grid-cols-3 gap-2 lg:gap-3">
                        {pantStyles.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => setSelectedPantStyle(style.id)}
                              className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedPantStyle === style.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedPantStyle === style.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                              </div>
                            </div>
                            )}
                            
                            <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedPantStyle === style.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {style.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cuff Style */}
                    <div className="mt-6 lg:mt-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Cuff Style</h2>
                      <div className="grid grid-cols-3 gap-2 lg:gap-3">
                        {pantCuffs.map((cuff) => (
                          <button
                            key={cuff.id}
                            onClick={() => setSelectedPantCuff(cuff.id)}
                              className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedPantCuff === cuff.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedPantCuff === cuff.id && (
                              <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                            )}
                            
                            <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedPantCuff === cuff.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {cuff.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Continue with all other garment sections using the same responsive pattern... */}
                {/* I'm shortening this for space, but apply the same mobile responsive classes to all sections */}

                {/* Dynamic Style Options based on selected garment */}
                {selectedGarment === 'suits' && (
                  <>
                    {/* Jacket Style Section */}
                    <div className="mt-4">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Jacket Style</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {jacketStyles.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => setSelectedJacketStyle(style.id)}
                            className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedJacketStyle === style.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                             {/* Jacket Style Section selection indicator */}
                            {selectedJacketStyle === style.id && (
                              <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                  <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                </div>
                              </div>
                            )}

                            <div className="w-full h-20 lg:h-28 mx-auto mb-2 flex items-center justify-center">
                              <img
                                src={style.image}
                                alt={style.name}
                                className="w-full h-full object-contain"
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
                    <div className="mt-6 lg:mt-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Lapel Style</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {lapelStyles.map((lapel) => (
                          <button
                            key={lapel.id}
                            onClick={() => setSelectedLapel(lapel.id)}
                            className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedLapel === lapel.id ? 'bg-gray-50 ' : 'hover:ring-gray-300'
                            }`}
                          >
                            {selectedLapel === lapel.id && (
                                <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                                </div>
                              )}
                            
                            <div className="w-full h-20 lg:h-28 mx-auto mb-2 flex items-center justify-center">
                              <img
                                src={lapel.image}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedLapel === lapel.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {lapel.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Vent Style Section */}
                    <div className="mt-6 lg:mt-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Vent Style</h2>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3">
                        {ventStyles.map((vent) => (
                          <button
                            key={vent.id}
                            onClick={() => setSelectedVent(vent.id)}
                            className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedVent === vent.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedVent === vent.id && (
                              <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                                </div>
                            )}
                            
                            <div className="w-full h-24 lg:h-32 mx-auto mb-2 flex items-center justify-center">
                              <img
                                src={vent.image}
                                alt={vent.name}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedVent === vent.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {vent.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pocket Styles */}
                    <div className="mt-6 lg:mt-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Pocket Style</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {pocketStyles.map((pocket) => (
                          <button
                            key={pocket.id}
                            onClick={() => setSelectedPocket(pocket.id)}
                           className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedPocket === pocket.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedPocket === pocket.id && (
                              <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                            )}
                            
                            <div className="w-full h-20 lg:h-28 mx-auto mb-2 flex items-center justify-center">
                              <img
                                src={pocket.image}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedPocket === pocket.id ? 'text-gray-700' : 'text-gray-600'
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
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Collar Style</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {collarStyles.map((collar) => (
                          <button
                            key={collar.id}
                            onClick={() => setSelectedCollar(collar.id)}
                            className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                            selectedCollar === collar.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedCollar === collar.id && (
                             <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                            )}
                            
                            <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedCollar === collar.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {collar.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cuff Styles */}
                    <div className="mt-6 lg:mt-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Cuff Style</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {cuffStyles.map((cuff) => (
                          <button
                            key={cuff.id}
                            onClick={() => setSelectedCuff(cuff.id)}
                            className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                            selectedCuff === cuff.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedCuff === cuff.id && (
                              <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                            )}
                            
                            <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedCuff === cuff.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {cuff.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Front Styles */}
                    <div className="mt-6 lg:mt-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Front Style</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {frontStyles.map((front) => (
                          <button
                            key={front.id}
                            onClick={() => setSelectedFront(front.id)}
                           className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                            selectedFront === front.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedFront === front.id && (
                              <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                            )}
                            
                            <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedFront === front.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {front.name}
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
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Back Style</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {waistcoatBacks.map((back) => (
                          <button
                            key={back.id}
                            onClick={() => setSelectedWaistcoatBack(back.id)}
                              className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedWaistcoatBack === back.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedWaistcoatBack === back.id && (
                             <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                            )}
                            
                            <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedWaistcoatBack === back.id ? 'text-gray-700' : 'text-gray-600'
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
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Tie Type</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {tieStyles.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => setSelectedTieStyle(style.id)}
                             className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedTieStyle === style.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedTieStyle === style.id && (
                              <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                            )}
                            
                            <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedTieStyle === style.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {style.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tie Width - only show for classic ties */}
                    {selectedTieStyle === 'classic' && (
                      <div className="mt-6 lg:mt-8">
                        <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Tie Width</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                          {tieWidths.map((width) => (
                            <button
                              key={width.id}
                              onClick={() => setSelectedTieWidth(width.id)}
                              className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedTieWidth === width.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                            >
                              {selectedTieWidth === width.id && (
                               <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                              )}
                              
                              <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                                <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                              </div>
                              
                              <div className={`text-xs font-medium ${
                                selectedTieWidth === width.id ? 'text-gray-700' : 'text-gray-600'
                              }`}>
                                {width.name}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tie Pattern */}
                    <div className="mt-6 lg:mt-8">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Pattern</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                        {tiePatterns.map((pattern) => (
                          <button
                            key={pattern.id}
                            onClick={() => setSelectedTiePattern(pattern.id)}
                            className={`relative p-2 lg:p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                              selectedTiePattern === pattern.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                            }`}
                          >
                            {selectedTiePattern === pattern.id && (
                            <div className="absolute top-1 left-1 lg:top-2 lg:left-2">
                                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
                                  </div>
                              </div>
                            )}
                            
                            <div className="w-full h-16 lg:h-20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-8 h-12 lg:w-10 lg:h-16 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              selectedTiePattern === pattern.id ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {pattern.name}
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
                {/* Search and Filter Row - Mobile Responsive */}
                <div className="p-3 lg:p-4 border-b border-gray-100 flex-shrink-0">
                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search fabrics..."
                        value={fabricSearch}
                        onChange={(e) => setFabricSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 lg:py-2.5 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-1 lg:space-x-2 px-2 lg:px-3 py-1.5 lg:py-2 border border-gray-300 rounded-lg text-xs lg:text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                        <SlidersHorizontal className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>Filters</span>
                      </button>
                      <button className="flex items-center space-x-1 lg:space-x-2 px-2 lg:px-3 py-1.5 lg:py-2 border border-gray-300 rounded-lg text-xs lg:text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                        <Upload className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>Upload</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Fabric Grid - Full Height Scrollable - Mobile Responsive */}
                <div className="flex-1 overflow-y-auto p-3 lg:p-4">
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  
                    

                    {filteredFabrics.map((fabric) => (
                      <button
                        key={fabric.id}
                        onClick={() => setSelectedFabric(fabric.id)}
                        className={`relative w-full p-3 lg:p-4 rounded-xl border-1 transition-all duration-200 text-center group ${
                          selectedFabric === fabric.id
                            ? 'border-gray-200 shadow-md'
                            : 'border-gray-200 hover:border-gray-150 hover:bg-gray-50'
                        }`}
                      >
                        {/* Color Swatch */}
                        <div
                          className="w-full h-16 lg:h-20 rounded-lg mb-2 lg:mb-3 shadow-sm group-hover:shadow-md transition-shadow"
                          style={{ backgroundColor: fabric.color }}
                        ></div>
                        
                        {/* Fabric Info */}
                        <div className="space-y-1">
                          <div className={`text-xs lg:text-sm font-semibold leading-tight ${
                            selectedFabric === fabric.id ? 'text-gray-800' : 'text-gray-900'
                          }`}>
                            {fabric.name}
                          </div>
                          
                          {fabric.subtitle && (
                            <div className="text-xs text-gray-500 leading-tight">
                              {fabric.subtitle}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs px-1.5 lg:px-2 py-0.5 lg:py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                              {fabric.type}
                            </span>
                            <span className="text-xs lg:text-sm font-bold text-gray-600">
                              {fabric.price}
                            </span>
                          </div>
                        </div>

                        {/* Selection Indicator */}
                        {selectedFabric === fabric.id && (
                          <div className="absolute top-2 right-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 lg:w-4 lg:h-4 text-gray" />
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
);
};

export default LeftPanel;