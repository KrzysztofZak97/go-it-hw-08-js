import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTime = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds.seconds);
}, 1000);

player.on('timeupdate', saveTime);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
