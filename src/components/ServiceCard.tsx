import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link: string
}

export default function ServiceCard({ icon, title, description, features, link }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-none shadow-md bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl font-heading text-accent-900">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-accent-700 leading-relaxed">
          {description}
        </CardDescription>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-accent-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-4">
          <Button 
            variant="ghost" 
            className="group/btn text-primary-600 hover:text-primary-700 p-0 h-auto"
          >
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}