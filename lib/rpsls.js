// Location for exported RPS and RPSLS functions. 

export function rps(input='') {
    const options = ['rock', 'paper', 'scissors']; 
    const min = 0;
    const max = 2;
    const oppNum = Math.floor(Math.random() * (max - min + 1) + min); 
    const opponent = options[oppNum]; 
    if (input=='') {
        const def = {
            player: 'rock'
        }
        return def; 
    }

    if (input=='rock') {

    } else if (input=='paper') {

    } else if (input=='scissors') {
        
    }

}
