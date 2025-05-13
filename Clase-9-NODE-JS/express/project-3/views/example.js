fetch('http://localhost:3007/heroes', { method: 'POST', body: { name: '', age: 0, company: '' } })
    .then(res => res.json())
    .then(res => console.log(res))