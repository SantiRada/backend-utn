import { useState, useEffect } from 'react';

export function Visualizar () {

    const genre = [ "Acción", "Aventura", "Animación", "Ciencia ficción", "Comedia", "Crimen", "Documental", "Drama", "Fantasía", "Histórica", "Misterio", "Musical", "Romance", "Suspenso", "Terror", "Biografía", "Deportes", "Guerra", "Western", "Política", "Superhéroes" ];

    const [data, setData] = useState({});

    const [filter, setFilter] = useState({ title: '', seasons: '', episodes: '', genre: [], rating: false, orderBy: false });

    const [isSearch, setIsSearch] = useState(0);

    // ------- FILTROS -------- //
    const handleChange = (e) => {
        const { name, value } = e.target;

        if(e.target.value.length > 0) { setIsSearch(isSearch + 1); }
        else { setIsSearch(isSearch - 1); }

        setFilter(prev => ({
            ...prev,
            [name]: value
        }));

    }
    const changeButtonData = (data, value) => {
        setFilter(prev => ({
            ...prev,
            [data]: value
        }));

        if(value) { setIsSearch(isSearch + 1); }
        else { setIsSearch(isSearch - 1); }
    }
    const filterGenre = (data) => {
        // Creando un array copia de los generos y quitando el elemento que se repita
        const newGenres = filter.genre.filter(item => item != data.target.text);

        if(newGenres.length == filter.genre.length) { newGenres.push(data.target.text); }

        setFilter(prev => ({
            ...prev,
            genre: newGenres
        }));

        if(data.target.text != '') { setIsSearch(isSearch + 1); }
        else { setIsSearch(isSearch - 1); }
    }
    // ------- FILTROS -------- //

    const SearchData = async () => {
        try {
            let response;
            let result;

            if(isSearch != 0) {
                let endpoint = 'http://localhost:3010/series/filter?';

                Object.entries(filter).map(item => {
                    if(item[1] != ''){
                        endpoint += item[0] + '=' + item[1] + '&'
                    }
                });

                endpoint = endpoint.slice(0, -1);

                response = await fetch(endpoint, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }else{
                response = await fetch('http://localhost:3010/series');
            }

            result = await response.json();

            setData(result);

        } catch (err) {
            console.log(err);
        }
    }

    const cleanFilters = () => { setIsSearch(0); }

    useEffect(() => { SearchData(); }, [isSearch]);

    return(
        <>
            <h3>Sector para Visualizar Series</h3>
            {/* <pre>{JSON.stringify(filter)}</pre> */}
            {/* SOLUCIÓN: DESAPARECER BOTON DE "LIMPIAR FILTROS" */}
            {/* onChange={handleForm} */}
            <form className="filter-sector"> 
                <div className="first-line">
                    <div className="left-filter">
                        <input
                            type="text"
                            placeholder="Título"
                            className="input"
                            name="title"
                            onChange={handleChange}
                            value={filter.title}
                        />  
                        <input
                            type="number"
                            placeholder="Temporadas"
                            name="seasons"
                            className="input"
                            onChange={handleChange}
                            value={filter.seasons}
                            />
                        <input
                            type="number"
                            placeholder="Episodios"
                            name="episodes"
                            className="input"
                            onChange={handleChange}
                            value={filter.episodes}
                            />
                    </div>
                    <div className="right-filter">
                        <a className="btn-filter" style={isSearch == 0 ? {display: 'none' } : {display: 'flex'}} onClick={ cleanFilters }>Limpiar</a>
                        <a onClick={ () => changeButtonData('rating', !filter.rating) } className="btn-filter">Rating</a>
                        <a onClick={ () => changeButtonData('orderBy', !filter.orderBy) } className="btn-filter">Orden</a>
                    </div>
                </div>
                <div className="second-line">
                    { genre.map(item => (
                        <a key={item} onClick={ filterGenre } className="genre-item">{item}</a>
                      ))
                    }
                </div>
            </form>
            { Object.entries(data).length > 0 && data.map((item, i) => (
                <div key={i} className="item">
                    <h3 className="title">{item.title}</h3>
                    <small>{item.produced} - {item.director}</small>
                    <p className="description">{item.description}</p>
                    <p className="genre">{item.genre}</p>
                    <span>{item.seasons} Temporadas</span>
                    <span>{item.episodes} Episodios</span>
                </div>
              ))
            }
        </>
    )
} 