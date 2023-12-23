import song from './music/Chicago_Hard_To_Say_Im_Sorry.mp3';

const alarm = () => {
  const audio = `<audio controls autoplay>
        <source src="${song}">
        Your browser does not support the audio element.
  </audio>`;
  const musicContainer = document.getElementById('music');

  const endTimes = document.getElementsByClassName('time');
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  Object.values(endTimes).forEach((item) => {
    const endHour = Number(item.value);

    if (hour === endHour && minute <= 30) {
      item.style.backgroundColor = '#ff6b00';

      if (!item.getAttribute('data-set')) {
        musicContainer.innerHTML = audio;

        setTimeout(() => {
          musicContainer.innerHTML = '';
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