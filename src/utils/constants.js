export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_IMG =
  "https://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const YOUTUBE_URL_1 = "https://www.youtube.com/embed/";

export const YOUTUBE_URL_2 = "?&autoplay=1&mute=1&loop=1&playlist=";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "te", name: "Telugu" },
  { identifier: "ta", name: "Tamil" },
  { identifier: "ml", name: "Malayalam" },
  { identifier: "kn", name: "Kannada" },
  { identifier: "mr", name: "Marathi" },
  { identifier: "gu", name: "Gujarati" },
];

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
  },
};
