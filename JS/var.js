const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const frames = 60;
const fps = 1000 / frames;

const playerHeight = 130;
const playerWidth = 20;
const speed = 10;

const ballRadius = 10;
const ballSpeed = 10;

const UP = "UP", DOWN = "DOWN";
const player1Movement = {};
const player2Movement = {};

const scoreP1Box = document.querySelector("#score-p1");
const scoreP2Box = document.querySelector("#score-p2");
let scoreP1 = 0;
let scoreP2 = 0;