import { MouseEvent } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?:boolean;
  icon?: IconType;
}

export default function Button({label, onClick, disabled, outline, small, icon: Icon}: ButtonProps) {

  return (
    <button
      onClick={onClick}
      disabled={disabled} 
      className={`relative w-full rounded-lg transition
                ${outline? 'bg-white' : 'bg-rose-500'}
                ${outline? 'border-black' : 'border-rose-500'}
                ${outline? 'text-black' : 'text-white'}
                ${small? 'py-1' : 'py-3'}
                ${small? 'text-sm' : 'text-md'}
                ${small? 'font-light' : 'font-semibold'}
                ${small? 'border' : 'border-2'}
                disabled:opacity-70 disabled:cursor-not-allowed 
                hover:opacity-80`}
    >
      {Icon && <Icon size={24} className="absolute top-3 left-4"/>}
      {label}
    </button>
  )
}
