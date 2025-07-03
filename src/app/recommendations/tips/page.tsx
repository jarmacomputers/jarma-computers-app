import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function PracticalTipsPage() {
  const tips = [
    'Mantenga su sistema operativo y software siempre actualizados para protegerse de vulnerabilidades.',
    'Utilice un gestor de contraseñas para crear y almacenar contraseñas seguras y únicas.',
    'Reinicie sus dispositivos regularmente para limpiar la memoria y resolver problemas menores.',
    'Limpie físicamente su teclado, ratón y pantalla para mantener la higiene y el buen funcionamiento.',
    'Asegúrese de que la ventilación de su ordenador no esté obstruida para evitar el sobrecalentamiento.',
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight">Tips Prácticos para tu Equipo</h1>
          <p className="mt-2 text-lg text-muted-foreground">Pequeños hábitos que marcan una gran diferencia en el rendimiento y la seguridad de tus dispositivos.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Nuestros Consejos Principales</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
