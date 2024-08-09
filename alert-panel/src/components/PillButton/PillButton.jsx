'use client';

export default function PillButton({ text = "", onClick = () => {} }){
    return (
      <button
        className="bg-white rounded-full text-emerald-600 px-12 py-2"
        onClick={onClick}
      >
        {text}
      </button>
    )
}