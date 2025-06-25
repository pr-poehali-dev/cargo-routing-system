import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const RouteSelector = () => {
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");

  const countries = [
    {
      code: "ru",
      name: "Россия",
      cities: [
        "Москва",
        "Санкт-Петербург",
        "Новосибирск",
        "Екатеринбург",
        "Казань",
      ],
    },
    {
      code: "tr",
      name: "Турция",
      cities: ["Стамбул", "Анкара", "Измир", "Бурса", "Анталья"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold mb-4 text-gradient">
            Выберите маршрут доставки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Укажите точки отправления и назначения для расчета стоимости
            доставки
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-montserrat">
              Планирование маршрута
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* From */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold">
                    Откуда
                  </h3>
                </div>

                <Select value={fromCountry} onValueChange={setFromCountry}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Выберите страну" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {fromCountry && (
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries
                        .find((c) => c.code === fromCountry)
                        ?.cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              {/* To */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    B
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold">
                    Куда
                  </h3>
                </div>

                <Select value={toCountry} onValueChange={setToCountry}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Выберите страну" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {toCountry && (
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries
                        .find((c) => c.code === toCountry)
                        ?.cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>

            {/* Swap button */}
            <div className="flex justify-center mb-8">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="ArrowUpDown" size={20} />
              </Button>
            </div>

            <Button className="w-full h-14 bg-gradient-orange border-0 hover:bg-gradient-orange-dark text-lg font-montserrat font-semibold">
              <Icon name="MapPin" className="mr-2" size={20} />
              Показать на карте
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RouteSelector;
