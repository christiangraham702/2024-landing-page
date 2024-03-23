import React from 'react';

interface DisplayBoxProps {
  text: string;
  Icon: JSX.Element; // This allows you to pass in any JSX element, including SVG icons
  bgColor: string;
}

export default function DisplayBox({ text, Icon, bgColor }: DisplayBoxProps) {
  return (
    <div className={`flex flex-col border-2 border-black rounded-lg ${bgColor} al items-left content-center px-7 py-10 w-1/2 sm:w-1/5 shadow-offset-gray m-10 text-gray-900 gap-5 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none`}>
      {Icon}
      <p className="text-gray-900 font-bold text-3xl">{text}</p>
    </div>
  );
}