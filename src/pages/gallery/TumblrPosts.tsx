import { useGetTumblrPost } from "../../api/tumblr";

export default function TumblrPosts() {
  const { data, error, isLoading } = useGetTumblrPost();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {}.....</div>;

  return (
    <div className="flex w-full flex-wrap gap-x-8 gap-y-6 md:gap-y-14">
      {data?.map((item) => {
        console.log(item);
        return (
          <div
            className="flex w-full flex-col items-center gap-1.5 md:w-fit"
            key={item.id}
          >
            <div
              className="flex flex-col items-center sm:text-xl md:text-base"
              dangerouslySetInnerHTML={{ __html: item.caption }}
            />
            {item.type === "video" ? (
              <video width="640" height="360" controls loop muted>
                <source src={item.video_url} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.photos[0].original_size.url}
                className="w-full sm:w-1/2 md:w-48"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
