import { notFound } from 'next/navigation';
import { categories, issues } from '@/lib/data';
import type { Category, Issue } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) {
    notFound();
  }

  const categoryIssues = issues.filter((issue) => issue.category === category.slug);

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Casos de {category.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
      </div>

      {categoryIssues.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryIssues.map((issue) => (
            <Link href={`/issues/${issue.id}`} key={issue.id} className="group">
              <Card className="flex h-full flex-col transition-all duration-300 group-hover:border-primary group-hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{issue.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{issue.description}</p>
                </CardContent>
                <div className="p-6 pt-0 flex justify-end items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No se encontraron casos en esta categoría.</p>
        </div>
      )}
    </div>
  );
}
