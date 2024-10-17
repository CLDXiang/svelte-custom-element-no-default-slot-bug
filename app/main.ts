const eleStartWithEmptySlot = document.getElementById("start-with-empty-slot")!;
const eleStartWithNotEmptySlot = document.getElementById(
  "start-with-not-empty-slot"
)!;
let countBeginWithZero = 0;
let countBeginWithNoneZero = 1;
eleStartWithEmptySlot.onclick = () => {
  eleStartWithEmptySlot.appendChild(
    document.createElement("span")
  ).textContent = `${++countBeginWithZero}`;
};
eleStartWithNotEmptySlot.onclick = () => {
  eleStartWithNotEmptySlot.appendChild(
    document.createElement("span")
  ).textContent = `${++countBeginWithNoneZero}`;
};
