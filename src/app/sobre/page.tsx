import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  Trophy, 
  Target, 
  ArrowRight,
  Award,
  Clock,
  Heart
} from "lucide-react"

export default function Sobre() {
  const stats = [
    { number: "15+", label: "Anos de Experiência", icon: Clock },
    { number: "500+", label: "Clientes Atendidos", icon: Users },
    { number: "99.9%", label: "Uptime Garantido", icon: Trophy },
    { number: "24/7", label: "Suporte Disponível", icon: Heart }
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "Foco no Cliente",
      description: "Priorizamos as necessidades específicas de cada cliente, oferecendo soluções personalizadas."
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Excelência Técnica",
      description: "Utilizamos as melhores práticas e tecnologias mais avançadas do mercado."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Equipe Especializada",
      description: "Profissionais certificados e em constante atualização tecnológica."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Compromisso",
      description: "Estabelecemos parcerias duradouras baseadas em confiança e resultados."
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-accent-900 mb-6">
                Sobre a 8K Soluções
              </h1>
              <p className="text-xl text-accent-700 leading-relaxed mb-8">
                Há mais de 15 anos transformando desafios tecnológicos em oportunidades de crescimento, 
                conectando empresas ao futuro digital com soluções inovadoras e suporte especializado.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="group">
                  Fale Conosco
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Nossos Serviços
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <stat.icon className="h-12 w-12 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-accent-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-accent-700 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-accent-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-900 mb-6">
                  Nossa Missão
                </h2>
                <p className="text-lg text-accent-700 leading-relaxed">
                  Capacitar empresas através da tecnologia, oferecendo soluções completas em TI que 
                  impulsionam o crescimento, aumentam a produtividade e garantem a segurança dos dados.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-accent-900">
                      Visão
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-accent-700 leading-relaxed">
                      Ser reconhecida como a principal referência em soluções tecnológicas inovadoras, 
                      contribuindo para o sucesso e transformação digital das empresas brasileiras.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-accent-900">
                      Compromisso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-accent-700 leading-relaxed">
                      Manter a excelência no atendimento, investir continuamente em capacitação e 
                      oferecer soluções que realmente fazem a diferença no dia a dia dos nossos clientes.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-900 mb-6">
                  Nossos Valores
                </h2>
                <p className="text-lg text-accent-700">
                  Princípios que norteiam nossa atuação e relacionamento com clientes
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="border-none shadow-lg group hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                          {value.icon}
                        </div>
                        <CardTitle className="text-xl font-heading text-accent-900">
                          {value.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-accent-700 leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Pronto para conhecer nossas soluções?
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Entre em contato conosco e descubra como podemos transformar a TI da sua empresa.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="group">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Nossos Serviços
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}