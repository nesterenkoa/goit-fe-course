'use strict';

class Stopwatch {
  constructor(container) {
    this._container = container;
    this._createClock();
    this.reset();
  }
  
  _createClock() {
    this._container.classList.add('stopwatch-style');
    const clock = document.createElement('div');
    clock.classList.add('clock');
  
    this.hours = document.createElement('span');
    this.hours.classList.add('time');
    clock.appendChild(this.hours);
  
    this.minutes = document.createElement('span');
    this.minutes.classList.add('time');
    clock.appendChild(this.minutes);
  
    this.seconds = document.createElement('span');
    this.seconds.classList.add('time');
    clock.appendChild(this.seconds);
  
    this.milliseconds = document.createElement('span');
    this.milliseconds.classList.add('time');
    clock.appendChild(this.milliseconds);
    this._container.appendChild(clock);
  
    const controlPanel = document.createElement('div');
    controlPanel.classList.add('control-panel');
  
    this.startBtn = document.createElement('button');
    this.startBtn.innerHTML = 'start';
    this.startBtn.classList.add('control-btn');
    this.startBtn.addEventListener('click', this.start);
    controlPanel.appendChild(this.startBtn);
  
    this.lapBtn = document.createElement('button');
    this.lapBtn.innerHTML = 'lap';
    this.lapBtn.classList.add('control-btn');
    this.lapBtn.addEventListener('click', this.lap);
    controlPanel.appendChild(this.lapBtn);
  
    this.resetBtn = document.createElement('button');
    this.resetBtn.innerHTML = 'reset';
    this.resetBtn.classList.add('control-btn');
    this.resetBtn.addEventListener('click', this.reset);
    controlPanel.appendChild(this.resetBtn);
  
    this._container.appendChild(controlPanel);
  
    this.dashboard = document.createElement('ul');
    this.dashboard.classList.add('dashboard');
    this._container.appendChild(this.dashboard);
  }
  
  reset = () => {
    // обнуляем все значения и останавливаем наш таймер
    this.hours.innerHTML = '00';
    this.minutes.innerHTML = '00';
    this.seconds.innerHTML = '00';
    this.milliseconds.innerHTML = '000';
  
    this.time = 0;
    this.active = false;
    clearInterval(this.timer); // останаливает таймер
    this.startBtn.innerHTML = 'start';
    this.dashboard.innerHTML = '';
  };
  
  start = () => {
    if (!this.active) {
      this._lastTick = Date.now();
      this.timer = setInterval(this._tick, 100);
      this.startBtn.innerHTML = 'pause';
    } else {
      clearInterval(this.timer);
      this.startBtn.innerHTML = 'continue';
    }
    this.active = !this.active;
  };
  
  lap = () => {
    const record = document.createElement('li');
    const {hours, minutes, seconds, milliseconds} = this._parseTime(this.time);
    record.innerHTML = `${hours}.${minutes}.${seconds}.${milliseconds}`;
    this.dashboard.appendChild(record);
  };
  
  
  _tick = () => {
    const timestamp = Date.now();
    this.time += timestamp - this._lastTick;
    this._lastTick = timestamp;
    const current = this._parseTime(this.time);
    this.hours.innerHTML = current.hours;
    this.minutes.innerHTML = current.minutes;
    this.seconds.innerHTML = current.seconds;
    this.milliseconds.innerHTML = current.milliseconds;
  };
  
  _parseTime(time) {
    // превращает запись в миллисекундах в обьект с часами, минутами, секундами..
    const date = new Date(time);
    return {
      hours: this._formatTime(date.getUTCHours(), 2),
      minutes: this._formatTime(date.getUTCMinutes(), 2),
      seconds: this._formatTime(date.getUTCSeconds(), 2),
      milliseconds: this._formatTime(date.getUTCMilliseconds(), 3)
    }
  }
  
  _formatTime(time, size) {
    // метод добавляет нули впереди числа
    // принимает два аргумента - число и количество символов которые должны получить на выходе
    let formattedTime = `${time}`;
    while (formattedTime.length < size) {
      // в цикле дополняем нулями наше число до тех пор, пока оно не достигнет нужного размера
      formattedTime = `0${formattedTime}`;
    }
    return formattedTime;
  }
}

new Stopwatch(document.querySelector('.stopwatch'));
new Stopwatch(document.querySelector('.stopwatch-2'));
new Stopwatch(document.querySelector('.stopwatch-3'));

