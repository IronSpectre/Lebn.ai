import React from 'react'
import Image from 'next/image'

interface Message {
  role: 'user' | 'ai'
  content: string
}

interface ChatPreviewProps {
  messages: Message[]
}

export default function ChatPreview({ messages }: ChatPreviewProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50/80 border-b border-slate-200/50 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1">
              <Image 
                src="/favicon.png" 
                alt="Lebn AI" 
                width={24} 
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-slate-900">Lebn Assistant</div>
              <div className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Online
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 min-h-[300px] max-h-[400px] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[80%] px-4 py-2 rounded-2xl text-sm
                  ${message.role === 'user' 
                    ? 'bg-brand text-white rounded-br-sm' 
                    : 'bg-slate-100 text-slate-900 rounded-bl-sm'
                  }
                `}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          <div className="flex justify-end">
            <div className="bg-brand text-white px-4 py-3 rounded-2xl rounded-br-sm">
              <div className="flex items-center gap-1">
                <span className="typing-dot w-2 h-2 bg-white rounded-full"></span>
                <span className="typing-dot w-2 h-2 bg-white rounded-full"></span>
                <span className="typing-dot w-2 h-2 bg-white rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}