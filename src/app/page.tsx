import Link from 'next/link';
import { ArrowRight, Cpu, Network, Printer, Wrench, MemoryStick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { categories } from '@/lib/data';
import AiAssistant from '@/components/ai/AiAssistant';

export default function Home() {
  const categoryIcons = {
    software: <Cpu className="h-8 w-8" />,
    hardware: <Wrench className="h-8 w-8" />,
    firmware: <MemoryStick className="h-8 w-8" />,
    networks: <Network className="h-8 w-8" />,
    'printers-plotters': <Printer className="h-8 w-8" />,
  };

  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Reliable Tech Support, Simplified.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  JarmaComputers offers expert solutions for all your hardware and software needs. Get back to work faster with our professional support.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#ai-assistant">
                    Ask our AI Assistant
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#categories">
                    Browse Categories
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Cpu className="h-48 w-48 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                Common Issues
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Find Solutions by Category
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our database of common computer problems, organized by category for easy navigation and quick resolutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <Link href={`/categories/${category.slug}`} key={category.slug}>
                <Card className="flex h-full flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 text-primary">
                      {categoryIcons[category.slug as keyof typeof categoryIcons]}
                    </div>
                    <CardTitle className="font-headline">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-assistant" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Your Personal AI Tech Assistant
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Can't find your issue? Describe your problem or ask a question, and our AI will provide a solution, or use your microphone for voice search.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-4xl py-12">
            <AiAssistant />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Stay Updated with Our Tech Blog
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up for our newsletter to get the latest articles, tips, and tricks delivered straight to your inbox.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
