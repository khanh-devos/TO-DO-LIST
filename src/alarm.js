import song from './music/Chicago_Hard_To_Say_Im_Sorry.mp3';

export const addAudio = () => {
  const audio = `<audio id='audio-id' loop autoplay>
      <source src="${song}" type="audio/mpeg">
    </audio>
  `;
  const musicContainer = document.getElementById('music');
  if (musicContainer.childElementCount === 0) musicContainer.innerHTML = audio;

  const audioElement = document.getElementById('audio-id');
  audioElement.muted = true;
};

const alarm = () => {
  const audioElement = document.getElementById('audio-id');

  const endTimes = document.getElementsByClassName('time');
  const now = new Date();
  const time = now.getHours() + Math.round((now.getMinutes() * 10) / 60) / 10;

  Object.values(endTimes).forEach((item) => {
    const endHour = Number(item.value);

    if (time - endHour >= 0 && time - endHour <= 5) {
      item.style.backgroundColor = '#ff6b00';

      if (!item.getAttribute('data-set')) {
        audioElement.muted = false;

        setTimeout(() => {
          audioElement.muted = true;
          item.removeAttribute('data-set');
        }, 30 * 1000);
      } else {
        item.removeAttribute('data-set');
      }

      item.setAttribute('data-set', 'played');
    }
  });
};

export default alarm;