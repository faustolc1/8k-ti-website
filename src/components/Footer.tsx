import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-accent-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">8K</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xl">8K Soluções</div>
                <div className="text-sm text-accent-300">Tecnologia & Inovação</div>
              </div>
            </div>
            <p className="text-accent-300 text-sm leading-relaxed">
              Transformamos desafios tecnológicos em oportunidades de crescimento para sua empresa.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicos/infraestrutura" className="text-accent-300 hover:text-white transition-colors">Infraestrutura de TI</Link></li>
              <li><Link href="/servicos/seguranca" className="text-accent-300 hover:text-white transition-colors">Segurança da Informação</Link></li>
              <li><Link href="/servicos/cloud" className="text-accent-300 hover:text-white transition-colors">Cloud & Servidores</Link></li>
              <li><Link href="/servicos/suporte" className="text-accent-300 hover:text-white transition-colors">Suporte Técnico</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="text-accent-300 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-accent-300 hover:text-white transition-colors">Contato</Link></li>
              <li><Link href="/blog" className="text-accent-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/carreiras" className="text-accent-300 hover:text-white transition-colors">Carreiras</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-accent-300">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-accent-300">contato@8k.net.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-accent-300">São Paulo, SP</span>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-2">
              <Button variant="ghost" size="icon" className="text-accent-300 hover:text-white hover:bg-accent-700">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-300 hover:text-white hover:bg-accent-700">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-300 hover:text-white hover:bg-accent-700">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-700 mt-12 pt-8 text-center">
          <p className="text-accent-300 text-sm">
            © 2024 8K Soluções em TI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}