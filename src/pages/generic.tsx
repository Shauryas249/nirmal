import React from "react";
import Head from "next/head";
import GenericHeader from "@/components/GenericHeader";
import GenericFooter from "@/components/GenericFooter";
import GenericHero from "@/components/GenericHero";
import GenericAboutSection from "@/components/GenericAboutSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import QualitySection from "@/components/QualitySection";
import GenericContactSection from "@/components/GenericContactSection";

export default function GenericSample() {
  return (
    <>
      <Head>
        <title>Precision Manufacturing Co. | Precision Component Manufacturer</title>
        <meta name="description" content="Precision Manufacturing Co. - ISO certified manufacturer of precision components for automotive and industrial applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <GenericHeader />
        <main className="flex-1 flex flex-col">
          <GenericHero />
          <GenericAboutSection />
          <ProductsSection />
          <QualitySection />
          <ClientsSection />
          <GenericContactSection />
        </main>
        <GenericFooter />
      </div>
    </>
  );
}