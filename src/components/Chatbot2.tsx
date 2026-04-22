"use client";

import { useState, useRef, useEffect } from "react";
import { BotMessageSquare, X } from "lucide-react"; // chat + close icons

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot2() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // toggle chat section
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, newMessage] }),
    });

    const data = await res.json();
    if (data.reply) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="relative">
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          title="Open chatbot"
          className="fixed bottom-6 right-6 z-[100] border bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <BotMessageSquare
            size={24}
            className="text-red-400 hover:text-white  h-7 w-7"
          />
        </button>
      )}

      {/* Chat Section */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[100] w-80 h-[400px] bg-gray-50 text-gray-800 shadow-xl rounded-2xl flex flex-col overflow-hidden border">
          {/* Header */}
          <div className=" flex items-center justify-between p-3 bg-gray-800 text-white">
            <h2 className="font-semibold ">Chatbot 🤖</h2>
            <button onClick={() => setIsOpen(false)} title="Close chatbot">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`my-2 p-2 rounded-lg max-w-[80%] ${
                  m.role === "user"
                    ? "bg-gray-800 text-white ml-auto"
                    : "bg-gray-200 text-black mr-auto"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="my-2 p-2 rounded-lg max-w-[80%] bg-black text-white mr-auto animate-pulse">
                thinking...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex p-2 border-t bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border p-2 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
