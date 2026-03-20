'use client';

import React, {useState, useEffect, useCallback} from 'react';
import { useRouter } from 'next/navigation';

export default function CardapioDivinoSabor() {
  const [counter, setCounter] = useState(3);
  const isRedirecting = React.useRef(false);

  const router = useRouter();
  const PDF_URL = "/cardapio-divino-sabor.pdf";

  const handleRedirect = useCallback(() => {
    if (isRedirecting.current) return;
    isRedirecting.current = true;
    window.location.replace(PDF_URL)
  },[PDF_URL]);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prev) => prev - 1)
      },1000)
      return()=> clearInterval(timer)
    }

    if (counter === 0){
      handleRedirect();
    }
  },[counter, handleRedirect])

  return (
    <div className="w-full min-h-screen bg-[#1a110a] flex flex-col items-center justify-center m-0 p-0 overflow-x-hidden">
    <div className="max-w-md w-full text-center space-y-8">
      <header className='space-y-2'>
        <h1 className="text-3xl font-serif tracking-wide text-[#d4a373]">
        Divino sabor
        </h1>
        <p className='text-gray-400 text-sm'>Bar & Restaurante</p>
      </header>

      <main className="relative flex flex-col items-center">
      {/* Loader Visual*/}
      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="transparent"
            stroke="#2a1f16"
            strokeWidth="8"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="transparent"
              stroke="#d4a373"
              strokeWidth="8"
              strokeDasharray={440}
              strokeDashoffset={440 - (440 * (3 - counter)) /3}
              className="transition-all duration-1000 ease-linear" 
              />
          </svg>
          <span className="text-5xl font-bold">{counter}</span>
        </div>

      {/* BPTÃO DE SEGURANÇA: Essencial para iPhone/Safari */}
        <button
        onClick={handleRedirect} className="px-6 py-3 bg-[#d4a373] text-[#1a110a] rounded-full font-bold hover:bg-[#b88b5c] transition-colors active:scale-95">
        Acessar Agora
       </button>
      </main>
      <footer className="pt-10">
        <p className="text-xw text-gray-500 uppercase tracking-widest">
          Redirecionamento automático em instantes
        </p>
      </footer>
    </div>
     {/* <PdfViewer /> */}
    </div>
  );
}
