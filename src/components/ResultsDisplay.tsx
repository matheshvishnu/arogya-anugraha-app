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
      return <Badge variant="destructive" className="text-sm">High</Badge>;
    if (confidence > 0.4)
      return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200 text-sm">Medium</Badge>;
    return <Badge variant="outline" className="text-sm">Low</Badge>;
  };

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Potential Conditions Analysis</CardTitle>
          <CardDescription>
            Based on the symptoms provided, here are the potential conditions our AI model has identified, ranked by confidence.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-[300px]">
            <BarChart data={chartData} layout="vertical" margin={{ left: 30, right: 10 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <YAxis
                dataKey="name"
                type="category"
                width={150}
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
              <Bar dataKey="confidence" fill="var(--color-confidence)" radius={4} barSize={20} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        {results.conditions.map(({ condition, confidence }) => (
          <Card key={condition} className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-xl font-medium">{condition}</CardTitle>
                <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">{`${Math.round(confidence * 100)}%`}</p>
                    <p className="text-xs text-muted-foreground">Confidence Score</p>
                </div>
              </div>
              <div className="text-right">
                {getConfidenceBadge(confidence)}
                <p className="text-xs text-muted-foreground mt-1">Confidence</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="bg-accent">
        <CardHeader>
            <CardTitle className="text-2xl">Next Steps & Recommendations</CardTitle>
            <CardDescription>
                This analysis is not a diagnosis. We strongly recommend consulting a healthcare professional for an accurate assessment.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-2">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Consult a Doctor</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">Discuss your symptoms with a general practitioner or a specialist.</p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button variant="outline">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardFooter>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="items-center text-center">
                     <div className="p-3 bg-primary/10 rounded-full mb-2">
                        <Hospital className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Find a Clinic</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">Locate nearby clinics or hospitals for an in-person consultation.</p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button variant="outline">Find Nearby <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardFooter>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-2">
                        <Pill className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Health Resources</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">Explore reputable health websites like WebMD or Mayo Clinic.</p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button variant="outline">Explore <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardFooter>
            </Card>
        </CardContent>
      </Card>

    </div>
  );
}
