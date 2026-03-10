import type {Metadata} from 'next';
import { Inter, Anton, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
  title: 'OPTCHA | Agência de Marketing Digital',
  description: 'Escolha o digital, transforme marcas. Estratégia, criatividade e presença online.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable} ${syne.variable}`}>
      <body suppressHydrationWarning className="bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
