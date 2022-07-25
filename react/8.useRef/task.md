Add ability to control the video playback speed. Use `playbackRate` property to change the current speed.

TIP: you need to modify 4 lines of code.

```jsx
import { useEffect, useState } from "react"; // 1

export default function App() {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  // 2

  useEffect(() => {
    console.log("Playback speed is", playbackSpeed);
    // 3
  }, [playbackSpeed]);

  return (
    <>
      <video
        src="wtf.mp4"
        controls
        autoPlay
        muted
        // 4
      ></video>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={playbackSpeed}
        onChange={(e) => setPlaybackSpeed(e.target.value)}
      />
    </>
  );
}
```
