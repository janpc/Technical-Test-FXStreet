export const LATEST = 'latest';
export const POPULAR = 'popular';

function classifyPosts(posts) {
  const result = {};

  result[LATEST] = [];
  result[POPULAR] = [];

  posts.forEach((post) => {
    if (post.isPopular) {
      result[POPULAR].push(post);
    } else {
      result[LATEST].push(post);
    }
  });

  return result;
}

// eslint-disable-next-line import/prefer-default-export
export { classifyPosts };
