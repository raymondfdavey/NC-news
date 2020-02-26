import axios from "axios";

const commonStart = "https://nc-news-rfd.herokuapp.com/api/";

export const fetchAllArticles = () => {
  return axios
    .get("https://nc-news-rfd.herokuapp.com/articles/")
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchArticlesByParam = author => {
  return axios
    .get("https://nc-news-rfd.herokuapp.com/api/articles?author=" + author)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const articleVotePatch = (article_id, vote) => {
  const patchObject = { inc_votes: +vote };
  console.log(patchObject);
  return axios
    .patch(`${commonStart}articles/${article_id}`, patchObject)
    .then(({ data: { article } }) => article)
    .catch(err => console.dir(err));
};

export const commentVotePatch = (comment_id, vote) => {
  const patchObject = { inc_votes: +vote };
  console.log(patchObject);
  return axios
    .patch(`${commonStart}comments/${comment_id}`, patchObject)
    .then(({ data: { article } }) => article)
    .catch(err => console.dir(err));
};

export const postCommentToDatabase = (article_id, input, username) => {
  const patchObject = {
    username: username,
    body: input
  };
  console.log(patchObject);
  console.log(`${commonStart}articles/${article_id}/comments`);

  return axios
    .post(`${commonStart}articles/${article_id}/comments`, patchObject)
    .catch(err => console.dir(err));
};

export const deleteCommentFromDatabase = comment_id => {
  console.log(comment_id, "HEHRHEHRHEHE");
  return axios
    .delete(`${commonStart}comments/${comment_id}`)
    .catch(err => console.dir(err));
};
