import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <Link to="/" aria-label="Luna by PM Lab — Home" className="flex min-w-0 shrink items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-luna text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="hidden truncate sm:inline">
            Luna<span className="font-normal text-muted-foreground"> by PM Lab</span>
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-3 sm:gap-6">
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
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
            size="sm"
            className="bg-gradient-luna px-3 text-primary-foreground transition hover:opacity-90 sm:h-10 sm:px-4"
          >
            <a href="https://luna.perimenopauselab.com/" target="_blank" rel="noopener noreferrer">
              <span className="sm:hidden">Start Entry</span>
              <span className="hidden sm:inline">Start Your First Entry</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}