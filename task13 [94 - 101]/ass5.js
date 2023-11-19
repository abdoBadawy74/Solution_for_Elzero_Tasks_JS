[...document.body.children].forEach(
    el => (el.onclick = _ => console.log(`This IS ${el.localName}`))
)