import { Instagram } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const FooterSection = () => (
  <footer className="bg-[#000000] border-t border-white/5 py-20">
    <div className="container mx-auto px-6 flex flex-col items-center text-center gap-12">
      <div className="flex flex-col items-center gap-5">
        <BrandLogo variant="full" />
        <p className="text-white/40 text-sm font-black uppercase tracking-[0.3em]">
          Resultados inquestionáveis
        </p>
      </div>

      <div className="flex items-center gap-8">
        <a
          href="https://www.instagram.com/arthurzavi_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@arthur.zavitoski"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.21 8.21 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" />
          </svg>
        </a>
      </div>

      <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
        &copy; {new Date().getFullYear()} ZAVI TREINADOR. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default FooterSection;
