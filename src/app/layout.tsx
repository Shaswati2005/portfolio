import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import CursorPetalEffect from '@/components/cursor-petal-effect';
import FallingPetals from '@/components/falling-petals';
import { TransitionProvider } from '@/context/transition-context';
import TransitionEffect from '@/components/transition-effect';

export const metadata: Metadata = {
  title: 'Shaswati Mishra Portfolio',
  description: 'An elegant portfolio showcasing skills and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <TransitionProvider>
          <CursorPetalEffect />
          <FallingPetals />
          {children}
          <Toaster />
          <TransitionEffect />
        </TransitionProvider>
      </body>
    </html>
  );
}
