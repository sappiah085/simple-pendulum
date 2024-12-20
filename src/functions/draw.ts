import p5 from "p5";
import { ball, start } from "./setup";

export const draw = (p: p5) => {
  p.noFill();
  p.clear();
  ball.run();
  p.stroke(255);
  p.strokeWeight(2);
  p.line(start.x, start.y, ball._position.x, ball._position.y);
  ball.show(p);
};
