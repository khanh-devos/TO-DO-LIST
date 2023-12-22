

const alarm = () => {
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