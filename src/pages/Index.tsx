import { motion } from "framer-motion";
import ParticleField from "@/components/ParticleField";
import MouseLight from "@/components/MouseLight";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ZaviHighlightSection from "@/components/ZaviHighlightSection";
import ConsultoriaSection from "@/components/ConsultoriaSection";
import DoresSection from "@/components/DoresSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import AboutSection from "@/components/AboutSection";
import PlanosSection from "@/components/PlanosSection";
import FAQSection from "@/components/FAQSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
      <motion.div
        className="min-h-screen bg-background relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <ParticleField />
        <MouseLight />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <DoresSection />
        <ConsultoriaSection />
        <BeneficiosSection />
        <ZaviHighlightSection />
        <DepoimentosSection />
        <ComoFuncionaSection />
        <PlanosSection />
        <FAQSection />
        <CTAFinalSection />
        <FooterSection />
        <WhatsAppButton />
      </motion.div>
  );
};

export default Index;
