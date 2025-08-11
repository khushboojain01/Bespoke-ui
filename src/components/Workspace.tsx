
import React, { useState } from 'react';
import { 
  Camera, Plus, Shirt, Palette, Ruler, MessageSquare, Heart, X, 
  ChevronLeft, ChevronRight, FileText, Search, SlidersHorizontal, 
  User, Zap, Save, Edit3, Check, ChevronDown, Menu, PanelLeftClose,
  PanelLeftOpen,
  ZoomOut,
  ZoomIn,
  Upload,
  Layout,
  Trash2
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
  const [currentView, setCurrentView] = useState<'front' | 'back' | 'side'>('front'); // Add this line
  
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
  const [notes, setNotes] = useState('');
  const [notesSaved, setNotesSaved] = useState(false);
  type SavedNote = { id: number; content: string; timestamp: string };
  const [savedNotes, setSavedNotes] = useState<SavedNote[]>([]); // Store all saved notes
  const [notesExpanded, setNotesExpanded] = useState(false); // Control accordion
  const [selectedStyleboardItem, setSelectedStyleboardItem] = useState(null);
  const [showFullStyleboard, setShowFullStyleboard] = useState(false);
  const [styleboardNotes, setStyleboardNotes] = useState(false);
  const styles = [
    { id: 'modern-navy', name: 'Modern Navy Business Suit', description: 'Professional and contemporary' },
    { id: 'charcoal-evening', name: 'Charcoal Evening Ensemble', description: 'Elegant formal wear' },
    { id: 'light-grey-weekend', name: 'Light Grey Weekend Suit', description: 'Casual sophistication' },
  ];
  const [measurementsExpanded, setMeasurementsExpanded] = useState(false);
  const [editablePreferences, setEditablePreferences] = useState({
    occasion: 'Business meetings',
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

  const nextStyle = () => {
    setCurrentStyleIndex((prev) => (prev + 1) % styles.length);
  };

  // Order details
  const [orderNumber, setOrderNumber] = useState('#275');
  const prevStyle = () => {
    setCurrentStyleIndex((prev) => (prev - 1 + styles.length) % styles.length);
  };

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

  const fits = [
    { id: 'slim', name: 'Slim Fit', description: 'Close-fitting, tailored silhouette' },
    { id: 'modern', name: 'Modern Fit', description: 'Balanced comfort and style' },
    { id: 'classic', name: 'Classic Fit', description: 'Traditional, comfortable cut' },
  ];

  const jacketStyles = [
    { id: 'single-1', image: '/jacket.svg', name: 'Single Breasted 1 Button' },
    { id: 'single-2', image: '/single 2 btn 1.svg', name: 'Single Breasted 2 Buttons' },
    { id: 'double-4', image:'double 4.svg', name: 'Double Breasted 4 Buttons' },
    { id: 'double-6', image:'/double 6.svg', name: 'Double Breasted 6 Buttons' },
    { id: 'mandarin', image:'/mandarin.svg', name: 'Mandarin Collar' },
    /*{ id: 'three-piece', image:'/3pcsuit.svg'  }*/
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

const handleSaveNotes = () => {
  if (notes.trim()) {
    const newNote = {
      id: Date.now(),
      content: notes.trim(),
      timestamp: new Date().toLocaleString()
    };
    setSavedNotes(prev => [newNote, ...prev]); 
    setNotes(''); 
    setNotesSaved(true);
    setTimeout(() => setNotesSaved(false), 2000);
  }
};


 return (
    <div className="flex h-[calc(100vh-120px)] bg-gray-50">
      {/* Left Panel - Customization */}
      <div className="flex bg-white border-r border-gray-200">
        {/* Fixed Garment Panel */}
        <div className="w-[150px] border-r border-gray-200 flex flex-col relative">
            <div className="flex-1">
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
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isPanelOpen ? 'w-80 opacity-100' : 'w-0 opacity-0'
        }`}>
          {selectedGarment && (
            <div className="w-80 h-full flex flex-col bg-white ">
              {/* Tab Navigation */}
              <div className="sticky top-0 z-10 border-b border-gray-200 bg-gray-50 flex-shrink-0">
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
                  {/* Accents Style Options */}
                    {selectedGarment === 'accents' && (
                      <>
                        {/* Internal Lining */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Internal lining</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {internalLinings.map((lining) => (
                              <button
                                key={lining.id}
                                onClick={() => setSelectedInternalLining(lining.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedJacketStyle === lining.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedInternalLining === lining.id && (
                                 <div className="absolute top-2 left-2">
                                    <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-gray" />
                                    </div>
                                  </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-12 bg-gray-200 rounded border"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedInternalLining === lining.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {lining.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Blazer Initials */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-4">Blazer initials (+10€)</h2>
                          <input
                            type="text"
                            placeholder="Type your initials"
                            value={selectedInitials}
                            onChange={(e) => setSelectedInitials(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            maxLength="3"
                          />
                          
                          <h3 className="text-sm font-medium text-gray-700 mb-3">Font:</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {initialFonts.map((font) => (
                              <button
                                key={font.id}
                                onClick={() => setSelectedInitialFont(font.id)}
                                className={`p-3 text-center rounded-lg border transition-all ${
                                  selectedInitialFont === font.id 
                                    ? 'bg-gray-50  text-gray-700' 
                                    : 'border-gray-300 hover:bg-gray-350'
                                }`}
                              >
                                <div className="text-lg font-semibold mb-1">{font.preview}</div>
                                <div className="text-xs text-gray-600">{font.name}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Thread Color */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-4">Thread Color</h2>
                          <div className="grid grid-cols-5 gap-2">
                            {threadColors.map((color, index) => (
                              <button
                                key={index}
                                onClick={() => setSelectedThreadColor(color)}
                                className={`w-10 h-10 rounded-lg border-2 transition-all hover:scale-110 ${
                                  selectedThreadColor === color ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300'
                                }`}
                                style={{ backgroundColor: color }}
                              ></button>
                            ))}
                          </div>
                        </div>

                        {/* Pocket Squares */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Pocket Squares</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {pocketSquareOptions.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedPocketSquare(option.id)}
                               className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedJacketStyle === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedPocketSquare === option.id && (
                                   <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
                                </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-12 bg-gray-200 rounded border"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedPocketSquare === option.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {option.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Buttons</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {buttonOptions.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedButtons(option.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedButtons === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedButtons === option.id && (
                                   <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
                                </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-gray-400"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedButtons === option.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {option.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Button threads/holes */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Button threads/ holes</h2>
                          <div className="grid grid-cols-1 gap-3">
                            {buttonThreadOptions.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedButtonThreads(option.id)}
                                 className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedButtonThreads === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedButtonThreads === option.id && (
                                   <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
                                </div>
                                )}
                                
                                <div className="flex items-center justify-center">
                                  <div className="w-10 h-6 bg-gray-200 rounded border mr-3"></div>
                                  <div className={`text-xs font-medium ${
                                    selectedButtonThreads === option.id ? 'text-blue-700' : 'text-gray-600'
                                  }`}>
                                    {option.name}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Bowtie */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Bowtie</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {bowtieOptions.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedBowtie(option.id)}
                                 className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedBowtie === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedBowtie === option.id && (
                                   <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
                                </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-12 h-6 bg-gray-200 rounded border"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedBowtie === option.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {option.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Necktie */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Necktie</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {necktieOptions.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedNecktie(option.id)}
                                 className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedNecktie === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedNecktie === option.id && (
                                   <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
                                </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-8 h-14 bg-gray-200 rounded border"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedNecktie === option.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {option.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Braces */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Braces</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {bracesOptions.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedBraces(option.id)}
                                 className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedBraces === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedBraces === option.id && (
                                    <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
                                </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-12 bg-gray-200 rounded border"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedBraces === option.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {option.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Belt */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Belt</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {beltOptions.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedBelt(option.id)}
                                 className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedBelt === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedBelt === option.id && (
                                   <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
                                </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-12 h-4 bg-gray-200 rounded-full border"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedBelt === option.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {option.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Socks */}
                        <div className="mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Socks</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {socksOptions.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedSocks(option.id)}
                                 className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedSocks === option.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedSocks === option.id && (
                                   <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
                                </div>
                                )}
                                
                                <div className="w-full h-16 mx-auto mb-2 flex items-center justify-center">
                                  <div className="w-10 h-12 bg-gray-200 rounded border"></div>
                                </div>
                                
                                <div className={`text-xs font-medium ${
                                  selectedSocks === option.id ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                  {option.name}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )} 
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
                                  selectedPantStyle === style.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedPantStyle === style.id && (
                                   <div className="absolute top-2 left-2">
                                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-gray" />
                                  </div>
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
                                  selectedPantCuff === cuff.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedPantCuff === cuff.id && (
                                  <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
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
                                  selectedWaistcoatBack === back.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedWaistcoatBack === back.id && (
                                 <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
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
                                  selectedJacketStyle === style.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedTieStyle === style.id && (
                                  <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
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
                                  selectedJacketStyle === width.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                                >
                                  {selectedTieWidth === width.id && (
                                   <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
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
                                  selectedJacketStyle === pattern.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedTiePattern === pattern.id && (
                                <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
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
                                 {/* Jacket Style Section selection indicator */}
                                {selectedJacketStyle === style.id && (
                                  <div className="absolute top-2 left-2">
                                    <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-gray" />
                                    </div>
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
                                  selectedLapel === lapel.id ? 'bg-gray-50 ' : 'hover:ring-gray-300'
                                }`}
                              >
                                {selectedLapel === lapel.id && (
                                    <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
                                    </div>
                                  )}
                                
                                <div className="w-full h-28 mx-auto mb-2 flex items-center justify-center">
                                  <img
                                    src={lapel.image}
                                    className="w-full h-50 object-contain"
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
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Vent Style</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {ventStyles.map((vent) => (
                              <button
                                key={vent.id}
                                onClick={() => setSelectedVent(vent.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedVent === vent.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedVent === vent.id && (
                                  <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
                                    </div>
                                )}
                                
                                <div className="w-full h-32 mx-auto mb-2 flex items-center justify-center">
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
                        <div className="mt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Pocket Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {pocketStyles.map((pocket) => (
                              <button
                                key={pocket.id}
                                onClick={() => setSelectedPocket(pocket.id)}
                               className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                  selectedPocket === pocket.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedPocket === pocket.id && (
                                  <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
                                  </div>
                                )}
                                
                                <div className="w-full h-28 mx-auto mb-2 flex items-center justify-center">
                                  <img
                                    src={pocket.image}
                                
                                    className="w-full h-50 object-contain"
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
                          <h2 className="text-xl font-semibold text-gray-900 mb-6">Collar Style</h2>
                          <div className="grid grid-cols-3 gap-3">
                            {collarStyles.map((collar) => (
                              <button
                                key={collar.id}
                                onClick={() => setSelectedCollar(collar.id)}
                                className={`relative p-3 text-center transition-all hover:bg-gray-50 rounded-lg ${
                                selectedVent === collar.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedCollar === collar.id && (
                                 <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
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
                                selectedVent === cuff.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedCuff === cuff.id && (
                                  <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
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
                                selectedVent === front.id ? 'bg-gray-50 ' : ' hover:ring-gray-300'
                                }`}
                              >
                                {selectedFront === front.id && (
                                  <div className="absolute top-2 left-2">
                                      <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-gray" />
                                      </div>
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
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                          <SlidersHorizontal className="w-4 h-4" />
                          <span>Filters</span>
                        </button>
                      <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                        <Upload className="w-4 h-4" />
                        <span>Upload</span>
                      </button>
                      </div>
                    </div>
                  </div>

                  {/* Fabric Grid - Full Height Scrollable */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Upload Card - Always First */}
                      <button className="relative w-full p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-center group">
                        <div className="w-full h-20 rounded-lg mb-3 border border-gray-200 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
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
                          className={`relative w-full p-4 rounded-xl border-1 transition-all duration-200  text-center group ${
                            selectedFabric === fabric.id
                              ? 'border-gray-200  shadow-md'
                              : 'border-gray-200 hover:border-gray-150 hover:bg-gray-50'
                          }`}
                        >
                          {/* Color Swatch */}
                          <div
                            className="w-full h-20 rounded-lg mb-3  shadow-sm group-hover:shadow-md transition-shadow"
                            style={{ backgroundColor: fabric.color }}
                          ></div>
                          
                          {/* Fabric Info */}
                          <div className="space-y-1">
                            <div className={`text-sm font-semibold leading-tight ${
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
                              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                                {fabric.type}
                              </span>
                              <span className="text-sm font-bold text-gray-600">
                                {fabric.price}
                              </span>
                            </div>
                          </div>

                          {/* Selection Indicator blue tick-mark */ }
                          {selectedFabric === fabric.id && (
                            <div className="absolute top-2 right-2">
                              <div className="w-6 h-6 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-gray" />
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

      {/* Center Panel - canvas */}
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
              <div className="text-left">
                <h2 className="text-lg font-semibold text-gray-900">{styles[currentStyleIndex].name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-600">Estimated price: $4000</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Within budget</span>
                </div>
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
                    : 'bg-blue-600 text-white hover:bg-blue-700'
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

        <div className="flex-1 p-6 flex items-center justify-center bg-gray-50 relative">
          {/* Main Canvas Container - Responsive to left panel */}
          <div className="relative w-full h-full flex items-center justify-center max-w-4xl">
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
              <div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
                <img 
                  src="/api/placeholder/400/600" 
                  alt="Modern Navy Business Suit"
                  className="max-w-sm max-h-full object-contain"
                />
              </div>
            )}
          </div>
          
          {/* Zoom Controls - Bottom Center - Fixed position */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white rounded-full px-3 py-2 shadow-sm border border-gray-200 z-10">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ZoomIn className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ZoomOut className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          {/* View Buttons - Right Side - Always visible */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
            <button 
              onClick={() => setCurrentView('front')}
              className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                currentView === 'front' 
                  ? 'bg-blue-50 border border-blue-200' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className={`w-6 h-6 mb-1 ${
                currentView === 'front' ? 'text-blue-600' : 'text-gray-600'
              }`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="4" r="2"/>
                  <path d="M8 8h8v8c0 0.5-0.5 1-1 1h-6c-0.5 0-1-0.5-1-1V8z"/>
                  <path d="M10 17v5"/>
                  <path d="M14 17v5"/>
                </svg>
              </div>
              <span className={`text-xs ${
                currentView === 'front' ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}>Front</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('back')}
              className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                currentView === 'back' 
                  ? 'bg-blue-50 border border-blue-200' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className={`w-6 h-6 mb-1 ${
                currentView === 'back' ? 'text-blue-600' : 'text-gray-600'
              }`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="4" r="2"/>
                  <path d="M8 8h8v8c0 0.5-0.5 1-1 1h-6c-0.5 0-1-0.5-1-1V8z"/>
                  <path d="M10 17v5"/>
                  <path d="M14 17v5"/>
                  <path d="M12 8v8"/>
                </svg>
              </div>
              <span className={`text-xs ${
                currentView === 'back' ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}>Back</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('side')}
              className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                currentView === 'side' 
                  ? 'bg-blue-50 border border-blue-200' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className={`w-6 h-6 mb-1 ${
                currentView === 'side' ? 'text-blue-600' : 'text-gray-600'
              }`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="4" r="2"/>
                  <path d="M11 8c-1 0-2 1-2 2v6c0 1 1 2 2 2h2c1 0 2-1 2-2V10c0-1-1-2-2-2h-2z"/>
                  <path d="M11 18v4"/>
                  <path d="M13 18v4"/>
                </svg>
              </div>
              <span className={`text-xs ${
                currentView === 'side' ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}>Side</span>
            </button>
          </div>

          {/* Full Look - Bottom Right */}
          <div className="absolute bottom-4 right-6 z-10">
            <div className="bg-white rounded-lg border border-gray-200 p-3 w-24">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Full Look</span>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="w-full h-12 bg-gray-100 rounded border flex items-center justify-center mb-2">
                <div className="flex space-x-0.5">
                  <div className="w-1.5 h-6 bg-gray-400 rounded-sm"></div>
                  <div className="w-1 h-6 bg-gray-500 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
      {/* rightpanel section */}
      <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900 flex items-center">
                  <User className="w-4 h-4 mr-2 text-blue-600" />
                  Customer Profile
                </h2>
                <button
                  onClick={() => setIsEditingProfile(prev => !prev)}
                  className={`flex items-center space-x-1 px-2 py-1 text-xs rounded-md transition-colors ${
                    isEditingProfile 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {isEditingProfile ? (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-4 h-4" />
                      
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center">
                  <Layout className="w-4 h-4 mr-2 text-blue-600" />
                  Styleboard
                </h3>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  View
                </button>
              </div>
            </div>
          
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                <Palette className="w-4 h-4 mr-2 text-blue-600" />
                Basic Information
              </h3>
              
              {/* Occasion */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-1">Occasion</h4>
                {isEditingProfile ? (
                  <input
                    type="text"
                    value={editablePreferences.occasion}
                    onChange={(e) => setEditablePreferences(prev => ({ ...prev, occasion: e.target.value }))}
                    className="w-full text-xs p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-xs text-gray-700 bg-gray-50 p-2 rounded-md leading-relaxed">{editablePreferences.occasion}</p>
                )}
              </div>

              {/* Color Palette */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Color Palette</h4>
                <div className="flex space-x-2">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-md" 
                        style={{ backgroundColor: '#1e293b' }}></div>
                    <span className="text-xs text-gray-600 mt-1">Navy</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-md" 
                        style={{ backgroundColor: '#6b7280' }}></div>
                    <span className="text-xs text-gray-600 mt-1">Grey</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-md" 
                        style={{ backgroundColor: '#9ca3af' }}></div>
                    <span className="text-xs text-gray-600 mt-1">Light Grey</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                <Heart className="w-4 h-4 mr-2 text-blue-600" />
                Preferences
              </h3>

              {/* Likes */}
              <div className="mb-3">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Likes</h4>
                {isEditingProfile ? (
                  <div className="space-y-2">
                    {editablePreferences.likes.map((like, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={like}
                          onChange={(e) => {
                            const newLikes = [...editablePreferences.likes];
                            newLikes[index] = e.target.value;
                            setEditablePreferences(prev => ({ ...prev, likes: newLikes }));
                          }}
                          className="flex-1 text-xs p-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                        />
                    
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setEditablePreferences(prev => ({ ...prev, likes: [...prev.likes, ''] }));
                      }}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      + Add Like
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {editablePreferences.likes.map((like, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-700 bg-green-50 p-1.5 rounded-md">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{like}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Dislikes */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Dislikes</h4>
                {isEditingProfile ? (
                  <div className="space-y-2">
                    {editablePreferences.dislikes.map((dislike, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={dislike}
                          onChange={(e) => {
                            const newDislikes = [...editablePreferences.dislikes];
                            newDislikes[index] = e.target.value;
                            setEditablePreferences(prev => ({ ...prev, dislikes: newDislikes }));
                          }}
                          className="flex-1 text-xs p-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                        />
                      
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setEditablePreferences(prev => ({ ...prev, dislikes: [...prev.dislikes, ''] }));
                      }}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      + Add Dislike
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {editablePreferences.dislikes.map((dislike, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-700 bg-red-50 p-1.5 rounded-md">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{dislike}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Customer Review */}
            <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
                Customer Review
              </h3>
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors">
                View All
              </button>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      className={`w-3 h-3 ${i < 4 ? 'text-red-500 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-gray-700">4/5</span>
              </div>
              <p className="text-xs text-gray-700 italic leading-relaxed mb-2">
                "Love the modern approach! The navy color is perfect for my business meetings. 
                Could we explore a slightly more fitted waist on the jacket?"
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Marcus Hill</span>
                <span>2 days ago</span>
              </div>
            </div>
          </div>

            {/* Body Type & Measurements - Accordion Style */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center">
                  <Ruler className="w-4 h-4 mr-2 text-blue-600" />
                  Body Type
                </h3>
                <button
                  onClick={() => setMeasurementsExpanded(!measurementsExpanded)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {measurementsExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              <div className="mt-2">
                <div className="p-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-md border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800">{editablePreferences.bodyType}</p>
                </div>
                
                {measurementsExpanded && (
                  <div className="mt-3 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(editablePreferences.measurements).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                          <span className="text-xs font-medium text-gray-700 capitalize">{key}</span>
                          <span className="text-xs font-bold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

      {/* Notes Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 flex items-center">
            <FileText className="w-4 h-4 mr-2 text-blue-600" />
            Stylist Notes
          </h3>
          {savedNotes.length > 0 && (
            <button
              onClick={() => setNotesExpanded(!notesExpanded)}
              className="flex items-center space-x-1 px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
            >
              <span>View Notes ({savedNotes.length})</span>
              {notesExpanded ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
            </button>
          )}
        </div>

          {/* Saved Notes Accordion */}
        {notesExpanded && savedNotes.length > 0 && (
          <div className="mb-4 space-y-2 max-h-40 overflow-y-auto">
            {savedNotes.map((note) => (
              <div key={note.id} className="p-3 bg-blue-50 rounded-md border border-blue-100">
                <p className="text-xs text-gray-700 leading-relaxed mb-2">{note.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{note.timestamp}</span>
                  <button
                    onClick={() => setSavedNotes(prev => prev.filter(n => n.id !== note.id))}
                    className="p-1 text-red-500 hover:text-red-700 rounded transition-colors"
                    aria-label="Delete note"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add New Note */}
        <textarea
          placeholder="Add notes here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full h-11 p-2 border border-gray-300 rounded-md text-xs resize-none focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-gray-50"
        />
        <button 
          onClick={handleSaveNotes}
          disabled={!notes.trim()}
          className={`w-full mt-2 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
            notesSaved
              ? 'bg-green-600 text-white'
              : notes.trim()
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {notesSaved ? 'Note Saved!' : 'Save Note'}
        </button>
      </div>
    </div>
  </div>
  );
};
export default Workspace;