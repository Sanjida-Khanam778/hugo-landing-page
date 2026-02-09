"use client";
import robot from "../../assets/images/robot.png";
import { useState, useRef, useEffect } from "react";
import { X, ChevronDown, Send, Edit, Mic, AudioLines } from "lucide-react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import robotLottie from "../../assets/lottie/robot.json";
import "regenerator-runtime/runtime";
import { useChatWithAIMutation, useVoiceChatAIMutation } from "../../Api/aiApi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
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
  const [isListening, setIsListening] = useState(false);
  const [chatWithAI, { isLoading: isChatLoading }] = useChatWithAIMutation();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const initialInputRef = useRef(""); // To store input before starting speech
  useEffect(() => {
    if (transcript) {
      console.log("🎙 Live Transcript:", transcript);
      const combinedInput = (initialInputRef.current + " " + transcript).trimStart();
      setInput(combinedInput);
    }
  }, [transcript]);

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

  const handleSendMessage = async () => {
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

      const userInput = input;
      setInput("");

      try {
        const response = await chatWithAI({ message: userInput }).unwrap();

        const aiMessage = {
          id: Date.now() + 1,
          text: response.response || "Sorry, I couldn't understand that.",
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
      } catch (error) {
        console.error("Failed to stream chat:", error);
        const errorMessage = {
          id: Date.now() + 1,
          text: "Sorry, something went wrong. Please try again.",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    }
  };

  const handleVoiceInput = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Browser does not support Speech Recognition");
      return;
    }

    if (listening) {
      SpeechRecognition.stopListening();
      console.log("✅ Recording Stopped. Final Transcript:", transcript);
    } else {
      initialInputRef.current = input;
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-US",
      });
      console.log("🎤 Listening started...");
    }
  };

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
                      className={`w-full text-left px-3 py-2 rounded-lg  transition-colors truncate ${currentChatId === chat.id ? "bg-blue/10" : ""
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
                  <div className="text-center -space-y-24">
                    {/* <img src={robot} alt="" /> */}
                    <div className="">
                      <Lottie animationData={robotLottie}></Lottie>
                    </div>
                    <div>
                      {" "}
                      <p className="text-3xl lg:text-4xl font-semibold text-gray-900 my-4">
                        Hi Hugo.
                      </p>
                      <p className="text-gray-600 text-xl">
                        What can I help with?
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                      <div
                        className={`${msg.sender === "user" ? "hidden" : ""
                          } w-12 h-12 flex text-white items-center justify-center bg-primary rounded-full font-medium text-lg`}
                      >
                        <span>AI</span>
                      </div>
                      <div
                        className={`max-w-xs lg:max-w-md xl:max-w-2xl px-4 py-2 rounded-lg ${msg.sender === "user"
                          ? "bg-blue text-white rounded-br-none"
                          : "bg-gray-200 text-gray-900 rounded-bl-none"
                          }`}
                      >
                        {msg.sender === "ai" ? (
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                              ul: ({ node, ...props }) => <ul className="list-disc ml-4 mb-2" {...props} />,
                              ol: ({ node, ...props }) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                              li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                              h1: ({ node, ...props }) => <h1 className="text-xl font-bold mb-2 mt-4" {...props} />,
                              h2: ({ node, ...props }) => <h2 className="text-lg font-bold mb-2 mt-3" {...props} />,
                              h3: ({ node, ...props }) => <h3 className="text-md font-bold mb-2 mt-2" {...props} />,
                              strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                              em: ({ node, ...props }) => <em className="italic" {...props} />,
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                        ) : (
                          <p className="">{msg.text}</p>
                        )}
                      </div>
                      <div
                        className={`${msg.sender === "user" ? "" : "hidden"
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
              <div className="flex border mx-auto max-w-4xl items-center bg-white rounded-lg border-gray-300">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-4 bg-transparent outline-none focus:outline-none transition-colors"
                />

                {/* Voice Input Button */}
                <button
                  onClick={handleVoiceInput}
                  className={`p-2 mr-2 rounded-full transition-all duration-200 flex items-center justify-center ${listening
                    ? "text-primary"
                    : "text-grayText hover:text-primary"
                    }`}
                  title="Speak"
                >
                  {listening ? (
                    <AudioLines size={20} className="animate-pulse" />
                  ) : (
                    <Mic size={20} />
                  )}
                </button>

                <button
                  onClick={handleSendMessage}
                  disabled={isChatLoading}
                  className={`bg-primary hover:bg-blue-800 text-white p-3 px-5 rounded-r-lg transition-colors flex items-center justify-center self-stretch ${isChatLoading ? "opacity-50 cursor-not-allowed" : ""}`}
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
