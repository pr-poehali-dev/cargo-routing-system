
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-orange flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Грузоперевозки
            <span className="block text-4xl md:text-6xl font-semibold mt-2">
              Россия ⇄ Турция
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-open-sans opacity-90">
            Надежная доставка грузов любого размера. 
            Быстро, безопасно, с полным контролем маршрута.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 font-montserrat font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 font-montserrat font-semibold text-lg px-8 py-4 rounded-xl transition-all"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold font-montserrat mb-2">500+</div>
              <div className="text-lg opacity-90">Доставленных грузов</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold font-montserrat mb-2">24/7</div>
              <div className="text-lg opacity-90">Поддержка клиентов</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold font-montserrat mb-2">5 лет</div>
              <div className="text-lg opacity-90">Опыт работы</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated truck */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden opacity-30">
        <div className="animate-truck-move">
          🚛
        </div>
      </div>
    </section>
  );
};

export default Hero;
