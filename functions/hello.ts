import { typeDetect } from "https://deno.land/x/type_detect@v4.0.8/test/index.js";

const type = typeDetect;

assert(type([]) === 'Array');

console.log([].typeof.toString());
