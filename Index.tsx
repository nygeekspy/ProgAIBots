import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LearningPathBeginner from "@/components/LearningPathBeginner";
import LearningPathMiddle from "@/components/LearningPathMiddle";
import MaterialsLibrary from "@/components/MaterialsLibrary";
import Glossary from "@/components/Glossary";
import FaqSection from "@/components/FaqSection";
import CareerMap from "@/components/CareerMap";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <LearningPathBeginner />
      <LearningPathMiddle />
      <MaterialsLibrary />
      <Glossary />
      <FaqSection />
      <CareerMap />
      <Footer />
    </div>
  );
};

export default Index;
