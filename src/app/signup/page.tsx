import Link from "next/link";
import { Cpu } from 'lucide-react';
import { UserAuthForm } from "@/components/auth/UserAuthForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="container flex h-[calc(100vh-11rem)] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Cpu className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl">Crear una Cuenta</CardTitle>
          <CardDescription>
            Ingresa tu correo y contraseña para comenzar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm isSignUp={true} />
        </CardContent>
        <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="/login"
                className="font-medium text-primary hover:underline"
              >
                Iniciar sesión
              </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
