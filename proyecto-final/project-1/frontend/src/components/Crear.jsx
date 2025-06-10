import { useState } from 'react';

export function Crear () {

    const [data, setData] = useState(
        {
            title: '',
            description: '',
            genre: '',
            director: '',
            seasons: '',
            episodes: '',
            produced: ''
        }
    );

    const SearchData = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3010/series', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return(
        <>
            <h3>Sector para Crear Series</h3>
            {/* FORMA RÁPIDA DE VISUALIZAR UN JSON EN REACT */}
            {/* <pre>{JSON.stringify(data)}</pre> */}
            <form className="form-create" onSubmit={SearchData}>
                <input
                    className="input"
                    type="text"
                    name="title"
                    placeholder="Titulo"
                    onChange={handleChange}
                    value={data.title}
                    required
                    />
                <textarea
                    className="input"
                    type="text"
                    rows="6"
                    name="description"
                    placeholder="Descripción"
                    onChange={handleChange}
                    value={data.description}
                    required
                    />
                <input
                    className="input"
                    type="text"
                    name="genre"
                    placeholder="Género"
                    onChange={handleChange}
                    value={data.genre}
                    required
                    />
                <input
                    className="input"
                    type="text"
                    name="director"
                    placeholder="Director"
                    onChange={handleChange}
                    value={data.director}
                    required
                    />
                <input
                    className="input"
                    type="text"
                    name="seasons"
                    placeholder="Temporadas"
                    onChange={handleChange}
                    value={data.seasons}
                    required
                    />
                <input
                    className="input"
                    type="text"
                    name="episodes"
                    placeholder="Episodios"
                    onChange={handleChange}
                    value={data.episodes}
                    required
                    />
                <input
                    className="input"
                    type="text"
                    name="produced"
                    placeholder="Productor"
                    onChange={handleChange}
                    value={data.produced}
                    required
                    />

                <input type="submit" name="search-data" className="button-search" value="Crear" />
            </form>
        </>
    )
}