const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl font-bold w-1/4">{title}</h1>

      <p className="my-6 w-1/4 line-clamp-4 font-semibold">{overview}</p>
      <div className="font-semibold">
        <button className="bg-white text-black py-4 px-12 text-lg rounded-lg hover:bg-opacity-80">
          <img
            className="inline-block -mt-1"
            src="./play-button-arrowhead.png"
            alt="play-icon"
          />{" "}
          Play
        </button>
        <button className="mx-3 bg-zinc-800 py-4 px-8 opacity-50 text-lg rounded-lg hover:bg-opacity-90">
          <img className="inline-block " src="./info.png" alt="info-icon" />{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
