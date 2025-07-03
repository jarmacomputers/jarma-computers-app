import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function BestPracticesPage() {
  const practices = [
    'Realice copias de seguridad de sus datos importantes en múltiples ubicaciones (local y en la nube).',
    'Active la autenticación de dos factores (2FA) en todas las cuentas que lo soporten.',
    'Sea escéptico con los correos electrónicos no solicitados y evite hacer clic en enlaces o descargar archivos adjuntos sospechosos.',
    'Use una conexión VPN en redes Wi-Fi públicas para proteger su tráfico de internet.',
    'Revise y gestione los permisos de las aplicaciones en sus dispositivos móviles y de escritorio.',
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight">Mejores Prácticas de Seguridad y Mantenimiento</h1>
          <p className="mt-2 text-lg text-muted-foreground">Estrategias fundamentales para proteger tus datos y asegurar la longevidad de tu tecnología.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Prácticas Esenciales</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {practices.map((practice, index) => (
                <li key={index} className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
