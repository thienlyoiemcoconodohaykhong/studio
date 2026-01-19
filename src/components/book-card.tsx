import Image from 'next/image';
import type { Book } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-shadow hover:shadow-lg dark:hover:shadow-primary/20">
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          fill
          className="object-cover"
          data-ai-hint={book.imageHint}
        />
      </div>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-lg font-headline font-semibold leading-tight">{book.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="outline">
          <a href={book.downloadUrl} download>
            <Download className="mr-2" />
            Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
