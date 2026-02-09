import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, Paperclip, Smile } from "lucide-react";
import { useGetConversationsQuery } from "../../../Api/chatApi";

export default function Chat() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [conversations, setConversations] = useState([]);
  const { data: conversationList, isLoading } = useGetConversationsQuery();
  console.log(conversationList)
  useEffect(() => {
    if (conversationList) {
      const formattedConversations = conversationList?.map((conv) => {
        const uniName = conv.other_user?.univ_name || "Unknown University";
        const shortName = conv.other_user?.short_name;

        let avatarText = "U";
        if (shortName && shortName !== "N/A") {
          avatarText = shortName;
        } else {
          avatarText = uniName.substring(0, 2).toUpperCase();
        }

        return {
          id: conv.id,
          name: uniName,
          message: conv.last_message || "",
          time: conv.last_message_time ? new Date(conv.last_message_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "",
          hasBlueIndicator: false,
          avatar: avatarText,
          messages: [], // Initialize with empty messages for now
        };
      });
      setConversations(formattedConversations);
    }
  }, [conversationList]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedConversation, conversations]);

  // Generate auto-response
  const generateAutoResponse = (userMessage) => {
    const responses = [
      "Thank you for that information! I'll look into it and get back to you.",
      "That's a great question. Let me find the details for you.",
      "I appreciate you reaching out. Can you provide a bit more context?",
      "Absolutely! I can help you with that. What specific details do you need?",
      "Thanks for your message. I'll review this and respond shortly.",
      "That sounds good. When would be a good time to discuss further?",
      "I understand your concern. Let me gather the information and send it over.",
      "Great! I'll make sure to get you the answers you need.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Format current time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedConversation) {
      setConversations((prevConversations) =>
        prevConversations.map((conv) => {
          if (conv.id === selectedConversation) {
            const newMessages = [...conv.messages];
            const maxId = Math.max(...newMessages.map((m) => m.id), 0);

            // Add user message
            newMessages.push({
              id: maxId + 1,
              sender: "me",
              text: messageInput,
              time: getCurrentTime(),
            });

            // Add auto-response after a short delay
            setTimeout(() => {
              setConversations((prevConv) =>
                prevConv.map((c) => {
                  if (c.id === selectedConversation) {
                    const updatedMessages = [...c.messages];
                    const latestId = Math.max(
                      ...updatedMessages.map((m) => m.id),
                      0
                    );
                    updatedMessages.push({
                      id: latestId + 1,
                      sender: "them",
                      text: generateAutoResponse(messageInput),
                      time: getCurrentTime(),
                    });
                    return { ...c, messages: updatedMessages };
                  }
                  return c;
                })
              );
            }, 800);

            // Update preview message
            return {
              ...conv,
              messages: newMessages,
              message:
                messageInput.length > 40
                  ? messageInput.substring(0, 40) + "..."
                  : messageInput,
              time: "now",
            };
          }
          return conv;
        })
      );

      setMessageInput("");
    }
  };

  return (
    <div className=" bg-base p-6">
      {/* Left Sidebar - Conversation List */}
      <h2 className="text-xl font-bold mb-4">Chat Management</h2>
      <div className="flex h-[90vh] bg-white">
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 flex-1 overflow-y-auto">
            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search conversations"
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Conversation List */}
            <div className="space-y-1">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv.id)}
                  className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 ${selectedConversation === conv.id ? "bg-blue-50" : ""
                    }`}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 bg-sky rounded-full flex items-center justify-center text-blue-600 text-sm font-medium">
                      {conv.avatar}
                    </div>
                    {/* {conv.hasBlueIndicator && (
                      <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-blue rounded-full"></div>
                    )} */}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h3 className="font-semibold text-sm truncate">
                        {conv.name}
                      </h3>
                      <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                        {conv.time}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 truncate">
                      {conv.message}
                    </p>
                    {conv.subtext && (
                      <p className="text-xs text-green-600 mt-0.5">
                        {conv.subtext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side - Chat or Empty State */}
        <div className="flex-1 flex flex-col">
          {!selectedConversation ? (
            // Empty State
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center max-w-sm px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DBEAFE] text-blue rounded-full mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Select a conversation
                </h3>
                <p className="text-gray-500 text-sm">
                  Choose a conversation from the list to view messages
                  <br />
                  and respond to student inquiries
                </p>
              </div>
            </div>
          ) : (
            // Chat View
            <>
              {/* Chat Header */}
              <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky rounded-full flex items-center justify-center text-blue-600 text-sm font-medium">
                    {
                      conversations.find((c) => c.id === selectedConversation)
                        ?.avatar
                    }
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {
                        conversations.find((c) => c.id === selectedConversation)
                          ?.name
                      }
                    </h3>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                <div className="space-y-4 max-w-3xl mx-auto">
                  {conversations
                    .find((c) => c.id === selectedConversation)
                    ?.messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"
                          }`}
                      >
                        <div
                          className={`flex gap-2 max-w-md ${msg.sender === "me"
                            ? "flex-row-reverse"
                            : "flex-row"
                            }`}
                        >
                          {msg.sender === "them" && (
                            <div className="w-8 h-8 bg-sky rounded-full flex items-center justify-center text-blue-600 text-xs font-medium flex-shrink-0">
                              {
                                conversations.find(
                                  (c) => c.id === selectedConversation
                                )?.avatar
                              }
                            </div>
                          )}
                          <div>
                            <div
                              className={`px-4 py-2 rounded-2xl ${msg.sender === "me"
                                ? "bg-blue text-white"
                                : "bg-white text-gray-800"
                                }`}
                            >
                              <p className="text-sm">{msg.text}</p>
                            </div>
                            <p
                              className={`text-xs text-gray-500 mt-1 ${msg.sender === "me" ? "text-right" : "text-left"
                                }`}
                            >
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Message Input */}
              <div className="bg-white border-t border-gray-200 p-4">
                <div className="max-w-3xl mx-auto flex items-center gap-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-blue text-white rounded-full hover:bg-blue-700"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}