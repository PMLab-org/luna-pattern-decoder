import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <span>© {new Date().getFullYear()} PM Lab. All rights reserved.</span>
          <span className="text-xs">Luna is clinical decision support, not a diagnostic tool.</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link to="/legal" className="transition hover:text-foreground">Privacy</Link>
          <Link to="/legal" className="transition hover:text-foreground">Terms</Link>
          <Link to="/faq" className="transition hover:text-foreground">FAQ</Link>
          <Link to="/for-clinicians" className="transition hover:text-foreground">
            For Clinicians
          </Link>
        </nav>
      </div>
    </footer>
  );
}