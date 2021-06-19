export const LATEST = 'latest';
export const POPULAR = 'popular';

function orderPosts(postsToOrder) {
  let posts = [...postsToOrder];

  posts = posts.sort((postA, postB) => {
    const dateA = new Date(postA.publicationTime);
    const dateB = new Date(postB.publicationTime);

    return dateB - dateA;
  });

  return posts;
}

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

  result[LATEST] = orderPosts(result[LATEST]);
  result[POPULAR] = orderPosts(result[POPULAR]);

  return result;
}

function twoCharacterNums(num) {
  if (num < 10) {
    return `0${num}`;
  }

  return num;
}

function formatDate(date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const myDate = new Date(date);

  const Month = months[myDate.getMonth()];
  const dd = twoCharacterNums(myDate.getDate());

  const hh = twoCharacterNums(myDate.getHours());
  const mm = twoCharacterNums(myDate.getMinutes());

  return `${Month} ${dd}, ${hh}:${mm}`;
}

export { classifyPosts, formatDate };
