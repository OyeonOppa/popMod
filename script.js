let score = 0;
const mod = document.getElementById('mod');
const scoreDisplay = document.getElementById('score');
const clickSound = new Audio('click.mp3');

// เพิ่มรูปภาพที่ต้องการสลับ
const modImage1 = 'mod1.png';
const modImage2 = 'mod2.png';

// กำหนดรูปภาพเริ่มต้น
let currentImage = modImage1;

// เมื่อคลิกที่รูปภาพ
mod.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    clickSound.play();
    // สลับรูปภาพ
    if (currentImage === modImage1) {
        mod.src = modImage2;
        currentImage = modImage2;
    } else {
        mod.src = modImage1;
        currentImage = modImage1;
    }

    // เล่นแอนิเมชันย่อขนาดเล็ก
    mod.style.transform = 'scale(0.9)';
    setTimeout(() => {
        mod.style.transform = 'scale(1)';
    }, 100);
});
