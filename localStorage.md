#localStorage

localStorage.item = 'info'
localStorage.setItem('item', 'info')
localStorage.['item'] = 'info'

localStorage.removeItem('item')

localStorage.pokemon = JSON.stringify( [{id:1, name:"bulbasaur"}, {id:4, name:"charmander"}] );
data = JSON.parse(localStorage.pokemon)