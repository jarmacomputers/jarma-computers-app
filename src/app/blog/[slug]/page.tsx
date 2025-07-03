import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <article>
          <header className="mb-8 text-center">
            <Badge variant="secondary" className="mb-4 hover:bg-accent transition-colors">
              {post.category}
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tight">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">Fuente: {post.source}</p>
          </header>
          
          <div className="relative w-full h-96 mb-8">
            <Image
              src={post.image}
              alt={post.title}
              data-ai-hint={post.dataAiHint}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>{post.content}</p>
            <p className="text-sm text-muted-foreground italic">Este es un contenido de ejemplo. En una aplicación real, aquí se mostraría el cuerpo completo del artículo del blog, que podría obtenerse de un sistema de gestión de contenidos (CMS) o una API.</p>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/#blog" className="text-primary hover:underline font-medium">
              &larr; Volver al Blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}