import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { Button } from "./ui/button";


const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[75vh]">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
        <div className="text-center space-y-12" style={{ margin: "0 auto" , width:'100%'}}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Вызов сантехник и электрик в {" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Тюмени {" "} 24/7
            </span>
          </h1>
          <h2 className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Опытные сантехники электрики с лицензией СРО Тюмень , Приедем в черте города за 30 минут. Быстрый ремонт за 30 минут . Гарантия на работы, скидки пенсионерам и новоселам.
          </h2>
        
          <h3> Ремонт за 30 минут </h3>
          <div >
            <SocialMedia />
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/services">
                Вызвать сантехника <FaArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Подробнее</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;