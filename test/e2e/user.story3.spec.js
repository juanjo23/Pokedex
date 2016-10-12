describe('User Story 3', function(){
	describe('Given the Pokédex is displaying the list of all Pokémon', function(){
		beforeAll(function(){
			browser.get('/#/pokemon');  //Default route, shows all pokemons
			browser.waitForAngular();
		});
		describe('When i tap on a Pokémon', function(){
			beforeAll(function(){
				var pokemon = element.all(by.css('.pokemon-item')).get(0);
				pokemon.click();
			});
			it('Then the Pokémon list will be replaced by a view with the Pokémon details', function(){
				expect(element(by.css('.pokemon-description')).isPresent()).toBe(true);
			});
			it('And the main menu button will be replaced by a back button', function(){
				expect(element(by.id('btn-back')).isPresent()).toBe(true);
			});
			it('And the header will display the label "Description"', function(){
				expect(element(by.id('nav-title')).getText()).toEqual("Description");
			});

			it('And the view will include section containing the Pokémon’s image, number, name, height, weight, description and types',
			 function(){
				expect(element(by.css('.pokemon-image')).isPresent()).toBe(true);
				expect(element(by.css('.desc-title')).isPresent()).toBe(true);
				expect(element(by.css('.description > p')).isPresent()).toBe(true);
				expect(element(by.css('.type')).isPresent()).toBe(true);			
			});
			it('And the view will include a section containing the Pokémon’s hidden abilities and location',
			 function(){
				expect(element(by.css('.information')).isPresent()).toBe(true);
			});
		});

		describe('When i tap on a Pokémon that is part of an evolutionary line', function(){
			beforeAll(function(){
				var pokemon = element.all(by.css('.pokemon-item')).get(0);
				pokemon.click();
			});
			it('Then the Pokémon list will be replaced by a view with the Pokémon details', function(){
				expect(element(by.css('.pokemon-description')).isPresent()).toBe(true);
			});
			it('And the view will include a section containing the Pokémon’s evolutions list', function(){
				expect(element.all(by.repeater('evolution in pokemon.evolutions')).count()).toEqual(3);
			});
			it('And each evolution item will show the Pokémon image thumbnail', function(){
				expect(element(by.css('.pokemon-item-image')).isPresent()).toBe(true);
			});
		});
	});
});