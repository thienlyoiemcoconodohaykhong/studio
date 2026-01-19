import { BookHeart, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <BookHeart className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-headline font-bold whitespace-nowrap">Book Haven</h1>
          </div>

          <div className="w-full max-w-sm">
            <form className="w-full relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pr-10 h-9"
                aria-label="Search books"
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full w-9 text-muted-foreground hover:text-foreground" aria-label="Submit search">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
