import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import QualitySection from "@/components/QualitySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nirmal Autotech Industries | Precision Component Manufacturer</title>
        <meta name="description" content="Nirmal Autotech Industries Pvt Ltd - IATF16949:2016 certified manufacturer of precision components for automotive and industrial applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          <Hero />
          <AboutSection />
          <ProductsSection />
          <QualitySection />
          <ClientsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}