const states = ["Washington", "Maine", "Montana"];
const mStates = states.filter((state) => state[0] === "M");
console.log(states);
console.log(mStates);

const mStatesUpperCased = mStates.map((state) => state.toUpperCase());
console.log(mStatesUpperCased);

const mStatesUpperCased2 = states
  .filter((state) => state[0] === "M")
  .map((state) => state.toUpperCase());

console.log(mStatesUpperCased2);

const evenMoreChaining = states
  .filter((state) => state[0] === "M")
  .map((state) => state.toUpperCase())
  .map((state) => state + "!");
console.log(evenMoreChaining);
