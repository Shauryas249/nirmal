import React, { ReactNode, useState } from 'react';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bell, X, Award, Megaphone } from 'lucide-react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      <Head>
        <title>{title} | Nirmal Autotech Industries</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        {/* Announcement Banner */}
        {showAnnouncement && (
          <div className="announcement-banner py-1.5">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Megaphone className="h-4 w-4" />
                <span className="text-sm font-medium">New ISO 9001:2015 certification achieved! Enhanced quality standards for all products.</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">Industry Leader in Precision Components</span>
                </div>
                <button 
                  onClick={() => setShowAnnouncement(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label="Close announcement"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;