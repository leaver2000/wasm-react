import load, { greet } from "vite-wasm";
export default await load().then(() => {
  console.log("wasm loaded");
  return { greet };
});
