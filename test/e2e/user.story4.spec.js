describe('User Story 4', function(){
	// Acceptance criteria 1
	describe('Given the Pokédex main menu is open', function(){
		beforeAll(function(){
			browser.get('/#/pokemon');  //Default route
			var btn_menu = element(by.id('btn-menu'));
			btn_menu.click();			
			browser.sleep(500);  //Tiempo de espera por la animación de jQuery
		});
		describe('When I tap on the "All Pokemon" button', function(){
			beforeAll(function(){
				var btn_all = element.all(by.css('ul > li')).get(0);
				btn_all.click();
				browser.waitForAngular();
			});
		
			it('Then a list of 151 (28) Pokémon will appear', function(){
				expect(element.all(by.repeater('pokemon in pokemons')).count()).toEqual(28);
			});

			it('And the Pokémon I have caught will display a colored PokéBall icon', function(){
				var caught_pokemon = element.all(by.css('.pokeball-pink')); 
				expect(caught_pokemon.count()).toBe(0);   //Empty localstorage
			});
			it('And the Pokémon I have not caught will display a grayed out PokéBall icon', function(){
				var caught_pokemon = element.all(by.css('.pokeball')).get(0); //Bulbasaur
				expect(caught_pokemon.getAttribute('class')).toMatch('pokeball');
			});
		});
	});
	// Acceptance criteria 2
	describe('Given the Pokédex is displaying the list of all Pokémon', function(){
		/*
		beforeAll(function(){
			browser.get('/#/pokemon');  //Default route			
			browser.waitForAngular();  
		});
		*/

		describe('When I tap on a grayed out PokéBall icon', function(){
			beforeAll(function(){
				//Taped more than one pokeball for future tests
				var pokeball_icon1 = element.all(by.css('.pokeball')).get(0);
				var pokeball_icon2 = element.all(by.css('.pokeball')).get(1);
				var pokeball_icon3 = element.all(by.css('.pokeball')).get(2);
				pokeball_icon1.click();
				pokeball_icon2.click();
				pokeball_icon3.click();
			});
		
			it('Then the selected Pokémon will be added to my caught list and And the tapped PokéBall icon will be colored ', function(){
				var pokeball_icon = element.all(by.css('.pokeball')).get(0);
				expect(pokeball_icon.getAttribute('class')).toMatch('pokeball-pink');
			});
		});
	});
	// Acceptance criteria 3
	describe('Given the Pokédex is displaying the list of all Pokémon', function(){
		/*
		beforeAll(function(){
			browser.get('/#/pokemon');  //Default route			
			browser.waitForAngular();  
		});
		*/

		describe('When I tap on a colored PokéBall icon', function(){
			beforeAll(function(){
				var pokeball_icon = element.all(by.css('.pokeball')).get(0);
				pokeball_icon.click();
			});
		
			it('Then the selected Pokémon will be removed to my caught list And the tapped PokéBall icon will be grayed out', function(){
				var pokeball_icon = element.all(by.css('.pokeball')).get(0);
				expect(pokeball_icon.getAttribute('class')).not.toMatch('pokeball-pink');
			});
		});
	});

	// Acceptance criteria 4
	describe('Given the Pokédex main menu is open', function(){
		beforeAll(function(){
			var btn_menu = element(by.id('btn-menu'));
			btn_menu.click();			
			browser.sleep(500);  //Tiempo de espera por la animación de jQuery
		});

		describe('When I tap on the "Caught pokemon" button', function(){
			beforeAll(function(){
				var btn_all = element.all(by.css('ul > li')).get(1);  //Caught pokemon
				btn_all.click();
				browser.waitForAngular();
			});
		
			it('Then a list of all the Pokémon I’ve caught will appear', function(){
				expect(element.all(by.repeater('pokemon in caught_pokemon')).count()).toEqual(2);
			});

			it('And each entry will display the Pokémon basic information', function(){
				expect(element.all(by.css('.pokemon-item-image')).get(0).isPresent()).toBe(true);
				expect(element.all(by.css('.pokemon-item-name')).get(0).isPresent()).toBe(true);
				expect(element.all(by.css('.pokemon-item-number')).get(0).isPresent()).toBe(true);
				expect(element.all(by.css('.type')).get(0).isPresent()).toBe(true);
			});
			it('And all entries will display a colored PokéBall icon', function(){
				element.all(by.css('.pokeball')).each(function(element, index){
					expect(element.getAttribute('class')).toMatch('pokeball-pink');
				});
			});
		});
	});


	// Acceptance criteria 5
	describe('Given the Pokédex is displaying the list of caught Pokémon', function(){
		beforeAll(function(){
			browser.get('/#/caught');  //Default route			
			browser.waitForAngular();  
		});

		describe('When I tap on a colored PokéBall icon', function(){
			beforeAll(function(){
				var pokeball_icon = element.all(by.css('.pokeball')).get(0);
				pokeball_icon.click();
			});
			it('Then the selected Pokémon will be removed to my caught list And a button with the label "Undo" will replace the Pokémon entry', function(){
				var undo_button = element.all(by.css('.btn.undo')).get(0);
				expect(undo_button.isDisplayed()).toBe(true); 				
			});
		});
	});

	// Acceptance criteria 6
	describe('Given the Pokédex is displaying the list of caught Pokémon', function(){
		
		beforeAll(function(){
			browser.get('/#/caught'); 		
			browser.waitForAngular();  
		});
		
		describe('And a Pokémon was removed by mistake', function(){
			beforeAll(function(){
				var pokeball_icon = element.all(by.css('.pokeball')).get(0);
				pokeball_icon.click();
			});
			it('Then the removed Pokémon will be re-added to the caught list And the re-added Pokémon will replace the "Undo" button', function(){
				var undo_button = element.all(by.css('.btn.undo')).get(0);
				undo_button.click();
				expect(undo_button.isDisplayed()).toBe(false); 
			});
		});
	});

});
