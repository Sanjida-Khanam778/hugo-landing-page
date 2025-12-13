"use client";
import robot from "../../assets/images/robot.png";
import { useState } from "react";
import { X, ChevronDown, Send, Edit } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIAssistant() {
  const [currentChatId, setCurrentChatId] = useState(null);
  const [chats, setChats] = useState([
    { id: 1, title: "Career Resources", messages: [] },
    { id: 2, title: "Discover scholarships", messages: [] },
    { id: 3, title: "Find the perfect academic", messages: [] },
    { id: 4, title: "Career Resources", messages: [] },
    { id: 5, title: "Discover scholarships", messages: [] },
  ]);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [historyOpen, setHistoryOpen] = useState(true);

  const handleNewChat = () => {
    const newChatId = Math.max(...chats.map((c) => c.id), 0) + 1;
    const newChat = {
      id: newChatId,
      title: "New Chat",
      messages: [],
    };
    setChats([newChat, ...chats]);
    setCurrentChatId(newChatId);
    setMessages([]);
  };

  const handleSelectChat = (chatId) => {
    setCurrentChatId(chatId);
    const selectedChat = chats.find((c) => c.id === chatId);
    setMessages(selectedChat?.messages || []);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: Date.now(),
        text: input,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages([...messages, newMessage]);

      // Update the chat with new message
      setChats(
        chats.map((chat) =>
          chat.id === currentChatId
            ? { ...chat, messages: [...chat.messages, newMessage] }
            : chat
        )
      );

      setInput("");

      // Simulate AI response
      setTimeout(() => {
        const aiMessage = {
          id: Date.now() + 1,
          text: "I'm here to help you with career guidance, scholarships, and academic planning. How can I assist you today?",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setChats(
          chats.map((chat) =>
            chat.id === currentChatId
              ? { ...chat, messages: [...chat.messages, aiMessage] }
              : chat
          )
        );
      }, 500);
    }
  };

  const currentChat = chats.find((c) => c.id === currentChatId);

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-white shadow-xl w-full flex flex-col h-screen">
        {/* Header */}
        <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">AI Assistant</h1>
          <Link to={"/"}>
            {" "}
            <button className="hover:bg-blue-800 p-1 rounded transition-colors">
              <X size={24} />
            </button>
          </Link>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-80 bg-white text-primary font-medium flex flex-col">
            {/* New Chat Button */}
            <button
              onClick={handleNewChat}
              className="m-4 mb-8 flex text-[#374151] items-center gap-2 px-4 py-3 rounded-lg transition-colors"
            >
              <Edit size={20} />
              <span className="font-medium">New Chat</span>
            </button>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto px-4">
              <button
                onClick={() => setHistoryOpen(!historyOpen)}
                className="flex items-center gap-2 w-full mb-5 px-3 transition-colors text-[#374151]"
              >
                <span className=" font-medium">Chat History</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: historyOpen ? "rotate(0deg)" : "rotate(-90deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>

              {historyOpen && (
                <div className="space-y-2">
                  {chats.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => handleSelectChat(chat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg  transition-colors truncate ${
                        currentChatId === chat.id ? "bg-blue/10" : ""
                      }`}
                      title={chat.title}
                    >
                      {chat.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-base">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col max-w-7xl mx-auto w-full">
              {messages.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <img src={robot} alt="" />
                    <p className="text-3xl lg:text-4xl font-semibold text-gray-900 my-4">
                      Hi Hugo.
                    </p>
                    <p className="text-gray-600 text-xl">
                      What can I help with?
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`${
                          msg.sender === "user" ? "hidden" : ""
                        } w-12 h-12 flex text-white items-center justify-center bg-primary rounded-full font-medium text-lg`}
                      >
                        <span>AI</span>
                      </div>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.sender === "user"
                            ? "bg-blue text-white rounded-br-none"
                            : "bg-gray-200 text-gray-900 rounded-bl-none"
                        }`}
                      >
                        <p className="">{msg.text}</p>
                      </div>
                      <div
                        className={`${
                          msg.sender === "user" ? "" : "hidden"
                        } w-12 h-12 flex text-blue items-center justify-center border text-lg border-blue rounded-full font-semibold`}
                      >
                        <span>U</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-8">
              <div className="flex border mx-auto max-w-4xl">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-4 bg-white border border-gray-300 max-w-4xl rounded-l-lg  focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary hover:bg-blue-800 text-white p-3 px-5 -l rounded-r-lg transition-colors flex items-center justify-center"
                >
                  <Send size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
