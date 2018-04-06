// @flow
import type { Author, Quote, QuoteMap, DeskData } from './types';

const jake: Author = {
  id: '1',
  name: 'jake',
  url: 'http://adventuretime.wikia.com/wiki/Jake',
  avatarUrl: 'https://68.media.tumblr.com/avatar_1f7bdbbeb59c_128.png',
};

const BMO: Author = {
  id: '2',
  name: 'BMO',
  url: 'http://adventuretime.wikia.com/wiki/BMO',
  avatarUrl: 'https://68.media.tumblr.com/avatar_1a34fe6de498_128.png',
};

const finn: Author = {
  id: '3',
  name: 'Finn',
  url: 'http://adventuretime.wikia.com/wiki/Finn',
  avatarUrl: 'https://68.media.tumblr.com/avatar_09404f3287c6_128.png',
};

const princess: Author = {
  id: '4',
  name: 'Princess bubblegum',
  url: 'http://ssss',
  avatarUrl: 'https://68.media.tumblr.com/avatar_ec98529441c4_128.png',
};

const hzkto: Author = {
  id: '5',
  name: 'hzkto',
  url: 'http://ssss',
  avatarUrl: 'https://68.media.tumblr.com/avatar_ec98529441c4_128.png',
};

export const authors: Author[] = [
  jake, BMO, finn, princess, hzkto
];

export const quotes: Quote[] = [
  {
    id: '1',
    content: 'Sometimes life is scary and dark',
    url: 'https://github.com/facebook/flow',
    authorId: '1',
  },
  {
    id: '2',
    content: 'Sucking at something is the first step towards being sorta good at something.',
    url: 'https://github.com/facebook/flow',
    authorId: '2',
  },
  {
    id: '3',
    content: 'You got to focus on what\'s real, man',
    url: 'https://github.com/facebook/flow',
    authorId: '3',
  },
  {
    id: '4',
    content: 'Is that where creativity comes from? From sad biz?',
    url: 'https://github.com/facebook/flow',
    authorId: '5',
  },
  {
    id: '5',
    content: 'Homies help homies. Always',
    url: 'https://github.com/facebook/flow',
    authorId: '4',
  },
  {
    id: '6',
    content: 'Responsibility demands sacrifice',
    url: 'https://github.com/facebook/flow',
    authorId: '3',
  },
  {
    id: '7',
    content: 'That\'s it! The answer was so simple, I was too smart to see it!, That\'s it! The answer was so simple, I was too smart to see it!, That\'s it! The answer was so simple, I was too smart to see it!, That\'s it! The answer was so simple, I was too smart to see it!',
    url: 'https://github.com/facebook/flow',
    authorId: '2',
  },
  {
    id: '8',
    content: 'People make mistakes. It’s a part of growing up',
    authorId: '3',
    url: 'https://github.com/facebook/flow',
  },
  {
    id: '9',
    content: 'Don\'t you always call sweatpants \'give up on life pants,\' Jake?',
    authorId: '5',
    url: 'https://github.com/facebook/flow',
  },
  {
    id: '10',
    content: 'I should not have drunk that much tea!',
    authorId: '3',
    url: 'https://github.com/facebook/flow',
  },
  {
    id: '11',
    content: 'Please! I need the real you!',
    authorId: '2',
    url: 'https://github.com/facebook/flow',
  },
  {
    id: '12',
    content: 'Haven\'t slept for a solid 83 hours, but, yeah, I\'m good.',
    authorId: '1',
    url: 'https://github.com/facebook/flow',
  },
  {
    id: '12',
    content: 'Haven\'t slept for a solid 83 hours, but, yeah, I\'m good.',
    authorId: '4',
    url: 'https://github.com/facebook/flow',
  },
];

let idCount: number = 0;

export const getQuotes = (count: number): Quote[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: Quote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomAuthors: Author = authors[Math.floor(Math.random() * authors.length)];
    const custom: Quote = {
      id: `quote-${idCount++}`,
      content: random.content,
      authorId: randomAuthors.id,
      url: random.url
    };

    return custom;
  });

export const getAuthors = (count: number): Author[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: Author = authors[Math.floor(Math.random() * authors.length)];

    const custom: Author = {
      id: `author-${idCount++}`,
      name: random.name,
      avatarUrl: random.avatarUrl,
      url: random.url,
    };

    return custom;
  });

// const getByAuthor = (author: Author, items: Quote[]): Quote[] =>
//   items.filter((quote: Quote) => quote.author === author);

// export const authorQuoteMap: QuoteMap =
//   authors.reduce((previous: QuoteMap, author: Author) => ({
//     ...previous,
//     [author.name]: getByAuthor(author, quotes),
//   }), {});

export const generateQuoteMap = (total: number): QuoteMap => authors.reduce(
  (previous: QuoteMap, author: Author) => ({
    ...previous,
    [author.name]: getQuotes(total / authors.length),
  }),
  {}
);

export const getDeskData = (total: number): DeskData => ({
  quotes: generateQuoteMap(total),
  authors: authors.reduce((prev, author) => ({
    ...prev,
    [author.id]: author
  }), {})
});