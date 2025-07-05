var p1 = document.querySelector('#p1');
var p2 = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var reset = document.getElementById('reset');
var numInput = document.querySelector('input');
var winningTarget = document.querySelector('p span');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1.addEventListener('click', function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add('winner');
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
})

p2.addEventListener('click', function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add('winner');
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
})

reset.addEventListener('click', function(){
	winningTarget.textContent = 5;
	winningScore = 5;
	numInput.value = 5;
	resetAll();
})

function resetAll(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
}

numInput.addEventListener('change', function(){
	winningTarget.textContent = this.value;
	winningScore = Number(this.value);
	resetAll();
})