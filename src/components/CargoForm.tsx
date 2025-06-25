import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const CargoForm = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold mb-4 text-gradient">
            Параметры груза
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Укажите характеристики вашего груза для точного расчета стоимости
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-montserrat flex items-center justify-center gap-2">
                <Icon name="Package" size={24} />
                Характеристики груза
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Dimensions */}
                <div className="space-y-6">
                  <h3 className="text-lg font-montserrat font-semibold text-orange-600 mb-4">
                    Габариты (см)
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="length">Длина</Label>
                      <Input
                        id="length"
                        placeholder="100"
                        className="h-12 mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="width">Ширина</Label>
                      <Input
                        id="width"
                        placeholder="50"
                        className="h-12 mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="height">Высота</Label>
                      <Input
                        id="height"
                        placeholder="30"
                        className="h-12 mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Вес (кг)</Label>
                      <Input
                        id="weight"
                        placeholder="25"
                        className="h-12 mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional parameters */}
                <div className="space-y-6">
                  <h3 className="text-lg font-montserrat font-semibold text-orange-600 mb-4">
                    Дополнительно
                  </h3>

                  <div>
                    <Label htmlFor="cargo-type">Тип груза</Label>
                    <Select>
                      <SelectTrigger className="h-12 mt-2">
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Обычный груз</SelectItem>
                        <SelectItem value="fragile">Хрупкий</SelectItem>
                        <SelectItem value="hazardous">Опасный</SelectItem>
                        <SelectItem value="perishable">
                          Скоропортящийся
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="priority">Приоритет доставки</Label>
                    <Select>
                      <SelectTrigger className="h-12 mt-2">
                        <SelectValue placeholder="Выберите приоритет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандартная</SelectItem>
                        <SelectItem value="express">Экспресс</SelectItem>
                        <SelectItem value="urgent">Срочная</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Описание груза</Label>
                    <Textarea
                      id="description"
                      placeholder="Опишите ваш груз..."
                      className="mt-2 min-h-[100px]"
                    />
                  </div>
                </div>
              </div>

              {/* Price calculation */}
              <div className="mt-8 p-6 bg-gradient-orange-light rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-montserrat font-bold text-white mb-2">
                      Предварительная стоимость
                    </h4>
                    <p className="text-white/90">
                      Окончательная цена рассчитывается индивидуально
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-montserrat font-bold text-white">
                      от 15 000 ₽
                    </div>
                    <div className="text-white/90">≈ $200 / ≈ 3,500 ₺</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button className="flex-1 h-14 bg-gradient-orange border-0 hover:bg-gradient-orange-dark text-lg font-montserrat font-semibold">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Точный расчет
                </Button>

                <Button
                  variant="outline"
                  className="h-14 px-8 border-orange-300 text-orange-600 hover:bg-orange-50"
                >
                  <Icon name="FileText" className="mr-2" size={20} />
                  Получить КП
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CargoForm;
