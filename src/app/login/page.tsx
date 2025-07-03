import Link from "next/link";
import { Cpu } from 'lucide-react';
import { UserAuthForm } from "@/components/auth/UserAuthForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="container flex h-[calc(100vh-11rem)] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
           <div className="flex justify-center mb-4">
            <Cpu className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl">¡Bienvenido de nuevo!</CardTitle>
          <CardDescription>
            Ingresa tus credenciales para acceder a tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
        <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/signup"
                className="font-medium text-primary hover:underline"
              >
                Regístrate
              </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
