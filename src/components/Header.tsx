import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center text-white text-xl font-bold">
              🚛
            </div>
            <span className="text-2xl font-montserrat font-bold text-gradient">
              CargoLink
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Услуги
            </a>
            <a
              href="#routes"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Маршруты
            </a>
            <a
              href="#trucks"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Автопарк
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />

            <Button className="bg-gradient-orange border-0 hover:bg-gradient-orange-dark">
              <Icon name="Phone" className="mr-2" size={16} />
              +7 (999) 123-45-67
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
