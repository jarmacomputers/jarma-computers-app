import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories, issues } from '@/lib/data'; // Ruta correcta
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Genera los parámetros estáticos para cada categoría
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Página de categoría
export default async function CategoryPage({ params }: { params: { slug: string } }) {
  // Ajuste para evitar el warning de Next: await params
  const { slug } = await params as { slug: string };

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return notFound();
  }

  const categoryIssues = issues.filter((issue) => issue.category === category.slug);

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">
          Casos de {category.name}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
      </div>

      {categoryIssues.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryIssues.map((issue) => (
            <Link href={`/issues/${issue.id}`} key={issue.id} className="group">
              <Card className="h-full flex flex-col transition-all duration-300 group-hover:border-primary group-hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{issue.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {categoryIssues.length === 0 && (
        <p className="text-center text-muted-foreground">
          No hay casos disponibles para esta categoría.
        </p>
      )}
    </div>
  );
}
