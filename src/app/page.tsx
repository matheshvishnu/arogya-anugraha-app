"use client";

import { useState } from "react";
import type { AnalyzeSymptomsOutput } from "@/ai/flows/analyze-symptoms";
import { getAnalysis } from "@/app/actions";

import { Stethoscope } from "lucide-react";

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
      <header className="p-4 border-b bg-card shadow-sm sticky top-0 z-20">
        <div className="container mx-auto flex items-center gap-4">
          <div className="p-3 bg-primary/20 text-primary rounded-lg">
            <Stethoscope className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Arogya Anugraha</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Intelligent Symptom Analysis
              </h2>
              <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Enter your symptoms and let our AI provide you with a
                preliminary analysis of potential conditions. This is not a substitute for professional medical advice.
              </p>
            </div>

            <SymptomForm
              onSubmit={handleAnalysis}
              isLoading={state === "loading"}
            />
            
            {state === "loading" && (
              <div className="space-y-6">
                 <div className="space-y-4">
                  <Skeleton className="h-40 w-full" />
                  <Skeleton className="h-10 w-1/4 ml-auto" />
                </div>
              </div>
            )}

            {state === "results" && analysisResult && (
              <ResultsDisplay results={analysisResult} />
            )}
          </div>
        </div>
      </main>
      
      <footer className="p-6 mt-16 bg-card border-t text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>
            <span className="font-semibold">Disclaimer:</span> Arogya Anugraha is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional for any health concerns.
          </p>
          <p className="mt-2 text-xs">&copy; {new Date().getFullYear()} Arogya Anugraha. All Rights Reserved.</p>
        </div>
      </footer>
      
      <DisclaimerDialog
        open={state === "disclaimer"}
        onAccept={handleDisclaimerAccept}
      />
    </div>
  );
}
