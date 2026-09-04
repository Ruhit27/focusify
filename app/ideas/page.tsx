export default function IdeasPage() {
  return (
    <div className="prose lg:prose-xl max-w-none bg-background text-foreground">
      <h1 className="text-2xl font-semibold mb-4">Idea Vault</h1>
      <p className="text-muted-foreground mb-6">
        Capture ideas without leaving your task.
      </p>
      <div className="flex flex-col items-center gap-4">
        <button className="rounded bg-primary/20 text-primary px-6 py-3 hover:bg-primary/10 transition-colors">
          Add Idea
        </button>
      </div>
    </div>
  );
}