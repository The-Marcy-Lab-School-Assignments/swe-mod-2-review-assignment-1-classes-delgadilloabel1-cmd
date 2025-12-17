// Problem 1: Inheritance and Polymorphism - Media Player
// Implement your MediaItem, Song, Podcast, and Audiobook classes below
class MediaItem {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }
  play() {
    return `Playing: ${this.title}`;
  }
  getFormattedDuration() {
    let mins = Math.floor(this.duration / 60);
    let secs = this.duration % 60;
    // let formattedMins = String(mins).padStart(2, `0`);
    let formattedSecs = String(secs).padStart(2, `0`);
    return `${mins}:${formattedSecs}`;
  }
}

class Song {}

class Podcast {}

class Audiobook {}

const test = () => {};

module.exports = { MediaItem, Song, Podcast, Audiobook };
