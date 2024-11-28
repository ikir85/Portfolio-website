import axios from "axios";
import { useQuery } from "react-query";

interface TumblrPostVideo {
  id: number;
  type: "video";
  video_url: string;
  caption: string;
}

interface TumblrPhoto {
  original_size: {
    url: string;
    width: number;
    height: number;
  };
}

interface TumblrPostPhoto {
  id: number;
  caption: string;
  type: "photo";
  photos: TumblrPhoto[];
}

interface TumblrPostResponse {
  response: { posts: (TumblrPostPhoto | TumblrPostVideo)[] };
}

const API_KEY = "q7uFFUkE6skPijknipbUQpb1HZOnfI0QbOgLSSXLH8f2M7Ow7B";
const BLOG_NAME = "riki-tinoza";

export const useGetTumblrPost = () =>
  useQuery({
    queryKey: ["tumblrPosts"],
    queryFn: () =>
      axios
        .get<TumblrPostResponse>(
          `https://api.tumblr.com/v2/blog/${BLOG_NAME}/posts`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        )
        .then((res) => res.data.response.posts),
  });
