"use server";

import { analyzeSymptoms, AnalyzeSymptomsOutput } from "@/ai/flows/analyze-symptoms";

export async function getAnalysis(
  symptoms: string,
  medicalHistory: string
): Promise<{ data?: AnalyzeSymptomsOutput; error?: string }> {
  try {
    if (!symptoms) {
      return { error: "Symptoms are required." };
    }

    const output = await analyzeSymptoms({ symptoms, medicalHistory });
    if (!output || !output.conditions) {
        return { error: "AI model did not return a valid response." };
    }
    
    // Sort conditions by confidence score in descending order
    output.conditions.sort((a, b) => b.confidence - a.confidence);

    return { data: output };
  } catch (e: any) {
    console.error("Error analyzing symptoms:", e);
    return {
      error: e.message || "An unexpected error occurred during analysis.",
    };
  }
}
