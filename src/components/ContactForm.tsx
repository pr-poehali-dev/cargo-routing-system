import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold mb-4 text-gradient">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите консультацию по вашему грузу или оформите заказ прямо
            сейчас
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-center">
                Оставить заявку
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      className="h-12 mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Компания</Label>
                    <Input
                      id="company"
                      placeholder="Название компании"
                      className="h-12 mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    className="h-12 mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-12 mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем грузе..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button className="w-full h-14 bg-gradient-orange border-0 hover:bg-gradient-orange-dark text-lg font-montserrat font-semibold">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/79991234567"
                className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl flex items-center gap-4 transition-colors group"
              >
                <div className="text-3xl">📱</div>
                <div>
                  <div className="font-montserrat font-bold">WhatsApp</div>
                  <div className="text-sm opacity-90">Быстрый ответ</div>
                </div>
                <Icon
                  name="ExternalLink"
                  className="ml-auto group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>

              <a
                href="https://t.me/cargolink"
                className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl flex items-center gap-4 transition-colors group"
              >
                <div className="text-3xl">✈️</div>
                <div>
                  <div className="font-montserrat font-bold">Telegram</div>
                  <div className="text-sm opacity-90">Мгновенно</div>
                </div>
                <Icon
                  name="ExternalLink"
                  className="ml-auto group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
            </div>

            {/* Contact Details */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-gradient">
                  Контактная информация
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-gray-600">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@cargolink.ru</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Офис</div>
                      <div className="text-gray-600">
                        Москва, ул. Транспортная, 15
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
                      <Icon name="Clock" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-gray-600">24/7 без выходных</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="bg-gradient-orange-light rounded-xl p-6 text-white">
              <h4 className="font-montserrat font-bold text-lg mb-4">
                Преимущества работы с нами
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={16} />
                  <span>Страхование грузов до 1 млн ₽</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Zap" size={16} />
                  <span>Ответ в течение 15 минут</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={16} />
                  <span>Отслеживание в реальном времени</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
