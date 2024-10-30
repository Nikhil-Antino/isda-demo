"use client";

import HeroBanner from "@/components/banners/HeroBanner";
import Educators from "@/components/Educators";
import FAQ from "@/components/Faqs";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import JobSection from "@/components/JobSection";
import Statistics from "@/components/Statistics";
import SuccessStories from "@/components/SuccessStories";
import TuitionFee from "@/components/TuitionFee";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Statistics />
      <JobSection />
      <SuccessStories />
      <HowItWorks />
      <Educators />
      <WhySection />
      <TuitionFee />
      <FAQ />
      <Footer />
    </>
  );
}
