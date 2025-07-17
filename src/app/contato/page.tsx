import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle
} from "lucide-react"

export default function Contato() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: "Telefone",
      info: "(11) 9999-9999",
      description: "Ligue para falar com nossos especialistas"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: "E-mail",
      info: "contato@8k.net.br",
      description: "Envie sua mensagem ou dúvida"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: "Endereço",
      info: "São Paulo, SP",
      description: "Atendemos todo o Brasil"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: "Horário",
      info: "24/7 Suporte",
      description: "Atendimento comercial: Seg-Sex 8h-18h"
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
                Entre em Contato
              </h1>
              <p className="text-xl text-accent-700 leading-relaxed mb-8">
                Estamos prontos para ajudar sua empresa a alcançar novos patamares tecnológicos. 
                Fale conosco e descubra como podemos transformar sua TI.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary-50 rounded-lg">
                        {contact.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-heading text-accent-900">
                      {contact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-accent-900 mb-2">
                      {contact.info}
                    </div>
                    <p className="text-sm text-accent-700">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-accent-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-900 mb-6">
                  Solicite um Orçamento
                </h2>
                <p className="text-lg text-accent-700">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-accent-900 flex items-center">
                      <MessageCircle className="h-6 w-6 text-primary-600 mr-2" />
                      Formulário de Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-accent-700 mb-2">
                            Nome *
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Seu nome completo"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-accent-700 mb-2">
                            E-mail *
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="seu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-accent-700 mb-2">
                            Telefone *
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="(11) 99999-9999"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-accent-700 mb-2">
                            Empresa
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Nome da empresa"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Serviço de Interesse
                        </label>
                        <select className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option value="">Selecione um serviço</option>
                          <option value="infraestrutura">Infraestrutura de TI</option>
                          <option value="seguranca">Segurança da Informação</option>
                          <option value="cloud">Cloud & Servidores</option>
                          <option value="suporte">Suporte Técnico</option>
                          <option value="consultoria">Consultoria Geral</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Mensagem *
                        </label>
                        <textarea
                          className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          rows={4}
                          placeholder="Descreva sua necessidade ou dúvida"
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full group">
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-8">
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading text-accent-900">
                        Atendimento Rápido
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-accent-700 mb-4">
                        Nossa equipe comercial responde em até 2 horas durante o horário comercial.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                          <span className="text-accent-700">Análise gratuita de necessidades</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                          <span className="text-accent-700">Proposta personalizada</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                          <span className="text-accent-700">Sem compromisso</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading text-accent-900">
                        Suporte Emergencial
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-accent-700 mb-4">
                        Para clientes com contratos de suporte, oferecemos:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-accent-700">Atendimento 24/7</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-accent-700">Acesso remoto imediato</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-accent-700">Técnicos especializados</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}