export default function InsightsPage() {
  return (
    <div className="prose lg:prose-xl max-w-none bg-background text-foreground">
      <h1 className="text-2xl font-semibold mb-4">Insights</h1>
      <p className="text-muted-foreground mb-6">
        Focus and mood patterns over time.
      </p>
      <div className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground">
          No data yet. Complete focus sessions to see insights.
        </p>
      </div>
    </div>
  );
}