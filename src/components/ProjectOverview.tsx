import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Edit3, Star, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ProjectOverview = () => {
  const [selectedOutfit, setSelectedOutfit] = useState(1);
  const [customerInfoExpanded, setCustomerInfoExpanded] = useState(false);
  const [consultationHistoryExpanded, setConsultationHistoryExpanded] = useState(false);
  const [editingPriceItem, setEditingPriceItem] = useState(null);
  const [priceBreakdown, setPriceBreakdown] = useState({
    fabric: 850,
    construction: 349,
    finishing: 100
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
  const total = priceBreakdown.fabric + priceBreakdown.construction + priceBreakdown.finishing;

  const handlePriceEdit = (item, value) => {
    setPriceBreakdown(prev => ({ ...prev, [item]: value }));
    setEditingPriceItem(null);
  };

  return (
    <div className="px-6 py-4 space-y-6 bg-gray-50 min-h-full max-w-6xl mx-auto">
      {/* Progress Tracker */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Progress</h2>
        
        <div className="relative">
          {/* Background progress line */}
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-200"></div>
          
          {/* Active progress line */}
          <div 
            className="absolute top-4 left-4 h-0.5 bg-blue-500 transition-all duration-500"
            style={{ 
              width: `${(progressSteps.filter(step => step.status === 'completed').length / (progressSteps.length - 1)) * 100}%` 
            }}
          ></div>
          
          <div className="relative flex justify-between">
            {progressSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Step circle */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium relative z-10 transition-colors ${
                  step.status === 'completed' 
                    ? 'bg-blue-500 text-white' 
                    : step.status === 'current'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-500 border-2 border-gray-200'
                }`}>
                  {step.status === 'completed' ? '✓' : index + 1}
                </div>
                
                {/* Step label and date */}
                <div className="mt-3 text-center">
                  <div className={`text-sm font-medium ${
                    step.status === 'completed' || step.status === 'current' 
                      ? 'text-gray-900' 
                      : 'text-gray-500'
                  }`}>
                    {step.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{step.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outfit Options - Enhanced with Visible Reviews */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Options Comparison</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {outfits.map((outfit) => (
            <div 
              key={outfit.id}
              className={`relative rounded-lg cursor-pointer transition-all duration-200 border ${
                selectedOutfit === outfit.id
                  ? 'bg-blue-50 border-blue-200 shadow-lg' 
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedOutfit(outfit.id)}
            >
              {/* Selection indicator */}
              {selectedOutfit === outfit.id && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full z-10"></div>
              )}
              
              {/* Image section */}
              <div className="relative">
                <div className="w-full rounded-t-lg overflow-hidden bg-gray-100" style={{ paddingBottom: '75%' }}>
                  <img
                    src={outfit.image}
                    alt={outfit.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute top-3 left-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium shadow-lg">
                  {outfit.id}
                </div>
                
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm ${
                    outfit.status === 'Approved' ? 'bg-green-100 text-green-700 border border-green-200' :
                    outfit.status === 'Pending' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                    'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {outfit.status}
                  </span>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-5 space-y-4">
                {/* Title and Price */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{outfit.title}</h3>
                  <div className="text-xl font-bold text-gray-900">{outfit.price}</div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < outfit.rating ? 'text-amber-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({outfit.rating}/5)</span>
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
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Price Breakdown</h2>
          <div className="space-y-3">
            {Object.entries(priceBreakdown).map(([item, price]) => (
              <div key={item} className="flex items-center justify-between py-2">
                <span className="text-gray-700 capitalize font-medium">{item}:</span>
                <div className="flex items-center space-x-3">
                  {editingPriceItem === item ? (
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => handlePriceEdit(item, parseInt(e.target.value) || 0)}
                      onBlur={() => setEditingPriceItem(null)}
                      onKeyPress={(e) => e.key === 'Enter' && setEditingPriceItem(null)}
                      className="w-20 px-3 py-1 border border-gray-300 rounded-md text-right focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      autoFocus
                    />
                  ) : (
                    <span className="font-semibold text-gray-900">{price}€</span>
                  )}
                  <button
                    onClick={() => setEditingPriceItem(item)}
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-3 mt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-xl font-bold text-gray-900">{total}€</span>
            </div>
          </div>
        </div>
      )}

      {/* Customer Info */}
      <div className="bg-white rounded-lg border border-gray-200">
        <button
          onClick={() => setCustomerInfoExpanded(!customerInfoExpanded)}
          className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 rounded-lg transition-colors"
        >
          <h2 className="text-lg font-medium text-gray-900">Customer Info</h2>
          {customerInfoExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        {customerInfoExpanded && (
          <div className="px-6 pb-4 border-t border-gray-200">
            {/* Customer Profile */}
            <div className="flex items-start space-x-4 mb-4 mt-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" 
                    alt="Marcus Hill"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Marcus Hill</h3>
                  <p className="text-xs text-gray-600">Order ID: #2275</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-3 h-3 text-amber-400 fill-current" />
                    <span className="text-xs text-gray-600 ml-1">4.8/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Details</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-700">marcus.hill@email.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-700">New York, NY</span>
                  </div>
                </div>

                {/* Customer Photos */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Reference Photos</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded-md overflow-hidden bg-gray-100">
                      <img 
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" 
                        alt="Reference 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden bg-gray-100">
                      <img 
                        src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" 
                        alt="Reference 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden bg-gray-100">
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
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Measurements</h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-md p-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Chest</div>
                      <div className="text-base font-semibold text-gray-900 mt-0.5">40"</div>
                    </div>
                    <div className="bg-gray-50 rounded-md p-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Waist</div>
                      <div className="text-base font-semibold text-gray-900 mt-0.5">34"</div>
                    </div>
                    <div className="bg-gray-50 rounded-md p-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Shoulders</div>
                      <div className="text-base font-semibold text-gray-900 mt-0.5">18"</div>
                    </div>
                    <div className="bg-gray-50 rounded-md p-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Height</div>
                      <div className="text-base font-semibold text-gray-900 mt-0.5">5'10"</div>
                    </div>
                  </div>

                  {/* Additional Measurements */}
                  <div className="pt-2 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Inseam:</span>
                        <span className="font-medium text-gray-900">32"</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Sleeve:</span>
                        <span className="font-medium text-gray-900">25"</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Neck:</span>
                        <span className="font-medium text-gray-900">16"</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Hip:</span>
                        <span className="font-medium text-gray-900">38"</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Style Preferences</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">Prefers modern, tailored fits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">Business professional style</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">Navy and charcoal colors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Consultation History */}
      <div className="bg-white rounded-lg border border-gray-200">
        <button
          onClick={() => setConsultationHistoryExpanded(!consultationHistoryExpanded)}
          className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 rounded-lg transition-colors"
        >
          <h2 className="text-lg font-medium text-gray-900">History</h2>
          {consultationHistoryExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        {consultationHistoryExpanded && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">Initial Consultation</h4>
                    <span className="text-sm text-gray-500">Jan 15</span>
                  </div>
                  <p className="text-sm text-gray-700">Discussed business attire preferences.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">Design Review</h4>
                    <span className="text-sm text-gray-500">Jan 18</span>
                  </div>
                  <p className="text-sm text-gray-700">Presented three options, preferred navy suit.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">Feedback Session</h4>
                    <span className="text-sm text-gray-500">Jan 22</span>
                  </div>
                  <p className="text-sm text-gray-700">Requested fit adjustments, discussed timeline.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;