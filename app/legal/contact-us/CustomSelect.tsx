"use client";

import { useEffect, useRef, useState } from "react";

interface CustomSelectProps {
  label: string;
  options: string[];
}

export default function CustomSelect({ label, options }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="space-y-1.5 sm:space-y-2" ref={dropdownRef}>
      <label className="block text-xs sm:text-sm font-medium text-white/80">
        {label}
      </label>
      <div className="relative">
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 px-3 sm:px-4 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base
          outline-none transition-all duration-300
          focus:border-[#d36efa] focus:bg-black/60 focus:ring-2 focus:ring-[#d36efa]/20
          hover:border-white/20
          text-left
          flex items-center justify-between"
        >
          <span className={selectedOption ? "text-white/90" : "text-white/30"}>
            {selectedOption || "Select a subject"}
          </span>
          <svg 
            className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 rounded-xl sm:rounded-2xl border border-white/20 bg-gradient-to-b from-[#1a1a2e]/95 via-[#16162a]/95 to-[#1a1a2e]/95 backdrop-blur-3xl shadow-2xl shadow-black/50 overflow-hidden">
            <div className="max-h-60 overflow-y-auto custom-dropdown-scroll bg-black/30">
              {options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-200
                    ${selectedOption === option 
                      ? 'bg-[#d36efa]/50 text-white font-medium' 
                      : 'text-white hover:bg-white/20'
                    }
                    ${index === 0 ? 'rounded-t-xl sm:rounded-t-2xl' : ''}
                    ${index === options.length - 1 ? 'rounded-b-xl sm:rounded-b-2xl' : ''}
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}