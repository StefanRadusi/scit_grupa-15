import { Categories } from "./Categories";
import { PopUp } from "./HomePopUp";

export function setUpHome() {
  console.log("set up home");
  const popUp = new PopUp();
  new Categories(popUp);
}
