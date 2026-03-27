"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { marked } from "marked";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Xin chào! Tôi có thể giúp gì cho bạn hôm nay?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Xóa toàn bộ lịch sử và hiển thị lại lời chào
    setMessages([{ role: "assistant", content: "Xin chào! Tôi có thể giúp gì cho bạn hôm nay?" }]);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessages = [...messages, { role: "user", content: inputMessage } as Message];
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      const apiMessages = newMessages.map(m => ({ role: m.role, content: m.content }));
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessages([...newMessages, { role: "assistant", content: data.reply }]);
      } else {
        setMessages([...newMessages, { role: "assistant", content: "**Lỗi:** Không thể kết nối đến máy chủ." }]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "**Lỗi:** Đã xảy ra sự cố." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-surface-container/60 backdrop-blur-3xl border border-outline-variant/30 shadow-2xl rounded-2xl w-80 sm:w-96 md:w-[400px] h-[550px] mb-4 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-highest/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">robot_2</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface text-sm">Trợ lý IT Consulting</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-on-surface-variant">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleRefresh} 
                  className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-on-surface-variant flex items-center justify-center"
                >
                  <span className={`material-symbols-outlined text-sm ${isRefreshing ? "animate-spin text-primary" : ""}`}>
                    refresh
                  </span>
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-on-surface-variant flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-outline-variant/30 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.role === "user" 
                        ? "bg-primary text-on-primary rounded-tr-sm" 
                        : "bg-surface-container-highest text-on-surface border border-outline-variant/20 rounded-tl-sm"
                    }`}
                  >
                    {msg.role === "user" ? (
                      msg.content
                    ) : (
                      <div 
                        className="chat-markdown text-sm"
                        dangerouslySetInnerHTML={{ __html: marked.parse(msg.content, { async: false }) as string }} 
                      />
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-surface-container-highest border border-outline-variant/20 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                    <div className="flex gap-1 items-center h-5">
                      <span className="text-xs text-on-surface-variant mr-1">Đang nhập</span>
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1 h-1 bg-primary rounded-full" />
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1 h-1 bg-primary rounded-full" />
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1 h-1 bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low/50 backdrop-blur-md">
              <div className="flex gap-2 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Nhập tin nhắn..."
                  disabled={isLoading}
                  className="flex-1 bg-surface-container focus:bg-surface-container-high border border-outline-variant/30 focus:border-primary/50 text-sm rounded-full px-5 py-3 outline-none transition-all placeholder:text-on-surface-variant text-on-surface disabled:opacity-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-on-primary w-11 h-11 rounded-full flex justify-center items-center transition-all flex-shrink-0"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_0_30px_rgba(230,213,188,0.3)] flex justify-center items-center cursor-pointer"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
        </motion.button>
      )}
    </div>
  );
}
