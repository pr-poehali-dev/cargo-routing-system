import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TruckGallery = () => {
  const trucks = [
    {
      id: 1,
      name: "Mercedes Actros",
      capacity: "20 тонн",
      volume: "82 м³",
      features: ["GPS трекинг", "Рефрижератор", "Борт 13.6м"],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Volvo FH16",
      capacity: "25 тонн",
      volume: "90 м³",
      features: ["GPS трекинг", "Тент", "Борт 13.6м"],
      image:
        "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Scania R-Series",
      capacity: "22 тонна",
      volume: "85 м³",
      features: ["GPS трекинг", "Изотерм", "Борт 13.6м"],
      image:
        "https://images.unsplash.com/photo-1601584115020-7617b1564296?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="trucks" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold mb-4 text-gradient">
            Наш автопарк
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современные грузовики европейского производства с полным контролем
            маршрута
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trucks.map((truck, index) => (
            <Card
              key={truck.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={truck.image}
                  alt={truck.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Доступен
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  {truck.name}
                </h3>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="Weight" size={16} />
                    <span>{truck.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="Box" size={16} />
                    <span>{truck.volume}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {truck.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Icon name="Check" size={14} className="text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Статус:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-600">
                        В пути: Москва → Стамбул
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-xl p-6 shadow-lg">
            <Icon name="Truck" size={24} className="text-orange-600" />
            <div className="text-left">
              <div className="font-montserrat font-bold text-lg">
                Весь автопарк
              </div>
              <div className="text-gray-600">15+ современных грузовиков</div>
            </div>
            <div className="text-2xl font-bold text-orange-600">24/7</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckGallery;
