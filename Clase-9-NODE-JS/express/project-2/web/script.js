fetch('http://localhost:3005/heroes')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const html = data.map(hero => {
            return `<div class='hero'><h3>${hero.nombre}</h3><a class='delete-button'>Eliminar</a></div>`;
        }).join('');

        document.querySelector('.main').innerHTML = html;
    });

document.addEventListener('click', e => {
    if(e.target.matches('a')){
        const hero = e.target.closest('div');

        fetch('http://localhost:3005/heroes/3', { method: 'DELETE' })
            .then(res => {
                if(res.ok){
                    console.log("Funciono");
                }else{
                    console.log("NO Funciono");
                }
            })
    }
})