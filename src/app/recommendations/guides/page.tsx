import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function MaintenanceGuidesPage() {
  const guides = [
    { title: 'Guía para Limpiar tu PC de Virus', description: 'Pasos para detectar y eliminar malware de tu sistema Windows.', href: '#' },
    { title: 'Guía para Optimizar el Arranque de tu Ordenador', description: 'Cómo gestionar programas de inicio para un arranque más rápido.', href: '#' },
    { title: 'Guía para Actualizar los Drivers de tu Hardware', description: 'Mantén tus componentes funcionando de manera óptima y segura.', href: '#' },
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
           <h1 className="font-headline text-4xl font-bold tracking-tight">Guías de Mantenimiento</h1>
           <p className="mt-2 text-lg text-muted-foreground">Tutoriales paso a paso para resolver problemas comunes y mantener tu equipo.</p>
        </div>
        <div className="space-y-6">
          {guides.map((guide, index) => (
            <Link href={guide.href} key={index} className="block">
              <Card className="hover:border-primary hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
