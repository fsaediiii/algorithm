interface Video {
  play(): string;
}

class VideoPlay implements Video {
  constructor(private name: string) {
    console.log("Video is loading: " + this.name);
  }

  play(): string {
    return "Video is playing: " + this.name;
  }
}

class VideoProxy implements Video {
  private realVideo: Video | null = null;

  constructor(private filename: string) {}

  play(): string {
    if (!this.realVideo) {
      this.realVideo = new VideoPlay(this.filename);
    }
    return this.realVideo.play();
  }
}

// Client
const video1: Video = new VideoProxy("video1.mp4");
const video2: Video = new VideoProxy("video2.mp4");

console.log(video1.play());
console.log(video2.play());
