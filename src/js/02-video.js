const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getCurrentTime().then(function (second) {
  console.log('title:', title);
});
