import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Wrench, BarChart3, HardHat, FileText, Phone, Star, MapPin, Network, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { categories, issues, testimonials, blogPosts } from '@/lib/data';
import AiAssistant from '@/components/ai/AiAssistant';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function Home() {
  const categoryIcons: { [key: string]: React.ReactNode } = {
    software: <Cpu className="h-8 w-8 text-primary" />,
    hardware: <HardHat className="h-8 w-8 text-primary" />,
    firmware: <HardHat className="h-8 w-8 text-primary" />,
    networks: <Network className="h-8 w-8 text-primary" />,
    'printers-plotters': <Printer className="h-8 w-8 text-primary" />,
  };
  
  const featuredServices = categories.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Developer desk"
          data-ai-hint="developer desk"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container px-4 md:px-6 h-full flex flex-col items-start justify-center text-white space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Soporte Tecnológico Confiable, Simplificado.
          </h1>
          <p className="max-w-[600px] text-lg md:text-xl">
            JarmaComputers ofrece soluciones expertas para todas tus necesidades de hardware y software.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">
                Contactar ahora
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-black text-white border border-white hover:bg-white hover:text-black">
              <Link href="#ai-assistant">
                Solicitar soporte
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Servicios Destacados
            </h2>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <Link href={`/categories/${service.slug}`} key={service.slug} className="group">
                <Card className="relative h-64 w-full overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <Image
                    src={`https://placehold.co/400x400.png`}
                    data-ai-hint={service.slug.replace('-', ' ')}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-headline text-xl font-bold">{service.name}</h3>
                    <p className="text-sm">{service.description.split('.')[0]}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section id="common-issues" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Clasificación de Fallas Típicas
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
               <Link href={`/categories/${category.slug}`} key={category.slug} className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-background transition-colors">
                  <div className="text-primary mt-1">{categoryIcons[category.slug]}</div>
                  <div className="flex-1">
                    <h3 className="font-bold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{issues.find(i => i.category === category.slug)?.description.substring(0, 50)}...</p>
                  </div>
                  <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    Ver más <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
               </Link>
            ))}
          </div>
        </div>
      </section>
      
       <section id="recommendations" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Recomendaciones y Soluciones Técnicas
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image src="https://placehold.co/100x100.png" data-ai-hint="glowing lightbulb" alt="Tips" width={60} height={60} className="rounded-lg"/>
                <div>
                  <CardTitle>Tips Prácticos</CardTitle>
                  <p className="text-sm text-muted-foreground">Mantenga su software actualizado.</p>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image src="https://placehold.co/100x100.png" data-ai-hint="data backup" alt="Best Practices" width={60} height={60} className="rounded-lg"/>
                <div>
                  <CardTitle>Mejores Prácticas</CardTitle>
                  <p className="text-sm text-muted-foreground">Realice copias de seguridad regularmente.</p>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                 <Image src="https://placehold.co/100x100.png" data-ai-hint="maintenance checklist" alt="Guides" width={60} height={60} className="rounded-lg"/>
                 <div>
                  <CardTitle>Guías de Mantenimiento</CardTitle>
                  <p className="text-sm text-muted-foreground">Consulte nuestras guías paso a paso.</p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Blog / Noticias Tecnológicas
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map(post => (
              <Link href="#" key={post.slug}>
                <Card className="overflow-hidden h-full group">
                  <div className="relative h-48">
                    <Image src={post.image} data-ai-hint={post.dataAiHint} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{post.category}</p>
                    <h3 className="font-bold text-lg">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">Fuente: {post.source}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-assistant" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Tu Asistente Técnico Personal con IA
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ¿No encuentras tu problema? Describe tu problema o haz una pregunta, y nuestra IA te proporcionará una solución. También puedes usar tu micrófono para búsqueda por voz.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-4xl py-12">
            <AiAssistant />
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Testimonios de Clientes
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
                Suscríbete a nuestro Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Recibe novedades y consejos técnicos.
              </p>
              <form className="flex space-x-2">
                <Input type="email" placeholder="Ingresa tu email" className="max-w-lg flex-1" />
                <Button type="submit">
                  Suscribirse
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-2">
                Respetamos tu privacidad.
              </p>
            </div>
             <div className="relative rounded-lg overflow-hidden">
                <Image src="https://placehold.co/600x400.png" data-ai-hint="city map" alt="Map" fill className="object-cover"/>
                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white bg-black/50 p-6 rounded-lg">
                      <MapPin className="h-10 w-10 mx-auto mb-2"/>
                      <h3 className="font-bold text-xl">Encuentra nuestra ubicación</h3>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
