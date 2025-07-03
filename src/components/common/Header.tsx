"use client";

import Link from "next/link";
import { Cpu, LogOut, Menu, UserCircle, X, Home, Wrench, HardHat, BarChart3, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const { user } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const mainNavLinks = [
    { title: "Inicio", href: "/", icon: Home },
    { title: "Servicios", href: "#services", icon: Wrench },
    { title: "Soluciones", href: "#recommendations", icon: HardHat },
    { title: "Help Desk IA", href: "#ai-assistant", icon: BarChart3 },
    { title: "Blog", href: "#blog", icon: FileText },
    { title: "Contacto", href: "#contact", icon: Phone },
  ];
  
  const renderNavLinks = (isMobile = false) => (
    <>
      {mainNavLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition-colors hover:text-primary/80 text-foreground flex flex-col items-center gap-1"
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <link.icon className="h-6 w-6" />
          <span className="text-xs font-medium">{link.title}</span>
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-primary" />
            <span className="font-bold sm:inline-block font-headline text-lg">
              JarmaComputers
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm mx-auto">
            {renderNavLinks()}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
           <Link href="/" className="flex items-center">
             <Cpu className="h-6 w-6 text-primary" />
             <span className="ml-2 font-bold font-headline">JarmaComputers</span>
           </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Cpu className="h-6 w-6 text-primary" />
                  <span className="ml-2 font-bold font-headline">JarmaComputers</span>
                </Link>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {renderNavLinks(true)}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <UserCircle className="h-10 w-10 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Mi Cuenta</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Ajustes</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <nav className="hidden md:flex items-center space-x-2">
              <Button asChild variant="ghost">
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Registrarse</Link>
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
