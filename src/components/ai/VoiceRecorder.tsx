"use client";

import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, StopCircle, Square } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VoiceRecorderProps {
  onRecordingComplete: (audioDataUri: string) => void;
  isRecording: boolean;
  setIsRecording: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
}

export default function VoiceRecorder({ onRecordingComplete, isRecording, setIsRecording, disabled }: VoiceRecorderProps) {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setPermission(true);
        mediaRecorder.current = new MediaRecorder(stream);
        setupMediaRecorder();
      } catch (err) {
        console.error("Microphone permission denied:", err);
        setPermission(false);
        toast({
            variant: "destructive",
            title: "Microphone Access Denied",
            description: "Please allow microphone access in your browser settings to use voice search."
        });
      }
    } else {
        toast({
            variant: "destructive",
            title: "Unsupported Browser",
            description: "Voice recording is not supported by your browser."
        });
    }
  };

  const setupMediaRecorder = () => {
    if (!mediaRecorder.current) return;
    mediaRecorder.current.onstart = () => {
      audioChunks.current = [];
    };
    mediaRecorder.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = () => {
        const base64Data = reader.result as string;
        onRecordingComplete(base64Data);
      };
    };
  };

  const startRecording = () => {
    if (!permission || !mediaRecorder.current) {
        getMicrophonePermission();
        return;
    };
    setIsRecording(true);
    mediaRecorder.current.start();
  };

  const stopRecording = () => {
    if (!mediaRecorder.current) return;
    setIsRecording(false);
    mediaRecorder.current.stop();
  };

  const handleToggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <Button type="button" size="icon" onClick={handleToggleRecording} disabled={disabled || !permission} variant={isRecording ? 'destructive' : 'outline'}>
      {isRecording ? <Square className="h-4 w-4 animate-pulse" /> : <Mic className="h-4 w-4" />}
      <span className="sr-only">{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
    </Button>
  );
}
