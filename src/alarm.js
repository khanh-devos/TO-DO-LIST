import song from './music/Chicago_Hard_To_Say_Im_Sorry.mp3';

export const addAudio = () => {
  const audio = `<audio id='audio-id' loop>
      <source src="${song}" type="audio/mpeg">
    </audio>
    </br>
    <a href="chrome://discards/"target="_blank">chrome://discards/</a>
  `;
  const musicContainer = document.getElementById('music');
  if (musicContainer.childElementCount === 0) musicContainer.innerHTML = audio;
};

const alarm = () => {
  const audioElement = document.getElementById('audio-id');

  const endTimes = document.getElementsByClassName('time');
  const now = new Date();
  const time = now.getHours() + Math.round((now.getMinutes() * 10) / 60) / 10;

  Object.values(endTimes).forEach((item) => {
    const endHour = Number(item.value);

    // Check the checkbox
    const check = document.querySelector(`.form2-input[type="checkbox"][name="${item.name}"]`);

    if (time - endHour >= 0 && time - endHour <= 5 && !check.checked) {
      item.style.backgroundColor = '#ff6b00';

      if (!item.getAttribute('data-set')) {
        audioElement.play();

        const alarmInterval = setInterval(() => {
          if (check.checked) audioElement.pause();
          else audioElement.play();
        }, 1000);

        setTimeout(() => {
          audioElement.pause();
          item.removeAttribute('data-set');
          clearInterval(alarmInterval);
        }, 30 * 1000);
      } else {
        item.removeAttribute('data-set');
      }

      item.setAttribute('data-set', 'played');
    }
  });
};

export default alarm;