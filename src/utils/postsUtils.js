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
