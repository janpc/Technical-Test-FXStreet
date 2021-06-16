function classifyPosts(posts) {
  const result = {
    latest: [],
    popular: []
  };

  posts.forEach((post) => {
    if (post.isPopular) {
      result.popular.push(post);
    } else {
      result.latest.push(post);
    }
  });

  return result;
}

// eslint-disable-next-line import/prefer-default-export
export { classifyPosts };
