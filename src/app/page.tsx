"use client";

import { useState } from "react";
import type { AnalyzeSymptomsOutput } from "@/ai/flows/analyze-symptoms";
import { getAnalysis } from "@/app/actions";

import { Stethoscope, FileText, BotMessageSquare } from "lucide-react";

import { SymptomForm, type SymptomFormValues } from "@/components/SymptomForm";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { DisclaimerDialog } from "@/components/DisclaimerDialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

type AppState = "idle" | "loading" | "disclaimer" | "results" | "error";

export default function Home() {
  const [state, setState] = useState<AppState>("idle");
  const [analysisResult, setAnalysisResult] =
    useState<AnalyzeSymptomsOutput | null>(null);
  const { toast } = useToast();

  const handleAnalysis = async (data: SymptomFormValues) => {
    setState("loading");
    setAnalysisResult(null);

    const result = await getAnalysis(data.symptoms, data.medicalHistory);

    if (result.error || !result.data) {
      setState("error");
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description:
          result.error || "An unknown error occurred. Please try again.",
      });
      setState("idle");
      return;
    }

    setAnalysisResult(result.data);
    setState("disclaimer");
  };

  const handleDisclaimerAccept = () => {
    setState("results");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 border-b">
        <div className="container mx-auto flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold font-headline">MediScan</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-headline tracking-tight">
                Intelligent Symptom Analysis
              </h2>
              <p className="mt-2 text-muted-foreground">
                Enter your symptoms and let our AI provide you with a
                preliminary analysis.
              </p>
            </div>

            <SymptomForm
              onSubmit={handleAnalysis}
              isLoading={state === "loading"}
            />
            
            {state === "loading" && (
              <div className="space-y-6">
                <Skeleton className="h-10 w-1/3 mx-auto" />
                <div className="space-y-4">
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </div>
              </div>
            )}

            {state === "results" && analysisResult && (
              <ResultsDisplay results={analysisResult} />
            )}
          </div>
        </div>
      </main>
      
      <footer className="p-4 border-t text-center text-xs text-muted-foreground">
        <p>
          <span className="font-semibold">Disclaimer:</span> MediScan is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional for any health concerns.
        </p>
      </footer>
      
      <DisclaimerDialog
        open={state === "disclaimer"}
        onAccept={handleDisclaimerAccept}
      />
    </div>
  );
}
