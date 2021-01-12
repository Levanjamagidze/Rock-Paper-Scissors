const game = () => {
    let pScore = 0;
    let cScore = 0;

    
    // თამაშის დაწყების ფუნქცია
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add("fadeIn");
        });
    };

    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand= document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation="";
            });
        })

        const computerOptions = ['rock', 'paper', 'scissors'];
         
        options.forEach(option =>{
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(()=>{
                    compareHands(this.textContent, computerChoice);
                playerHand.src=` ./assets/${this.textContent}.png`;
                computerHand.src=` ./assets/${computerChoice}.png`;
                },2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () =>{
        playerScore = document.querySelector('.player-score p');
        ComputerScore = document.querySelector('.computer-score p');
        playerScore.textContent= pScore;
        ComputerScore.textContent= cScore;
    }

    const compareHands= (playerChoice, computerChoice) =>{
        const winner = document.querySelector(".winner")
        if(playerChoice === computerChoice){
            winner.textContent="It's a tie";
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === "scissors"){
                winner.textContent="You win";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === "scissors"){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="You win";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === "rock"){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="You win";
                pScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
};

game();