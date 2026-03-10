import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Anton, Syne } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: 'OPTCHA | Assessoria De Posicionamento Digital',
  description: 'Escolha o digital, transforme marcas. Estratégia, criatividade e presença online.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${anton.variable} ${syne.variable}`}>
      <body suppressHydrationWarning className="bg-[#121212] text-[#efefef] antialiased">
        {children}
      </body>
    </html>
  );
}
