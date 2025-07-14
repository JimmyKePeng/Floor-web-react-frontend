import { useEffect, useRef, useState } from "react";

function Videos() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const playerRef = useRef(null);
  const youtubeRef = useRef(null);

  const videos = ["KH0DIyprIOg", "vsaYc_qQ6Jw", "XYYrwWGphQA"];

  // Load the YouTube IFrame API script
  useEffect(() => {
    if (window.YT) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = createPlayer;
      document.body.appendChild(tag);
    }
  }, []);

  // Function to create the YouTube player
  const createPlayer = () => {
    playerRef.current = new window.YT.Player(youtubeRef.current, {
      videoId: videos[currentVideo],
      events: {
        onStateChange: onPlayerStateChange,
      },
      playerVars: {
        autoplay: 1,
        mute: 1,
      },
    });
  };

  // Detect when video ends (YT.PlayerState.ENDED === 0)
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }
  };

  // Load the new video when currentVideo changes
  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById(videos[currentVideo]);
    }
  }, [currentVideo]);

  return (
    <div className="flex justify-center items-center m-20">
      <div id="player" ref={youtubeRef}></div>
    </div>
  );
}

export default Videos;
