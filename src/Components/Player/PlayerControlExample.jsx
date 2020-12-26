import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton, VolumeMenuButton } from 'video-react';
import { Button } from 'reactstrap';
import { className } from './../../../node_modules/video-react/styles/scss/video-react.scss'
const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'https://localhost:44383/Vieo/GetVideos?name=Entered.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

export class PlayerControlExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.player.load();
    };
  }

  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          fluid={false}
          width={640}
          height={480}
          >
            
          <source src={this.state.source} />
          <width width={320}/>
          <width width={320}/>
          <BigPlayButton position="center" />
          <ControlBar autoHide={false} className="my-class">
            <VolumeMenuButton vertical />

          </ControlBar>
        </Player>
        <div className="pb-3">
          <Button onClick={this.changeSource('sintelTrailer')} className="mr-3">
            Sintel teaser
          </Button>
          <Button onClick={this.changeSource('bunnyTrailer')} className="mr-3">
            Bunny trailer
          </Button>
          <Button onClick={this.changeSource('bunnyMovie')} className="mr-3">
            Bunny movie
          </Button>
        </div>
        <div>State</div>
      </div>
    );
  }
}