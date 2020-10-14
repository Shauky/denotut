import { type-detect } from "https://deno.land/x/type_detect@v4.0.8/test/index.js";

const type = type-detect;

assert(type([]) === 'Array');

console.log([].typeof.toString());
