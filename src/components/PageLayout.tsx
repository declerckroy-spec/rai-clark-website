'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './sections/Footer';
import CustomCursor from './CustomCursor';
import SpotifyFloatingButton from './SpotifyFloatingButton';
import EasterEggs from './EasterEggs';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <CustomCursor />
      <SpotifyFloatingButton />
      <EasterEggs />
      <Header />

      <main className="relative pt-20">
        {children}
      </main>

      <Footer />
    </>
  );
}
