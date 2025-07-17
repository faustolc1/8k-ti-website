import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cloud, Headphones, Settings } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-accent-900 leading-tight">
                  Soluções <span className="text-primary-600">Tecnológicas</span> para o Futuro
                </h1>
                <p className="text-lg md:text-xl text-accent-700 leading-relaxed">
                  Transformamos desafios em oportunidades com infraestrutura de TI moderna, 
                  segurança robusta e suporte especializado para sua empresa crescer.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Conhecer Serviços
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Falar com Especialista
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                  <Shield className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-accent-700">Segurança</p>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                  <Cloud className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-accent-700">Cloud</p>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                  <Headphones className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-accent-700">Suporte</p>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                  <Settings className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-accent-700">Automação</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">99.9%</div>
                    <div className="text-sm text-accent-600">Uptime</div>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary-600">24/7</div>
                    <div className="text-sm text-accent-600">Suporte</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">500+</div>
                    <div className="text-sm text-accent-600">Clientes</div>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary-600">15+</div>
                    <div className="text-sm text-accent-600">Anos</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}