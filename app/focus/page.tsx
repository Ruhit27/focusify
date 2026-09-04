export default function FocusPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-2xl font-semibold mb-4">Focus Session</h1>
      <p className="text-muted-foreground mb-8">
        Start a timer to track your focused work.
      </p>
      <div className="flex flex-col items-center gap-4">
        <button className="rounded bg-primary/20 text-primary px-6 py-3 hover:bg-primary/10 transition-colors">
          Start Timer
        </button>
      </div>
    </div>
  );
}