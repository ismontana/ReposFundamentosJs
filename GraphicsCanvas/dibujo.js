const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

// Relleno

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.fillRect(180, 128, 40, 104);
ctx.fillRect(164, 136, 80, 80);
ctx.fillRect(156, 136, 80, 80);
ctx.fillRect(140, 160, 120, 40);
ctx.fillRect(210, 194, 45, 41);
ctx.fillRect(237, 216, 30, 17);
ctx.fillRect(261, 220, 8, 8);
ctx.fillRect(130, 199, 16, 16);
ctx.fillRect(142, 200, 7, 8);
ctx.fill();

// Contorno

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(180, 120, 40, 8);
ctx.fillRect(220, 128, 16, 8);
ctx.fillRect(164, 128, 16, 8);
ctx.fillRect(236, 136, 8, 8);
ctx.fillRect(156, 136, 8, 8);
ctx.fillRect(244, 144, 8, 16);
ctx.fillRect(148, 144, 8, 16);
ctx.fillRect(252, 160, 8, 56);
ctx.fillRect(140, 160, 8, 40);
ctx.fillRect(148, 200, 8, 8);
ctx.fillRect(156, 208, 8, 8);
ctx.fillRect(164, 216, 16, 8);
ctx.fillRect(180, 224, 24, 8);
ctx.fillRect(204, 232, 56, 8);
ctx.fillRect(260, 227, 8, 8);
ctx.fillRect(268, 220, 8, 8);
ctx.fillRect(260, 214, 8, 8);
ctx.fill();

// Brazo a mi izquierda

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(132, 192, 8, 8);
ctx.fillRect(124, 199, 8, 24);
ctx.fillRect(124, 192, 8, 8);
ctx.fillRect(132, 215, 8, 8);
ctx.fillRect(140, 208, 8, 8);
ctx.fill();

// ADENTRO

// Ojo izquierdo

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(164, 160, 16, 24);
ctx.fillRect(157, 168, 16, 24);
ctx.fill();

// Ojo derecho

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(196, 160, 16, 24);
ctx.fillRect(205, 168, 16, 24);
ctx.fill();

// Boca

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(180, 194, 16, 16);
ctx.fill();

// Brazo a mi derecha

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(221, 192, 16, 8);
ctx.fillRect(213, 199, 8, 24);
ctx.fillRect(221, 215, 8, 8);
ctx.fillRect(229, 207, 8, 8);
ctx.fill();