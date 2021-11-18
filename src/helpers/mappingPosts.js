export const mappingPosts = ([posts, comments]) => {
  if (!posts || !comments) return;
  console.time("mapping posts and comments");
  const postsArray = [];

  const postsLength = posts.length;
  const commentsLength = comments.length;

  for (let i = 0; i < postsLength * 10; i++) {
    let obj, currentPostId, century;

    if (posts[i]) {
      obj = posts[i];
      currentPostId = obj.id;
    } else {
      obj = posts[i % postsLength];
      century = Math.floor(i / postsLength);
      currentPostId = obj.id + postsLength * century;
    }

    const postComments = comments.filter((item) => item.postId === obj.id);
    postsArray[i] = {
      ...obj,
      oldId: obj.id,
      id: currentPostId,
      comments: [
        ...postComments.map((item) => {
          return {
            ...item,
            id: i < postsLength ? item.id : item.id + commentsLength * century,
          };
        }),
      ],
    };
  }
  console.timeEnd("mapping posts and comments");
  return postsArray;
};
