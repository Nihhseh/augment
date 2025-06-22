import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LogOut, Mail, Calendar, User, Building, MessageSquare, Trash2, Eye } from 'lucide-react';
import Logo from '../components/Logo';
import AnimatedBackground from '../components/AnimatedBackground';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { signOut, getCurrentUser, getSession } from '../lib/supabase';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  timestamp: string;
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthAndLoadData = async () => {
      try {
        // Check Supabase session
        const { session } = await getSession();
        
        if (!session) {
          // Fallback to localStorage check for backward compatibility
          const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
          if (!isAuthenticated) {
            navigate('/admin-login');
            return;
          }
        } else {
          // Get user email from Supabase
          const { user } = await getCurrentUser();
          if (user?.email) {
            setUserEmail(user.email);
          }
        }

        // Load messages from localStorage
        const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        setMessages(savedMessages.sort((a: ContactMessage, b: ContactMessage) => 
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        ));
      } catch (error) {
        console.error('Error checking authentication:', error);
        navigate('/admin-login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndLoadData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      // Sign out from Supabase
      await signOut();
      // Clear localStorage
      localStorage.removeItem('isAdminAuthenticated');
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      // Fallback: clear localStorage and navigate
      localStorage.removeItem('isAdminAuthenticated');
      navigate('/');
    }
  };

  const deleteMessage = (id: number) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <AnimatedBackground />
        <div className="relative z-10">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="border-b border-white/10 p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo />
              <div>
                <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-gray-400 text-sm">
                  {userEmail ? `Welcome, ${userEmail}` : 'Manage contact messages'}
                </p>
              </div>
            </div>
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </motion.button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlassmorphicCard>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{messages.length}</p>
                  <p className="text-gray-400 text-sm">Total Messages</p>
                </div>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {messages.filter(msg => {
                      const today = new Date();
                      const msgDate = new Date(msg.timestamp);
                      return msgDate.toDateString() === today.toDateString();
                    }).length}
                  </p>
                  <p className="text-gray-400 text-sm">Today</p>
                </div>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {new Set(messages.filter(msg => msg.company).map(msg => msg.company)).size}
                  </p>
                  <p className="text-gray-400 text-sm">Companies</p>
                </div>
              </div>
            </GlassmorphicCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Messages List */}
            <GlassmorphicCard className="h-fit">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Contact Messages</h2>
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                  {messages.length} messages
                </span>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No messages yet</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <motion.div
                      key={message.id}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedMessage?.id === message.id
                          ? 'bg-purple-500/20 border-purple-500'
                          : 'bg-white/5 border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-white font-semibold">{message.name}</span>
                            {message.company && (
                              <>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-400 text-sm">{message.company}</span>
                              </>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm truncate">{message.message}</p>
                          <p className="text-gray-500 text-xs mt-2">{formatDate(message.timestamp)}</p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMessage(message);
                            }}
                            className="p-1 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteMessage(message.id);
                            }}
                            className="p-1 text-gray-400 hover:text-red-400 transition-colors duration-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </GlassmorphicCard>

            {/* Message Detail */}
            <GlassmorphicCard className="h-fit">
              <h2 className="text-xl font-bold text-white mb-6">Message Details</h2>
              
              {selectedMessage ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <div className="p-3 bg-white/5 rounded-lg text-white">{selectedMessage.name}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <div className="p-3 bg-white/5 rounded-lg text-white break-all">{selectedMessage.email}</div>
                    </div>
                  </div>
                  
                  {selectedMessage.company && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <div className="p-3 bg-white/5 rounded-lg text-white">{selectedMessage.company}</div>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <div className="p-4 bg-white/5 rounded-lg text-white leading-relaxed min-h-32">
                      {selectedMessage.message}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Received</label>
                    <div className="p-3 bg-white/5 rounded-lg text-white">{formatDate(selectedMessage.timestamp)}</div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      Reply via Email
                    </a>
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Select a message to view details</p>
                  <p className="text-sm">Click on any message from the list to see the full content</p>
                </div>
              )}
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;