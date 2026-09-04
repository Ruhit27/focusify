export default function ProjectsPage() {
  return (
    <div className="prose lg:prose-xl max-w-none bg-background text-foreground">
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>
      <p className="text-muted-foreground mb-6">
        No projects yet. Create your first project to get started.
      </p>
      <div className="flex flex-col items-center gap-4">
        <button className="rounded bg-primary/20 text-primary px-6 py-3 hover:bg-primary/10 transition-colors">
          Create Project
        </button>
      </div>
    </div>
  );
}