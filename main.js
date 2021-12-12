fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(res => {
    const app = document.getElementById('app')
    res.forEach(element => {
        const paragraf = document.createElement('p')
        paragraf.innerHTML = "<button>" + element.title + "</button>" 
        // niebezpieczne uzywanie jest innerHTML, powinnien byc innerTekst
        app.appendChild(paragraf)
    });
})

