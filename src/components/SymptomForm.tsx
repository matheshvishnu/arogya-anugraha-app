"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
  symptoms: z
    .string()
    .min(10, {
      message: "Please describe your symptoms in at least 10 characters.",
    })
    .max(1000, {
      message: "Symptoms cannot exceed 1000 characters.",
    }),
  medicalHistory: z
    .string()
    .max(1000, {
      message: "Medical history cannot exceed 1000 characters.",
    })
    .optional(),
});

export type SymptomFormValues = z.infer<typeof formSchema>;

interface SymptomFormProps {
  onSubmit: (data: SymptomFormValues) => void;
  isLoading: boolean;
}

export function SymptomForm({ onSubmit, isLoading }: SymptomFormProps) {
  const form = useForm<SymptomFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      symptoms: "",
      medicalHistory: "",
    },
  });

  return (
    <Card className="border-primary/20 shadow-lg shadow-primary/10">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Symptom Checker</CardTitle>
        <CardDescription>
          Please list all symptoms you are currently experiencing. Be as detailed as possible for the most accurate analysis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Current Symptoms</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., persistent headache, fatigue, sore throat for 3 days"
                      rows={5}
                      className="text-base focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Separate different symptoms with a comma.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="medicalHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Relevant Medical History (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., history of migraines, allergies to penicillin"
                      rows={3}
                      className="text-base focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Include any pre-existing conditions, allergies, or relevant medical history.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading} size="lg" className="text-base font-semibold">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Analyze Symptoms
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
