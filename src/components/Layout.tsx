import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'CreatorPulse - Creator Economy Command Center' 
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <header className="bg-brand-purple-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">CreatorPulse</h1>
            <nav>
              {/* Add navigation items */}
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-100 p-4 text-center">
          <p>&copy; 2026 CreatorPulse. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;