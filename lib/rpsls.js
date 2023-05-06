// Location for exported RPS and RPSLS functions. 

export function rps(input='') {
    const options = ['rock', 'paper', 'scissors']; 
    const min = 0;
    const max = 2;
    const ranNum = Math.floor(Math.random() * (max - min + 1) + min); 
    const random = options[ranNum]; 
    const opponent = random; 

    if (input=='') {
        const empty = {
            player: ''
        }
        empty.player = random; 
        return JSON.stringify(empty); 
    }

    const play = {
        player: '', 
        opponent: '', 
        result: '', 
    }

    play.player = input; 
    play.opponent = opponent; 

    if (input=='rock') {
        if (opponent=='rock') {
            play.result = 'tie'; 
        } else if (opponent=='paper') {
            play.result = 'lose'; 
        } else {
            play.result = 'win'; 
        }
    } else if (input=='paper') {
        if (opponent=='paper') {
            play.result = 'tie'; 
        } else if (opponent=='scissors') {
            play.result = 'lose'; 
        } else {
            play.result = 'win'; 
        }
    } else if (input=='scissors') {
        if (opponent=='scissors') {
            play.result = 'tie'; 
        } else if (opponent=='rock') {
            play.result = 'lose'; 
        } else {
            play.result = 'win'; 
        }
    } else {
        return `Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`; 
    }

    return JSON.stringify(play); 

}
