import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center font-sans">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-[#1e73be] border-r-[#1e73be]/30 rounded-full animate-spin" />
      </div>
    </div>
  )
}

export default Loading

