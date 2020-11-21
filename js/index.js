class CountdownTimer {
  
  constructor(options) {
    this.selector = options.selector;
    this.targetDate = options.targetDate; 
  }

  changeTime() {
    const refs = document.querySelector(`${this.selector}`);
    
    const daysRef = refs.querySelector('[data-value = "days"]');
    const hoursRef = refs.querySelector('[data-value = "hours"]');
    const minsRef = refs.querySelector('[data-value = "mins"]');
    const secsRef = refs.querySelector('[data-value = "secs"]');

    return {daysRef, hoursRef, minsRef, secsRef}
  }



  updateClockface(time) {
    this.updateTime(time);
    setInterval(() => {
      this.updateTime(time);
    }, 1000)
  }

  updateTime(time) {
    const deltaTime = time - new Date();

      const refs = this.changeTime();

      const days = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));

      refs.daysRef.textContent = days;
      refs.hoursRef.textContent = hours;
      refs.minsRef.textContent = mins;
      refs.secsRef.textContent = secs;
    
      function pad(value) {
        return String(value).padStart(2, '0');
      }
  }
}



const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 17, 2020'),
});

timer.updateClockface(timer.targetDate);

console.log(new Date('Dec 17, 2020').getTime());


