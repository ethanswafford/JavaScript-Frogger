const canvasOne = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvasTwo = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvasThree = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvasFour = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvasFive = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

// global variable declarations

const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;

const particlesArray = {};
const maxParticles = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = [];