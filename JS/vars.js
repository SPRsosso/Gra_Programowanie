const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const gravity = 0.3;
const movementSpeed = 6;

const frames = 60;
const fps = 1000 / frames;

const LEFT = "LEFT", RIGHT = "RIGHT";
const movement = {};