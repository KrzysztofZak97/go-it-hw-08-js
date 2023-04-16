import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const saveTime = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('play', saveTime);

player.setCurrentTime().then(function (seconds) {
  localStorage.getItem('videoplayer-current-time');
});
