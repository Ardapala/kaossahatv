const sources = {
  kanal1: "https://example.com/stream1.m3u8",
  kanal2: "http://iptv.am000.tv:8000/live/add17/add17/294.ts"
};

const player = document.getElementById('player');
player.src = sources.kanal1;

function changeChannel(channel){
  player.src = sources[channel];
  player.play();
}
