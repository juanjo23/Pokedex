describe('User Story 3', function(){
	describe('Given the Pokédex is displaying the list of all Pokémon', function(){
		beforeAll(function(){
			browser.get('/#/pokemon');  //Default route, shows all pokemons
			browser.waitForAngular();
		});

		
		//Aceptance criteria 2
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

		//Aceptance criteria 2
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

		//Aceptance criteria 3
		describe('Given the Pokédex is displaying a list of Pokémon', function(){
			beforeAll(function(){
				browser.get('/#/pokemon');  //Default route, shows all pokemons
				browser.waitForAngular();
			});

			describe('When I tap on a Pokémon that is not part of an evolutionary line', function(){
				beforeAll(function(){
					var pokemon = element.all(by.css('.pokemon-item')).get(26);
					pokemon.click();
				});
				it('Then the Pokémon list will be replaced by a view with the Pokémon details', function(){
					expect(element(by.css('.pokemon-description')).isPresent()).toBe(true);
				});
				it('And the view will include a section stating "This Pokémon is not part of an evolutionary line"', function(){
					expect(element(by.css('.no-evolutionary')).getText()).toMatch('This Pokémon is not part');
					expect(element(by.css('.no-evolutionary')).isDisplayed()).toBe(true);
				});
			});
		});

		//Aceptance criteria 4
		describe('Given the Pokédex is displaying a Pokémon description', function(){

			describe('When I tap the back button', function(){
				beforeAll(function(){
					var back_btn = element(by.id('btn-back'));
					back_btn.click();					
				});
				it('Then the Pokédex will go back to the list that I was checking before', function(){
					expect(element.all(by.repeater('pokemon in pokemons')).count()).toEqual(28);
				});
			});
		});
	});
});
