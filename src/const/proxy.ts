// http://gh-trending-api.herokuapp.com has indeed a cors issue,
// and https://www.npmjs.com/package/github-trends-api workaround proposed by your manual doesn't work too, because git-hub.com has cors as well,
// probablu if I spanned a detached node.js server it would work, by setting my own cors proxy was faster solution for me, hope it works for you too :)
export const PROXY_URL =
  "https://eufu9rizek.execute-api.ap-northeast-1.amazonaws.com/dev/?url=";
