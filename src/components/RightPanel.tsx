import React, { useState } from 'react';
import { User, Save, Edit3, Layout, Palette, Heart, MessageSquare, Ruler, ChevronDown, ChevronRight, FileText, Trash2 } from 'lucide-react';

const RightPanel = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [measurementsExpanded, setMeasurementsExpanded] = useState(false);
  const [notes, setNotes] = useState('');
  const [notesSaved, setNotesSaved] = useState(false);
  const [savedNotes, setSavedNotes] = useState([]);
  const [notesExpanded, setNotesExpanded] = useState(false);
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
    <div className="
      w-full xl:w-80 
      bg-white 
      xl:border-l border-t xl:border-t-0 border-gray-200 
      xl:overflow-y-auto
      xl:flex-shrink-0
    ">
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
            <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
            Customer Profile
          </h2>
          <button
            onClick={() => setIsEditingProfile(prev => !prev)}
            className={`flex items-center space-x-1 px-2 py-1 text-xs sm:text-sm rounded-md transition-colors ${
              isEditingProfile
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            {isEditingProfile ? (
              <>
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">Save</span>
              </>
            ) : (
              <>
                <Edit3 className="w-4 h-4" />
                <span className="hidden sm:inline">Edit</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile: 2-Column Grid Layout, Desktop: Normal Stack */}
      <div className="xl:space-y-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 xl:gap-0">
        
        {/* Styleboard */}
        <div className="p-3 sm:p-4 border-b border-gray-100 xl:border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <Layout className="w-4 h-4 mr-2 text-blue-600" />
              Styleboard
            </h3>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors">View</button>
          </div>
        </div>

        {/* Basic Information */}
        <div className="p-3 sm:p-4 border-b border-gray-100 xl:border-b">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <Palette className="w-4 h-4 mr-2 text-blue-600" />
            Basic Information
          </h3>
          
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

          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-2">Color Palette</h4>
            <div className="flex space-x-2 sm:space-x-3">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: '#1e293b' }}></div>
                <span className="text-xs text-gray-600 mt-1">Navy</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: '#6b7280' }}></div>
                <span className="text-xs text-gray-600 mt-1">Grey</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: '#9ca3af' }}></div>
                <span className="text-xs text-gray-600 mt-1">Light Grey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="p-3 sm:p-4 border-b border-gray-100 xl:border-b">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <Heart className="w-4 h-4 mr-2 text-blue-600" />
            Preferences
          </h3>

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
        <div className="p-3 sm:p-4 border-b border-gray-100 xl:border-b">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
              Customer Review
            </h3>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors">View All</button>
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

        {/* Body Type */}
        <div className="p-3 sm:p-4 border-b border-gray-100 xl:border-b">
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
        <div className="p-3 sm:p-4">
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
                <span className="hidden sm:inline">View Notes ({savedNotes.length})</span>
                <span className="sm:hidden">({savedNotes.length})</span>
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

export default RightPanel;