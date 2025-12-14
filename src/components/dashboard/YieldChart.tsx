import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { date: "Jan", value: 1000 },
  { date: "Feb", value: 1200 },
  { date: "Mar", value: 1150 },
  { date: "Apr", value: 1600 },
  { date: "May", value: 2100 },
  { date: "Jun", value: 2305 },
];

export function YieldChart() {
  return (
    <Card className="col-span-2 lg:col-span-1 shadow-sm border-border/50">
      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
        <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Balance Growth</CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="h-[180px] sm:h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                stroke="#888888" 
                fontSize={10}
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#888888" 
                fontSize={10}
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value: number) => `$${value}`} 
                width={35}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '12px' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs sm:text-sm">
          <div className="text-muted-foreground">
            Projected annual yield
          </div>
          <div className="font-semibold text-green-600">
            +$96.81
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
