"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import VoiceRecorder from './VoiceRecorder';
import { answerUserQuery } from '@/ai/flows/answer-user-query';
import { generateSearchQuery } from '@/ai/flows/generate-search-query';
import type { AiSearchResult } from '@/lib/types';
import { Loader2, Send } from 'lucide-react';
import AiResponseCard from './AiResponseCard';

export default function AiAssistant() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [results, setResults] = useState<AiSearchResult | null>(null);
  const { toast } = useToast();

  const handleTextSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsLoading(true);
    setResults(null);
    try {
      const response = await answerUserQuery({ query });
      setResults(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'AI Assistant Error',
        description: 'Failed to get a response. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceSearch = async (audioDataUri: string) => {
    setIsLoading(true);
    setResults(null);
    try {
      const { transcription } = await generateSearchQuery({ audioDataUri });
      setQuery(transcription);
      const response = await answerUserQuery({ query: transcription });
      setResults(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Voice Search Error',
        description: 'Failed to process audio. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <form onSubmit={handleTextSearch} className="flex items-center gap-2">
          <Input
            placeholder="Describe your computer issue..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow"
            disabled={isLoading || isRecording}
          />
          <VoiceRecorder
            onRecordingComplete={handleVoiceSearch}
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || isRecording || !query.trim()}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Search</span>
          </Button>
        </form>
        <div className="mt-6">
          {isLoading && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-6 w-3/4 rounded-md bg-muted animate-pulse" />
                <div className="h-4 w-1/2 rounded-md bg-muted animate-pulse" />
              </div>
              <div className="space-y-2">
                 <div className="h-4 w-full rounded-md bg-muted animate-pulse" />
                 <div className="h-4 w-full rounded-md bg-muted animate-pulse" />
                 <div className="h-4 w-5/6 rounded-md bg-muted animate-pulse" />
              </div>
            </div>
          )}
          {results && <AiResponseCard {...results} />}
        </div>
      </CardContent>
    </Card>
  );
}
