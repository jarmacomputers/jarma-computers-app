import { notFound } from 'next/navigation';
import { issues } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return issues.map((issue) => ({
    id: issue.id,
  }));
}

export default function IssuePage({ params }: { params: { id: string } }) {
  const issue = issues.find((i) => i.id === params.id);
  if (!issue) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link href={`/categories/${issue.category}`}>
            <Badge variant="secondary" className="mb-2 hover:bg-accent transition-colors capitalize">{issue.category.replace('-', ' ')}</Badge>
          </Link>
          <h1 className="font-headline text-4xl font-bold tracking-tight">{issue.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{issue.description}</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Diagnostic Steps</h2>
            <ul className="space-y-3">
              {issue.diagnostics.map((step, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Recommendations</h2>
            <ul className="space-y-3">
              {issue.recommendations.map((step, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Solutions</h2>
            <ul className="space-y-3">
              {issue.solutions.map((step, index) => (
                <li key={index} className="flex items-start">
                   <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
