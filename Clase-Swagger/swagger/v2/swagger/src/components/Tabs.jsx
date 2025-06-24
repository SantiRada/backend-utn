import endpoint from '../endpoint.json';

export function Tabs ({toggleContent}) {
    return (
        <div className="list-tabs">
            { endpoint.map(item => (
                <a onClick={() => toggleContent(item)} className="endpoint">{item.title}<small className={`chip ${item.method.toLocaleLowerCase()}`}>{item.method}</small></a>
              ))
            }
        </div>
    )
}