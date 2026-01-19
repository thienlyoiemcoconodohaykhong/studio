import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { books } from '@/lib/books';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Header } from '@/components/header';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft className="mr-2" />
              Back to Library
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-1 lg:col-span-1">
            <div className="sticky top-24">
              <Card className="overflow-hidden shadow-lg">
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint={book.imageHint}
                  />
                </div>
              </Card>
              <h2 className="text-2xl lg:text-3xl font-headline font-bold mt-6 text-center">{book.title}</h2>
              <p className="text-lg text-muted-foreground mt-2 text-center">{book.author}</p>
              <Button asChild className="w-full mt-6" size="lg">
                <a href={book.downloadUrl} download>
                  <Download className="mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
             <Card className="h-[calc(100vh-15rem)]">
                <ScrollArea className="h-full rounded-lg">
                    <div className="p-6 sm:p-8 font-body text-base leading-relaxed text-foreground/90 text-justify whitespace-pre-wrap">
                        {book.content.split('\n\n').map((paragraph, index) => (
                            <p className="mb-6" key={index}>{paragraph}</p>
                        ))}
                    </div>
                </ScrollArea>
             </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
