import { useEffect, useState } from 'react';
import recetas from '../prefabs/recetas.json';

export function Content ({content, toggleResponse}) {
    const [params, setParams] = useState('');
    const [payload, setPayload] = useState('');

    const endpointTest = async () => {
        let data;

        switch (content.method) {
            case 'GET': 
                data = await fetch(content.endpoint, { method: content.method });
                break;
            case 'POST': 
                data = await fetch(content.endpoint, {
                    method: content.method,
                    headers: { 'Content-Type': 'application/json' },
                    body: payload
                });
                break;
            case 'PUT': 
                data = await fetch((content.endpoint + '/' + params), {
                    method: content.method,
                    headers: { 'Content-Type': 'application/json' },
                    body: payload
                });
                break;
            case 'DELETE': 
                data = await fetch((content.endpoint + '/' + params), { method: content.method });
                break;
        }
        const result = await data.json();

        toggleResponse(JSON.stringify(result, null, 4));
    }

    useEffect(() => {
        toggleResponse('');
        setParams(1);
        setPayload(JSON.stringify(recetas, null, 2));
    }, [content]);

    return (
        <div className="endpoint-list">
            <h3>{content.title}</h3>
            <span>{content.endpoint}<small className={`chip ${content.method.toLocaleLowerCase()}`}>{content.method}</small></span>
            <p>{content.desc}</p>

            { content.method != 'GET' &&
                <>
                    <input
                        type="text"
                        className="input"
                        placeholder="Parámetros"
                        value={params}
                        onChange={ (e) => setParams(e.target.value) }
                        />
                    { content.method != 'DELETE' &&
                        <textarea
                            rows='10'
                            className="payload"
                            placeholder="{}"
                            value={payload}
                            onChange={ (e) => setPayload(e.target.value) }
                            ></textarea>
                    }
                </>
            }

            <button onClick={ endpointTest } className="button">Probar</button>
        </div>
    )
}