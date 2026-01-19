import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className="block h-full">
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
      </Card>
    </Link>
  );
}
