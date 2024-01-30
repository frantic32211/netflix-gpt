const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold w-1/4">{title}</h1>

      <p className="my-6 w-1/4 line-clamp-4 font-semibold">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white py-4 px-12 text-lg rounded-md">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-4 px-12 text-lg rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
