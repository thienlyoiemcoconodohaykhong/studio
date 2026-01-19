import { Header } from '@/components/header';
import { BookCard } from '@/components/book-card';
import { books } from '@/lib/books';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © 2024 Book Haven. All Rights Reserved.
      </footer>
    </div>
  );
}
