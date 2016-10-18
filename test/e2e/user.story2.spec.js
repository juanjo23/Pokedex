describe('User story 2', function(){
	
	describe('Given the Pokédex main menu is open', function(){
		beforeAll(function(){
			var btn_menu = element(by.id('btn-menu'));
			btn_menu.click();			
			browser.sleep(500);  //Tiempo de espera por la animación de jQuery
		});
		describe('When i tap on the "All Pokémon button"', function(){
			beforeAll(function(){
				var btn_all = element.all(by.css('ul > li')).get(0);
				btn_all.click();
				browser.waitForAngular();
			});
			it('Then a list of 151 (28) Pokémon will appear', function(){
				expect(element.all(by.repeater('pokemon in pokemons')).count()).toEqual(28);
			});

			it('And each entry will display the Pokemon’s image thumbnail, name, number and type(s)', function(){
				expect(element(by.css('.pokemon-item-image')).isPresent()).toBe(true);
				expect(element(by.css('.pokemon-item-name')).isPresent()).toBe(true);
				expect(element(by.css('.pokemon-item-number')).isPresent()).toBe(true);
				expect(element(by.css('.type')).isPresent()).toBe(true);
			});
			it('And the header will display the label "All Pokémon"', function(){
				expect(element(by.id('nav-title')).getText()).toEqual("All Pokémon");
			});
		});
	});	
	
	describe('Given the Pokédex is displaying the list of all Pokémon', function(){
		describe('When I tap on the sort button', function(){
			it('Then the list will be sorted by descending Pokémon number', function(){
				var sort_button = element(by.css('.sort'));
				sort_button.click();
				expect(element.all(by.css('.pokemon-item-name')).get(0).getText()).toEqual('Eevee');
			});
		});
		describe('When I tap on the sort button again', function(){
			it('Then the list will be sorted by ascending Pokémon number', function(){
				var sort_button = element(by.css('.sort'));
				sort_button.click();
				expect(element.all(by.css('.pokemon-item-name')).get(0).getText()).toEqual('Bulbasaur');
			});
		});
	});

	describe('Given the Pokédex is displaying the list of all Pokémon', function(){

		describe('When I enter some search text criteria in the input search', function(){
			it('The list will display only the Pokémon whose name partially or totally matches', function(){
				var input_search = element(by.model('search.name')); 
				input_search.sendKeys('pi');
				var first = element.all(by.css('.pokemon-item-name')).get(0);
				expect(first.getText()).toMatch('pi');
			});
		});
	});

});