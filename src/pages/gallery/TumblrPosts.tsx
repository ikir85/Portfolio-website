import { useGetTumblrPost } from "../../api/tumblr";

export default function TumblrPosts() {
  const { data, error, isLoading } = useGetTumblrPost();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {}.....</div>;

  return (
    <div className="flex w-full flex-wrap gap-6">
      {data?.map((item) => {
        console.log(item);
        return (
          <div className="w-fit" key={item.id}>
            <div dangerouslySetInnerHTML={{ __html: item.caption }} />
            {item.type === "video" ? (
              <video width="640" height="360" controls loop muted>
                <source src={item.video_url} type="video/mp4" />
              </video>
            ) : (
              <img src={item.photos[0].original_size.url} className="w-48" />
            )}
          </div>
        );
      })}
    </div>
  );
}
