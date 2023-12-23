import './style.css';
import Task from './tasks.js';
import drawClock from './clock.js';
import alarm from './alarm.js';

const todos = new Task();
todos.buildForm1();
todos.buildForm2();

todos.showTasks();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius *= 0.90;

setInterval(() => drawClock(ctx, radius), 1000);
setInterval(alarm, 60 * 1000);
