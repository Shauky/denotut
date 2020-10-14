import * as runExclusive from "run-exclusive";

let alphabet= "";

const spell= runExclusive.build(
    async (letter: string): Promise<string> => {

        await new Promise(
            resolve=>setTimeout(
                resolve,
                Math.random()*100
            )
        );

        alphabet+=letter;

        return alphabet;

    }
);

spell("a");
spell("b");
spell("c").then( message => console.log(message)); // Always prints "abc"
