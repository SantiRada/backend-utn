import { useState, useEffect } from 'react';

export function Visualizar () {


    const genre = [ "Acción", "Aventura", "Animación", "Ciencia ficción", "Comedia", "Crimen", "Documental", "Drama", "Fantasía", "Histórica", "Misterio", "Musical", "Romance", "Suspenso", "Terror", "Biografía", "Deportes", "Guerra", "Western", "Política", "Superhéroes" ];

    const [data, setData] = useState({});

    const [filter, setFilter] = useState({
            title: '',
            seasons: '',
            episodes: '',
            genre: [],
            rating: false,
            orderBy: false
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;

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
    }

    const filterGenre = (data) => {
        const newGenres = [...filter.genre];

        const verifyGenre = filter.genre.find(item => item == data);
        
        if(!verifyGenre) { newGenres.push(data); }
        else { newGenres.pop(data); }

        setFilter(prev => ({
            ...prev,
            genre: newGenres
        }));
    }

    const SearchData = async () => {
        try {
            const response = await fetch('http://localhost:3010/series');
            const result = await response.json();

            setData(result);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { SearchData(); }, []);

    return(
        <>
            <h3>Sector para Visualizar Series</h3>
            <pre>{JSON.stringify(filter)}</pre>
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