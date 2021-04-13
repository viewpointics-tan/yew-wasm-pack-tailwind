import init, { run_app } from './pkg/pixiv_cc_prototype.js';
import "./css/styles.css";

async function main() {
   await init('/pkg/pixiv_cc_prototype_bg.wasm');
   run_app();
}
main()