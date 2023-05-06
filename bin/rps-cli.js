#!/usr/bin/env node
import minimist from 'minimist';

const mini = minimist(process.argv.slice(2));

if (mini.h || mini.help) {
    console.log(`Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    process.exit(0); 
}

if (mini.r || mini.rules) {
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`); 
    process.exit(0); 
}