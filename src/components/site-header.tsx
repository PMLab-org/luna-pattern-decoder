import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-luna text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline">
            Luna<span className="font-normal text-muted-foreground"> by PM Lab</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/pricing"
            className="text-foreground/80 transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Pricing
          </Link>
          <Link
            to="/for-clinicians"
            className="text-foreground/80 transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            For Clinicians
          </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-luna text-primary-foreground transition hover:opacity-90"
          >
            <a href="/#start">Start Your First Entry</a>
          </Button>
        </div>
      </div>
    </header>
  );
}