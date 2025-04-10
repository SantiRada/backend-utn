// const buttons = document.querySelectorAll('.btn-color');
// const body = document.querySelector('.bg');

// // buttons.forEach(btn => {
// //     switch(btn.textContent){
// //         case "Rojo": btn.style.backgroundColor = "red"; break;
// //         case "Azul": btn.style.backgroundColor = "blue"; break;
// //         case "Verde": btn.style.backgroundColor = "green"; break;
// //         case "Naranja": btn.style.backgroundColor = "orange"; break;
// //         case "Violeta": btn.style.backgroundColor = "purple"; break;
// //     }
// // });

// // buttons.forEach(btn => {
// //     btn.style.backgroundColor = btn.textContent;
// // });

// buttons.forEach(btn => {
//     btn.style.backgroundColor = btn.getAttribute("data-color");

//     btn.addEventListener('mouseenter', () => {
//         body.style.backgroundColor = btn.getAttribute("data-color");

//         // btn.innerHTML = "<h1>hola mundo</h1>";
//         btn.textContent = "Hola mundo";
//     });

//     btn.addEventListener('mouseleave', () => {
//         body.style.backgroundColor = "#333";
//     });
// });

let grid = document.querySelector('.grid');

let sizeX = 10;
let sizeY = 10;

// grid.style.gridTemplateColumns = "repeat(" + sizeX + ", 1fr);";

for(let i = 0; i < sizeX; i++){
    for(let j = 0; j < sizeY; j++){
        let item = document.createElement('div');
        item.classList.add('item');
        grid.appendChild(item);
        item.textContent = "I: " + i + "// J: " + j;
    }
}