import '@testing-library/jest-dom/extend-expect';

import { classifyPosts } from './postsUtils';

describe('Classify posts tests', () => {
  it('Empty arrays inside an object as a result of calling the function with empty array', () => {
    const result = {
      latest: [],
      popular: []
    };

    expect(classifyPosts([])).toEqual(result);
  });

  it('Order posts by popularity', () => {
    const posts = [
      { title: 'is popular', isPopular: true },
      { title: "isn't popular", isPopular: false },
      { title: 'dont know if its popular' }
    ];
    const result = {
      latest: [
        { title: "isn't popular", isPopular: false },
        { title: 'dont know if its popular' }
      ],
      popular: [{ title: 'is popular', isPopular: true }]
    };

    expect(classifyPosts(posts)).toEqual(result);
  });
});
