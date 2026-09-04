export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-2xl font-semibold mb-4">Today\u0027s Mission</h1>
      <p className="text-muted-foreground mb-8">
        Start a focus session to record your progress, mood, and insights.
      </p>
      <div className="flex flex-col items-center gap-4">
        <button className="rounded bg-primary/20 text-primary px-6 py-3 hover:bg-primary/10 transition-colors">
          Start Focus Session
        </button>
        <button className="rounded border border-border-accent/20 px-6 py-3 hover:bg-primary/5 transition-colors">
          Browse Projects
        </button>
      </div>
    </div>
  );
}