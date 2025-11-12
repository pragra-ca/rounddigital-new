import React, { useState } from 'react';

const FormHandle = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted message:', message);
    // You can integrate email service / API here
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl mx-auto px-4 mt-[37px] mb-[305px]"
    >
      {/* Textarea */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask us what you want to know…"
        className="w-full h-32 border border-black rounded-xl px-4 py-3 resize-none text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
        required
      />

      {/* Info + Button row */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="text-xs text-gray-500">
          We will answer your questions via email within 48 hours.
        </p>
        <button
          type="submit"
          className="bg-red-500 text-black px-[52px] py-[14px] rounded-full hover:bg-red-600 transition-all text-sm font-medium"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default FormHandle;
