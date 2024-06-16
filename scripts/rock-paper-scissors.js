let score = JSON.parse(localStorage.getItem('score')) || { wins: 0,losses: 0, ties: 0 };
        
       
        updateScoreElement();
        function playGame(playerMove){
            const computerMove = pickComputerMove();
            let result = '';

            if (playerMove === 'rock') {
                    if (computerMove ==='rock') {
                    result= 'Tie !';
                } else if (computerMove ==='paper') {
                    result = 'Loose';
                } else if (computerMove === 'scissors') {
                    result = 'You Win !';
                }

            }

            if (playerMove === 'paper') {
                    if (computerMove ==='rock') {
                    result= 'You Win !';
                } else if (computerMove ==='paper') {
                    result = 'Tie !';
                } else if (computerMove === 'scissors') {
                    result = 'Loose';
                }

            }
            
            if (playerMove === 'scissors') {
                    if (computerMove ==='rock') {
                    result= 'Loose';
                } else if (computerMove ==='paper') {
                    result = 'You Win !';
                } else if (computerMove === 'scissors') {
                    result = 'Tie !';
                }

            }

            if (result === 'You Win !') {
                score.wins += 1;

            } else if (result === 'Loose') {
                score.losses += 1;

            } else if (result === 'Tie !') {
                score.ties += 1;

            }
            localStorage.setItem('score',JSON.stringify(score));
            
             updateScoreElement();
             document.querySelector('.js-result').innerHTML=`${result}`;
             document.querySelector('.js-moves').innerHTML=`You
         <img src="images/${playerMove}-emoji.png" class="move-icon">
         <img src="images/${computerMove}-emoji.png" class="move-icon">
         Computer`;
        
            
        }
        
        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML= `wins: ${score.wins},losses:${score.losses},ties:${score.ties}`;


        }

        function pickComputerMove(){
                const randomNumber = Math.random();
                let computerMove = '';
            
            
            if (randomNumber >= 0 && randomNumber < 1 / 3) {

                computerMove = 'rock'
            } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
                computerMove = 'paper'
            }else if (randomNumber >= 2/3 && randomNumber < 1) {
                computerMove = 'scissors'
            }
            return computerMove;

        }
      