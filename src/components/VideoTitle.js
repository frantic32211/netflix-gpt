const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-12 absolute text-white  ">
      <h1 className="text-4xl font-bold w-1/4">{title}</h1>

      <p className="my-6 w-1/4 line-clamp-4 font-semibold">{overview}</p>
      <div className="font-semibold">
        <button className="bg-white text-black py-2 px-10 text-lg rounded-md hover:bg-opacity-80">
          <img
            className="inline-block -mt-1"
            src="./play-logo.png"
            alt="play-icon"
          />{" "}
          Play
        </button>
        <button className="mx-4 bg-neutral-600 py-2 px-8 opacity-80 text-lg rounded-lg hover:bg-opacity-80">
          <img
            className="inline-block w-5 -mt-1"
            src="./info-logo.png"
            alt="info-icon"
          />
          {"  "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
