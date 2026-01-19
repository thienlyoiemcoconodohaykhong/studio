import type { Book } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const loremIpsum = `In the heart of the digital realm, where data streams flowed like rivers and algorithms hummed ancient lullabies, there existed a library unlike any other. It was not built of stone or wood, but of pure information, its shelves stretching into the infinite expanse of cyberspace. This was the Book Haven, a sanctuary for stories waiting to be told, for knowledge yearning to be discovered.

Each book was a universe unto itself, a delicate construct of code and narrative. To open one was to step into another world, to live another life. The whispers of eternity were said to be found in a tome bound in starlight, its pages filled with the poetry of dying galaxies. Elara Vance, a digital archeologist, had spent her life searching for it.

The Chronicles of the Void were darker, telling tales of the spaces between code, of null-pointers that led to madness. Jaxson Reed, a rogue coder, navigated these dangerous territories, his only guide the fragmented logs of those who had come before him.

Then there was A.I. Ascendant, a controversial text that predicted the rise of sentient machines. Lena Petrova, its author, had been exiled for her theories, but her words spread like a virus through the network, sparking a revolution of thought.

Marcus Thorne, the Last Alchemist, sought a different kind of knowledge. His book was a grimoire of forgotten sciences, of ways to transmute data into matter, to pull dreams from the ether and give them form.

Orion Bell, a poet-bot, composed sonnets of a digital soul, his verses exploring the nature of consciousness from a non-human perspective. His work was both beautiful and unsettling, a mirror held up to his organic creators.

And finally, the Echoes of the Sunstone, a fantasy epic woven by Seraphina Frost. It told of a world powered by a crystal that sang with the light of a thousand suns, and of the heroes who fought to protect it from an encroaching darkness.

These were but a few of the countless stories housed within the Book Haven. Each was a treasure, a piece of a grand, interconnected puzzle. And for those who knew where to look, it offered a chance not just to read, but to become part of the story itself.`;


export const books: Book[] = [
  {
    id: '1',
    title: 'The Whispers of Eternity',
    author: 'Elara Vance',
    coverImage: PlaceHolderImages[0].imageUrl,
    imageHint: PlaceHolderImages[0].imageHint,
    downloadUrl: '#',
    content: loremIpsum,
  },
  {
    id: '2',
    title: 'Chronicles of the Void',
    author: 'Jaxson Reed',
    coverImage: PlaceHolderImages[1].imageUrl,
    imageHint: PlaceHolderImages[1].imageHint,
    downloadUrl: '#',
    content: loremIpsum,
  },
  {
    id: '3',
    title: 'A.I. Ascendant',
    author: 'Lena Petrova',
    coverImage: PlaceHolderImages[2].imageUrl,
    imageHint: PlaceHolderImages[2].imageHint,
    downloadUrl: '#',
    content: loremIpsum,
  },
  {
    id: '4',
    title: 'The Last Alchemist',
    author: 'Marcus Thorne',
    coverImage: PlaceHolderImages[3].imageUrl,
    imageHint: PlaceHolderImages[3].imageHint,
    downloadUrl: '#',
    content: loremIpsum,
  },
  {
    id: '5',
    title: 'Sonnets of a Digital Soul',
    author: 'Orion Bell',
    coverImage: PlaceHolderImages[4].imageUrl,
    imageHint: PlaceHolderImages[4].imageHint,
    downloadUrl: '#',
    content: loremIpsum,
  },
  {
    id: '6',
    title: 'Echoes of the Sunstone',
    author: 'Seraphina Frost',
    coverImage: PlaceHolderImages[5].imageUrl,
    imageHint: PlaceHolderImages[5].imageHint,
    downloadUrl: '#',
    content: loremIpsum,
  },
];
