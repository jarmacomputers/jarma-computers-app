"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { AiSearchResult } from "@/lib/types";

export default function AiResponseCard({ answer, summary, externalSources }: AiSearchResult) {
  return (
    <Card className="bg-background/50">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Respuesta de la IA</CardTitle>
        <CardDescription>Respuesta generada automáticamente</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Renderizado con saltos de línea y viñetas */}
        <div className="whitespace-pre-line text-base text-foreground">
          {answer}
        </div>

        {summary && (
          <div className="whitespace-pre-line text-sm text-muted-foreground">
            <strong>Resumen:</strong> {summary}
          </div>
        )}
      </CardContent>

      {externalSources && externalSources.length > 0 && (
        <CardFooter className="flex flex-col items-start gap-2">
          <h4 className="text-sm font-semibold">Fuentes externas:</h4>
          <div className="flex flex-wrap gap-2">
            {externalSources.map((source, index) => (
              <a href={source} target="_blank" rel="noopener noreferrer" key={index}>
                <Badge variant="secondary" className="hover:bg-accent transition-colors">
                  {new URL(source).hostname}
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Badge>
              </a>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

