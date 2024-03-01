import type { Metadata } from 'next';
import './globals.css';
import {NavBar, Footer} from '@/components';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Find, book, rent a car—quick and super easy!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
