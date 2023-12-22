import song from './imgs/Chicago_Hard_To_Say_Im_Sorry.mp3'

const alarm = () => {
  const audio = `<audio controls autoplay>
    <source src="${song}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>`;
  const musicContainer = document.getElementById('music');




  const endTimes = document.getElementsByClassName('time');
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let count = 0;

  Object.values(endTimes).forEach((item) => {
    const endHour = Number(item.value.replace('h', ''));
    
    if (hour === endHour && minute <= 50 ) {
      item.style.backgroundColor = '#ff6b00';
    }
  })

}

export default alarm;