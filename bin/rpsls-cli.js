#!/usr/bin/env node

import {rpsls} from "../lib/rpsls.js";
import minimist from "minimist";

const mini = minimist(process.argv.slice(2)); 

if (mini.h || mini.help) {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`)
    process.exit(0); 
}
if (mini.r || mini.rules) {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`); 
    process.exit(0); 
}

if (mini._[0]) {
    console.log(rpsls(mini._[0])); 
} else {
    console.log(rpsls()); 
}