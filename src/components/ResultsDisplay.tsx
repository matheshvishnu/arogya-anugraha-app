"use client";
import type { AnalyzeSymptomsOutput } from "@/ai/flows/analyze-symptoms";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ArrowRight, Pill, User, Hospital } from "lucide-react";

interface ResultsDisplayProps {
  results: AnalyzeSymptomsOutput;
}

const chartConfig = {
  confidence: {
    label: "Confidence",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  const chartData = results.conditions.map((c) => ({
    name: c.condition,
    confidence: Math.round(c.confidence * 100),
  }));

  const getConfidenceBadge = (confidence: number) => {
    if (confidence > 0.7)
      return <Badge variant="destructive">High Confidence</Badge>;
    if (confidence > 0.4)
      return <Badge variant="secondary">Medium Confidence</Badge>;
    return <Badge variant="outline">Low Confidence</Badge>;
  };

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <Card>
        <CardHeader>
          <CardTitle>Potential Conditions Analysis</CardTitle>
          <CardDescription>
            Based on the symptoms provided, here are the potential conditions our AI model has identified, ranked by confidence.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-[250px]">
            <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <YAxis
                dataKey="name"
                type="category"
                width={120}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={{ fill: "hsl(var(--muted))" }}
                content={<ChartTooltipContent 
                    formatter={(value) => `${value}%`}
                    indicator="dot" 
                  />}
              />
              <Bar dataKey="confidence" fill="var(--color-confidence)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        {results.conditions.map(({ condition, confidence }) => (
          <Card key={condition}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">{condition}</CardTitle>
              {getConfidenceBadge(confidence)}
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">{`${Math.round(confidence * 100)}%`}</p>
                <p className="text-xs text-muted-foreground">Confidence Score</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-secondary/50">
        <CardHeader>
            <CardTitle>Next Steps & Recommendations</CardTitle>
            <CardDescription>
                This analysis is not a diagnosis. We strongly recommend consulting a healthcare professional for an accurate assessment.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader>
                    <User className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Consult a Doctor</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Discuss your symptoms with a general practitioner or a specialist.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" className="p-0">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Hospital className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Find a Clinic</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Locate nearby clinics or hospitals for an in-person consultation.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" className="p-0">Find Nearby <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Pill className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Health Resources</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Explore reputable health websites like WebMD or Mayo Clinic.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" className="p-0">Explore <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardFooter>
            </Card>
        </CardContent>
      </Card>

    </div>
  );
}
