export const getMorePosts = (allPosts, visiblePosts) => {
  const visiblePostsLength = visiblePosts.length;
  if (allPosts.length === visiblePostsLength) return;

  return allPosts.slice(visiblePostsLength, visiblePostsLength + 50);
};
