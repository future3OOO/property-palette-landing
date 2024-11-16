import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

const LiveChat = ({ isChatOpen, setIsChatOpen }) => {
  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? 'w-80 h-96' : 'w-auto h-auto'}`}>
      {isChatOpen ? (
        <div className="bg-white dark:bg-deep-teal rounded-lg shadow-lg p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Live Chat</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(false)}>
              Close
            </Button>
          </div>
          <div className="flex-grow bg-gray-100 dark:bg-charcoal-gray rounded p-2 mb-4 overflow-y-auto">
            {/* Chat messages would go here */}
            <p className="text-sm">Welcome to our live chat. How can we help you today?</p>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow mr-2 p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-charcoal-gray"
            />
            <Button>Send</Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsChatOpen(true)}
          className="rounded-full w-12 h-12 flex items-center justify-center bg-deep-teal hover:bg-light-teal text-white"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  );
};

export default LiveChat;