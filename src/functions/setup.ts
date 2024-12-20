import p5 from "p5";
import { variables } from "../common/variables";
import { Ball } from "../class/ball";
export let start: p5.Vector;
export let len = 500;
export let ball: Ball;
export function setup(p: p5): void {
  p.createCanvas(variables.w_grid, variables.h_grid);
  p.background(0);
  start = p.createVector(variables.w_grid / 2, 0);

  ball = new Ball(
    Math.PI / 3,
    len,
    start
  );
}
