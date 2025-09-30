import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold">MAO-STRESS</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition">Возможности</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition">Тарифы</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Контакты</button>
          </div>
          <Button>Войти</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 animate-fade-in">Профессиональное тестирование</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Стресс-тестирование<br />
            <span className="text-primary">следующего уровня</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Проверьте устойчивость вашей инфраструктуры к критическим нагрузкам. 
            Надежность, которой доверяют тысячи компаний.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8">
              Начать тестирование
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Демо
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Точность</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50К+</div>
              <div className="text-sm text-muted-foreground">Тестов в день</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный набор инструментов для профессионального стресс-тестирования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Gauge" className="text-primary" size={24} />
                </div>
                <CardTitle>HTTP/HTTPS нагрузка</CardTitle>
                <CardDescription>
                  Мощные DDoS-симуляции с настраиваемой интенсивностью и паттернами запросов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Network" className="text-primary" size={24} />
                </div>
                <CardTitle>TCP/UDP тестирование</CardTitle>
                <CardDescription>
                  Проверка устойчивости на уровне транспортного протокола с гибкими настройками
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" className="text-primary" size={24} />
                </div>
                <CardTitle>Аналитика в реальном времени</CardTitle>
                <CardDescription>
                  Детальные метрики производительности и визуализация результатов тестирования
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <CardTitle>Bypass методы</CardTitle>
                <CardDescription>
                  Тестирование с обходом популярных систем защиты для полной оценки безопасности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" className="text-primary" size={24} />
                </div>
                <CardTitle>Географическое распределение</CardTitle>
                <CardDescription>
                  Тестирование с использованием прокси из 50+ стран для реалистичных сценариев
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" className="text-primary" size={24} />
                </div>
                <CardTitle>API интеграция</CardTitle>
                <CardDescription>
                  RESTful API для автоматизации и интеграции с вашими CI/CD процессами
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий план для вашего проекта</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription>Для небольших проектов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₽990</span>
                  <span className="text-muted-foreground">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>До 10K запросов/сек</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>5 одновременных тестов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Базовая аналитика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Email поддержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Профессиональный</CardTitle>
                <CardDescription>Для растущего бизнеса</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₽2990</span>
                  <span className="text-muted-foreground">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>До 100K запросов/сек</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Безлимит тестов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Расширенная аналитика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>API доступ</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Корпоративный</CardTitle>
                <CardDescription>Для крупных компаний</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₽9990</span>
                  <span className="text-muted-foreground">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Без ограничений RPS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Выделенные ресурсы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Полная аналитика + отчеты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>24/7 поддержка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Персональный менеджер</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас профессионалы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Алексей М.</CardTitle>
                    <CardDescription>DevOps Engineer</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Отличный сервис для нагрузочного тестирования. Помог выявить узкие места в нашей инфраструктуре до запуска в продакшн.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария К.</CardTitle>
                    <CardDescription>Security Analyst</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Профессиональный инструмент с мощными возможностями. Аналитика в реальном времени просто превосходная!
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий П.</CardTitle>
                    <CardDescription>Tech Lead</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Использую для всех наших проектов. API интеграция работает безупречно, поддержка отвечает моментально.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Есть вопросы? Мы всегда на связи</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">support@mao-stress.su</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MessageCircle" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-muted-foreground">@mao_stress_support</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Время работы</div>
                    <div className="text-muted-foreground">24/7 без выходных</div>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} />
                  </div>
                  <Button className="w-full">
                    Отправить
                    <Icon name="Send" className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={24} />
                <span className="text-xl font-bold">MAO-STRESS</span>
              </div>
              <p className="text-gray-400">
                Профессиональное стресс-тестирование для надежной инфраструктуры
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition">Документация</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition">Условия использования</a></li>
                <li><a href="#" className="hover:text-white transition">Лицензия</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MAO-STRESS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
