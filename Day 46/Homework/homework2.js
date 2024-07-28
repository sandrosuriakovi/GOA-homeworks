
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');


context.fillStyle = 'blue';
context.fillRect(50, 50, 150, 100);


context.beginPath();
context.arc(300, 100, 50, 0, Math.PI * 2, true);
context.fillStyle = 'red';
context.fill();


context.beginPath();
context.moveTo(50, 300);
context.lineTo(400, 300);
context.strokeStyle = 'green';
context.lineWidth = 5;
context.stroke();


context.beginPath();
context.moveTo(200, 400);
context.lineTo(250, 350);
context.lineTo(300, 400);
context.closePath();
context.fillStyle = 'yellow';
context.fill();


//ამისთვის ტუტორიალი გამოვიყენე იმიტომ რომ ჯავასკრიფტი კარგად არ ვიცი :(