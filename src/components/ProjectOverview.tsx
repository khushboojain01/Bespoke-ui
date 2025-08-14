import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Edit3, Star, User, Mail, Phone, MapPin, MessageSquare, Image, DollarSign } from 'lucide-react';

const ProjectOverview = () => {
  const [selectedOutfit, setSelectedOutfit] = useState(1);
  const [activeSection, setActiveSection] = useState('styles');
  const [editingPriceItem, setEditingPriceItem] = useState(null);
  
  // Dynamic price breakdowns for each outfit
  const [priceBreakdowns, setPriceBreakdowns] = useState({
    1: { fabric: 850, construction: 349, finishing: 100 },
    2: { fabric: 1200, construction: 299, finishing: 100 },
    3: { fabric: 650, construction: 249, finishing: 100 }
  });

  const progressSteps = [
    { id: 'consultation', label: 'Consultation', date: '01/15', status: 'completed' },
    { id: 'design', label: 'Design', date: '01/18', status: 'completed' },
    { id: 'review', label: 'Review', date: '01/22', status: 'current' },
    { id: 'iteration', label: 'Iteration', date: '01/25', status: 'upcoming' },
    { id: 'confirmation', label: 'Confirmation', date: '01/28', status: 'upcoming' }
  ];

  const outfits = [
    {
      id: 1,
      title: 'Navy Business Suit',
      price: '1,299€',
      status: 'Approved',
      rating: 5,
      comment: 'Perfect fit and great quality! The fabric feels premium and the tailoring is exceptional. Really impressed with the attention to detail.',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      selected: true,
    },
    {
      id: 2,
      title: 'Charcoal Evening',
      price: '1,599€',
      status: 'Pending',
      rating: 4,
      comment: 'Elegant and stylish design with sophisticated details. The price point is higher than expected, but the quality justifies it.',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      selected: false,
    },
    {
      id: 3,
      title: 'Light Grey Weekend',
      price: '999€',
      status: 'Rejected',
      rating: 3,
      comment: 'Casual and comfortable for weekend wear. The style is well-executed but doesn\'t match my personal aesthetic preferences.',
      image: 'https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      selected: false,
    }
  ];

  const selectedOutfitData = outfits.find(outfit => outfit.id === selectedOutfit);
  const currentPriceBreakdown = priceBreakdowns[selectedOutfit] || priceBreakdowns[1];
  const total = currentPriceBreakdown.fabric + currentPriceBreakdown.construction + currentPriceBreakdown.finishing;

  const handlePriceEdit = (item, value) => {
    setPriceBreakdowns(prev => ({
      ...prev,
      [selectedOutfit]: {
        ...prev[selectedOutfit],
        [item]: value
      }
    }));
    setEditingPriceItem(null);
  };

  const sideNavItems = [
    { id: 'styles', label: 'Styles', icon: Image },
    { id: 'customer', label: 'Customer Details', icon: User },
    { id: 'history', label: 'Consultation History', icon: MessageSquare }
  ];

  const renderStylesSection = () => (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Outfit Options */}
      <div className="mb-8">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Style Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {outfits.map((outfit) => (
            <div 
              key={outfit.id}
              className={`relative rounded-lg cursor-pointer transition-all duration-200 border ${
                selectedOutfit === outfit.id
                  ? 'bg-gray-50 shadow-md' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedOutfit(outfit.id)}
            >
              {/* Selection indicator */}
              {selectedOutfit === outfit.id && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 rounded-full z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              )}
              
              {/* Image section */}
              <div className="relative">
                <div className="w-full h-64 sm:h-72 rounded-t-lg overflow-hidden bg-gray-100">
                  <img
                    src={outfit.image}
                    alt={outfit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute top-3 left-3 w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {outfit.id}
                </div>
                
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    outfit.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    outfit.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {outfit.status}
                  </span>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Title and Price */}
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2 leading-tight">{outfit.title}</h3>
                  <div className="text-xl sm:text-2xl font-semibold text-gray-900">{outfit.price}</div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < outfit.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">({outfit.rating}/5)</span>
                </div>
                
                {/* Review Comment */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">{outfit.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Breakdown */}
      {selectedOutfitData && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
          <div className="flex items-center space-x-2 mb-8">
            <DollarSign className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg sm:text-xl font-medium text-gray-900">Price Breakdown - {selectedOutfitData.title}</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {Object.entries(currentPriceBreakdown).map(([item, price]) => (
              <div key={item} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <span className="text-base text-gray-700 capitalize font-medium">{item}:</span>
                <div className="flex items-center space-x-3">
                  {editingPriceItem === item ? (
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => handlePriceEdit(item, parseInt(e.target.value) || 0)}
                      onBlur={() => setEditingPriceItem(null)}
                      onKeyPress={(e) => e.key === 'Enter' && setEditingPriceItem(null)}
                      className="w-24 px-3 py-2 border border-gray-300 rounded text-right text-base focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                      autoFocus
                    />
                  ) : (
                    <span className="font-medium text-gray-900 text-base min-w-[80px] text-right">{price}€</span>
                  )}
                  <button
                    onClick={() => setEditingPriceItem(item)}
                    className="p-1 text-gray-400 hover:text-gray-600 rounded transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-300 pt-4 mt-6 flex items-center justify-between bg-gray-50 rounded p-4">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-semibold text-gray-900">{total}€</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCustomerSection = () => (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Customer Profile */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
        <div className="flex items-start space-x-6 mb-8">
          <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" 
              alt="Marcus Hill"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">Marcus Hill</h3>
            <p className="text-sm text-gray-600 mb-2">Order ID: #2275</p>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-2 font-medium">4.8/5 rating</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-medium text-gray-900 mb-6">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-700">marcus.hill@email.com</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-700">New York, NY</span>
              </div>
            </div>

            {/* Customer Photos */}
            <div className="mt-8">
              <h4 className="text-xl font-medium text-gray-900 mb-4">Reference Photos</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" 
                    alt="Reference 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" 
                    alt="Reference 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" 
                    alt="Reference 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Measurements */}
          <div>
            <h4 className="text-xl font-medium text-gray-900 mb-6">Measurements</h4>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">Chest</div>
                  <div className="text-xl font-semibold text-gray-900 mt-1">40"</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">Waist</div>
                  <div className="text-xl font-semibold text-gray-900 mt-1">34"</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">Shoulders</div>
                  <div className="text-xl font-semibold text-gray-900 mt-1">18"</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">Height</div>
                  <div className="text-xl font-semibold text-gray-900 mt-1">5'10"</div>
                </div>
              </div>

              {/* Additional Measurements */}
              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between text-sm py-2">
                    <span className="text-gray-600 font-medium">Inseam:</span>
                    <span className="font-medium text-gray-900">32"</span>
                  </div>
                  <div className="flex justify-between text-sm py-2">
                    <span className="text-gray-600 font-medium">Sleeve:</span>
                    <span className="font-medium text-gray-900">25"</span>
                  </div>
                  <div className="flex justify-between text-sm py-2">
                    <span className="text-gray-600 font-medium">Neck:</span>
                    <span className="font-medium text-gray-900">16"</span>
                  </div>
                  <div className="flex justify-between text-sm py-2">
                    <span className="text-gray-600 font-medium">Hip:</span>
                    <span className="font-medium text-gray-900">38"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="mt-8">
              <h4 className="text-xl font-medium text-gray-900 mb-4">Style Preferences</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 font-medium">Prefers modern, tailored fits</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 font-medium">Business professional style</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 font-medium">Navy and charcoal colors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHistorySection = () => (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* History Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
        <h3 className="text-xl font-medium text-gray-900 mb-8">Consultation Timeline</h3>
        <div className="space-y-6">
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-medium text-gray-900">Feedback Session</h4>
                <span className="text-sm text-gray-600 font-medium bg-white px-3 py-1 rounded-full border border-gray-200">Jan 22</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">Customer requested minor fit adjustments to jacket shoulders and discussed project timeline and delivery expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'styles':
        return renderStylesSection();
      case 'customer':
        return renderCustomerSection();
      case 'history':
        return renderHistorySection();
      default:
        return renderStylesSection();
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Fixed Left Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-20 overflow-y-auto">
        {/* Navigation Menu */}
        <nav className="pt-[253px]">
          <ul className="space-y-0">
            {sideNavItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  {/* Blue border indicator for active item */}
                  {isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                  )}
                  
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-6 py-4 text-base font-medium border-b border-gray-100 transition-all duration-200 flex items-center space-x-3 ${
                      isActive
                        ? 'bg-blue-50 text-gray-900 border-blue-100'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// Export the progress bar as a separate component that can be used in App.tsx
export const ProgressBar = ({ progressSteps }) => (
  <div className="bg-white border-b border-gray-200 p-4 sm:p-6">
    <div className="relative">
      {/* Background progress line */}
      <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-200 rounded-full"></div>
      
      {/* Active progress line */}
      <div 
        className="absolute top-4 left-4 h-0.5 bg-blue-600 rounded-full transition-all duration-300"
        style={{ 
          width: `${(progressSteps.filter(step => step.status === 'completed').length / (progressSteps.length - 1)) * 100}%` 
        }}
      ></div>
      
      <div className="relative flex justify-between">
        {progressSteps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center flex-1 min-w-0">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium relative z-10 transition-all duration-200 ${
              step.status === 'completed' 
                ? 'bg-blue-600 text-white' 
                : step.status === 'current'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-500 border border-gray-300'
            }`}>
              {step.status === 'completed' ? '✓' : index + 1}
            </div>
            
            <div className="mt-2 sm:mt-3 text-center">
              <div className={`text-xs sm:text-sm font-medium ${
                step.status === 'completed' || step.status === 'current' 
                  ? 'text-gray-900' 
                  : 'text-gray-500'
              } leading-tight px-1`}>
                {step.label}
              </div>
              <div className="text-xs text-gray-500 mt-1">{step.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectOverview;