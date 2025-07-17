import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ServiceCard from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Server, 
  Shield, 
  Cloud, 
  Headphones, 
  Settings,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  TrendingUp
} from "lucide-react"

export default function Servicos() {
  const services = [
    {
      icon: <Server className="h-6 w-6 text-primary-600" />,
      title: "Infraestrutura de TI",
      description: "Planejamento, implementação e manutenção de infraestrutura tecnológica robusta e escalável para empresas de todos os tamanhos.",
      features: [
        "Arquitetura de redes corporativas",
        "Gerenciamento de servidores físicos e virtuais",
        "Virtualização com VMware e Hyper-V",
        "Monitoramento proativo 24/7",
        "Backup e disaster recovery",
        "Consultoria em modernização"
      ],
      link: "/servicos/infraestrutura"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: "Segurança da Informação",
      description: "Proteção completa dos seus dados e sistemas contra ameaças cibernéticas com soluções avançadas de segurança.",
      features: [
        "Análise de vulnerabilidades",
        "Firewall e antivírus corporativo",
        "Gestão de identidades e acessos",
        "Compliance (LGPD, ISO 27001)",
        "Treinamento em segurança",
        "Plano de resposta a incidentes"
      ],
      link: "/servicos/seguranca"
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary-600" />,
      title: "Cloud & Servidores",
      description: "Migração e gerenciamento de ambientes cloud para máxima disponibilidade, escalabilidade e otimização de custos.",
      features: [
        "AWS, Azure, Google Cloud",
        "Migração segura para nuvem",
        "Gerenciamento multi-cloud",
        "Backup automático em nuvem",
        "Otimização de custos",
        "Monitoramento e alertas"
      ],
      link: "/servicos/cloud"
    },
    {
      icon: <Headphones className="h-6 w-6 text-primary-600" />,
      title: "Suporte Técnico",
      description: "Suporte especializado e outsourcing de TI para manter sua operação funcionando com máxima eficiência.",
      features: [
        "Suporte 24/7 via múltiplos canais",
        "Help desk especializado",
        "Manutenção preventiva",
        "Gestão de ativos de TI",
        "Treinamento de usuários",
        "SLA customizado"
      ],
      link: "/servicos/suporte"
    }
  ]

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: "Implementação Rápida",
      description: "Projetos implementados com agilidade e eficiência, minimizando impactos na operação."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Equipe Especializada",
      description: "Profissionais certificados nas principais tecnologias e metodologias do mercado."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: "Escalabilidade",
      description: "Soluções que crescem junto com sua empresa, adaptando-se às novas necessidades."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
      title: "Qualidade Garantida",
      description: "Processo rigoroso de qualidade com SLA definido e monitoramento contínuo."
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
                Nossos Serviços
              </h1>
              <p className="text-xl text-accent-700 leading-relaxed mb-8">
                Oferecemos soluções completas em TI para empresas que buscam inovação, 
                segurança e eficiência em seus processos tecnológicos.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="group">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-900 mb-6">
                Soluções Completas para sua Empresa
              </h2>
              <p className="text-lg text-accent-700 max-w-3xl mx-auto">
                Desde infraestrutura robusta até suporte especializado, oferecemos tudo que sua empresa 
                precisa para manter a tecnologia funcionando perfeitamente.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-accent-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-900 mb-6">
                  Por que escolher a 8K?
                </h2>
                <p className="text-lg text-accent-700">
                  Diferenciais que fazem da 8K a melhor escolha para suas necessidades de TI
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-none shadow-lg group hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                          {benefit.icon}
                        </div>
                        <CardTitle className="text-xl font-heading text-accent-900">
                          {benefit.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-accent-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-900 mb-6">
                  Nosso Processo
                </h2>
                <p className="text-lg text-accent-700">
                  Metodologia comprovada para garantir o sucesso dos seus projetos
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center border-none shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <CardTitle className="text-xl font-heading text-accent-900">
                      Análise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent-700">
                      Avaliação completa da sua infraestrutura atual e identificação de oportunidades de melhoria.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-none shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <CardTitle className="text-xl font-heading text-accent-900">
                      Planejamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent-700">
                      Desenvolvimento de estratégia personalizada com cronograma detalhado e metas claras.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-none shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <CardTitle className="text-xl font-heading text-accent-900">
                      Implementação
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent-700">
                      Execução cuidadosa do projeto com acompanhamento contínuo e suporte especializado.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Pronto para transformar sua TI?
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Entre em contato conosco e descubra como nossas soluções podem impulsionar sua empresa.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="group">
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Agendar Consultoria
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