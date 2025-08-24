import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberStride - zkEVM Fitness',
  description: 'Your personal fitness tracker powered by zkEVM.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={orbitron.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
