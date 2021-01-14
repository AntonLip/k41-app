import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton, VolumeMenuButton } from 'video-react';
import { Button } from 'reactstrap';
import { className } from './../../../node_modules/video-react/styles/scss/video-react.scss'
import { getVideoCourseAPI } from '../../API/VideoCourse';
const sources = {
  bunnyMovie: 'http://k41.kafedra41.local/Video/Vieo/GetVideos?name=Content/Entered.mp4',
};
const SourseButton = (props) => {
  if (props.u != undefined) {
    return (
      <Button onClick={props.funncInClick(props.u.id)} className="mr-3">
        {props.u.name}
      </Button>);
  }
}


export class PlayerControlExample extends Component {
  constructor(props, context) {
    super(props, context);
   
    if (props.sources != undefined) {
      this.state = {
        source: props.sources[0],
        sources: props.sources
      };
    }
    else {
      this.state = {
        source: sources.bunnyMovie,
        sources: []
      };
    }
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
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    getVideoCourseAPI(this.props.id).then((data) => {
      this.setState({
        sources: [...data.videos]
      })
    }

    )
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

  changeSource(u) {
    return () => {      
      var regExp = new RegExp(u.id, "i");      
      let video = this.props.sources.find(function (item, index, array) {
        var guid = "{" + item.id + "}"
        return regExp.test(guid);
      });
      if (video != undefined) {
        this.setState({
          source: video
        });
        this.player.load();
      }

    };
  }

  render() {
    debugger
    let AllSeries;
    this.state.sources != undefined ? AllSeries = this.state.sources.map(
      (u) => {
        return (
          <Button onClick={this.changeSource(u)} className="mr-3">
            {u.name}
          </Button>)
      }) :
      AllSeries = () => { return <SourseButton /> };
      let path ;
      this.state.source.path == undefined ?  path="null" : path=this.state.source.path 
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
          <source src={"http://k41.kafedra41.local/Video/Vieo/GetVideos?name=" + path} />

          <BigPlayButton position="center" />
          <ControlBar autoHide={false} className="my-class">
            <VolumeMenuButton vertical />
          </ControlBar>
        </Player>
        <div className="pb-3">
          {AllSeries}
        </div>
      </div>
    );
  }
}