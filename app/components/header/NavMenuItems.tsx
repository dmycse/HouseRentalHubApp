'use client';

interface NavMenuItemsProps {
  onClick: () => void;
  label: string;
}

export default function NavMenuItems({onClick, label}: NavMenuItemsProps) {
  return (
    <li 
      className="py-3 px-4 font-semibold transition
                hover:bg-neutral-100"
      onClick={onClick}
    >
      {label}
    </li>
  )
}
