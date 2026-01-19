import type { Book } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Whispers of Eternity',
    author: 'Elara Vance',
    coverImage: PlaceHolderImages[0].imageUrl,
    imageHint: PlaceHolderImages[0].imageHint,
    downloadUrl: '#',
  },
  {
    id: '2',
    title: 'Chronicles of the Void',
    author: 'Jaxson Reed',
    coverImage: PlaceHolderImages[1].imageUrl,
    imageHint: PlaceHolderImages[1].imageHint,
    downloadUrl: '#',
  },
  {
    id: '3',
    title: 'A.I. Ascendant',
    author: 'Lena Petrova',
    coverImage: PlaceHolderImages[2].imageUrl,
    imageHint: PlaceHolderImages[2].imageHint,
    downloadUrl: '#',
  },
  {
    id: '4',
    title: 'The Last Alchemist',
    author: 'Marcus Thorne',
    coverImage: PlaceHolderImages[3].imageUrl,
    imageHint: PlaceHolderImages[3].imageHint,
    downloadUrl: '#',
  },
  {
    id: '5',
    title: 'Sonnets of a Digital Soul',
    author: 'Orion Bell',
    coverImage: PlaceHolderImages[4].imageUrl,
    imageHint: PlaceHolderImages[4].imageHint,
    downloadUrl: '#',
  },
  {
    id: '6',
    title: 'Echoes of the Sunstone',
    author: 'Seraphina Frost',
    coverImage: PlaceHolderImages[5].imageUrl,
    imageHint: PlaceHolderImages[5].imageHint,
    downloadUrl: '#',
  },
];
