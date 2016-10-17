/*All is wrong STAR ICON **/

describe('User Story 5', function(){
	// Acceptance criteria 1
	describe('Given the Pokédex main menu is open', function(){
		beforeAll(function(){
			//browser.get('/#/pokemon');  //Default route
			var btn_menu = element(by.id('btn-menu'));
			btn_menu.click();			
			browser.sleep(500);  //Tiempo de espera por la animación de jQuery
		});

		describe('When I tap on the "All Pokemon" button', function(){
			beforeAll(function(){
				var btn_all = element.all(by.css('ul > li')).get(0);
				btn_all.click();
			});
		
			it('Then a list of 151 (28) Pokémon will appear', function(){
				expect(element.all(by.repeater('pokemon in pokemons')).count()).toEqual(28);
			});
			it('And the Pokémon I have in my battle box will display a colored star icon', function(){
				var pokemon = element.all(by.css('.battle-gold'));
				expect(pokemon.count()).toBe(0); 
			});
			it('And the Pokémon I don’t have in my battle box will display a grayed out star icon', function(){
				var caught_pokemon = element.all(by.css('.battle')).get(0); //Bulbasaur
				expect(caught_pokemon.getAttribute('class')).toMatch('battle');
			});
		});
	}); 

	// Acceptance criteria 2
	describe('Given the Pokédex main menu is open', function(){
		beforeAll(function(){
			var btn_menu = element(by.id('btn-menu'));
			btn_menu.click();			
			browser.sleep(500);  //Tiempo de espera por la animación de jQuery
		});

		describe('When I tap on the "Caught Pokemon" button', function(){
			beforeAll(function(){
				var btn_all = element.all(by.css('ul > li')).get(1);
				btn_all.click();
				browser.waitForAngular();
			});
		
			it('Then a list of all the Pokémon I have caugth will appear', function(){
				expect(element.all(by.repeater('pokemon in caught_pokemon')).count()).toEqual(2);
			});
			it('And the Pokémon I have in my battle box will display a colored star icon', function(){
				var pokemon = element.all(by.css('.battle-gold'));
				expect(pokemon.count()).toBe(0); 

			});
			it('And the Pokémon I don’t have in my battle box will display a grayed out star icon', function(){
				var caught_pokemon = element.all(by.css('.battle')).get(0); //Bulbasaur
				expect(caught_pokemon.getAttribute('class')).toMatch('battle');
			});
		});
	}); 

	// Acceptance criteria 3
	describe('Given the Pokédex is displaying the list of all Pokémon', function(){
		beforeAll(function(){
			browser.get('/#/pokemon');  		
			browser.waitForAngular();  
		});

		describe('When I tap on a grayed out star icon of a caught Pokémon', function(){
			beforeAll(function(){
				var star_icon = element.all(by.css('.battle')).get(1);
				star_icon.click();
			});
		
			it('Then the selected Pokémon will be added to my battle box and the tapped star icon will be colored', function(){
				var star_icon = element.all(by.css('.battle')).get(1);
				expect(star_icon.getAttribute('class')).toMatch('battle-gold');
			});
		});
	});


	// Acceptance criteria 4
	describe('Given the Pokédex is displaying the list of all Pokémon', function(){
		/*
		beforeAll(function(){
			browser.get('/#/pokemon');  //Default route			
			browser.waitForAngular();  
		});
		*/

		describe('When I tap on a grayed out star icon of a uncaught Pokémon', function(){
			beforeAll(function(){
				var star_icon = element.all(by.css('.battle')).get(0);
				star_icon.click();
				browser.ignoreSynchronization = true //Avoid waiting for the timeout of the toast
			});
		
			it('Then a message stating "You haven’t captured this Pokémon yet" will appear', function(){
				var alert = element.all(by.css('.alert-toast')).get(0);
				expect(alert.isDisplayed()).toBe(true);
				expect(alert.getText()).toMatch("You haven’t captured this Pokémon yet");
				browser.ignoreSynchronization = false //Protractor normal behavior
			});
			it('And the tapped star icon will remain grayed out', function(){
				var star_icon = element.all(by.css('.battle')).get(0);
				expect(star_icon.getAttribute('class')).not.toMatch('battle-gold');
			});
		});
	});

	//Aceptance criteria 5
	describe('Given the Pokédex is displaying the list of caught Pokémon', function(){
		beforeAll(function(){
			browser.get('/#/caught');  //Caught pokemons			
			browser.waitForAngular();  
		});

		describe('When I tap on a grayed out star icon', function(){
			beforeAll(function(){
				var star_icon = element.all(by.css('.battle')).get(1);
				star_icon.click();
			});
			it('Then the selected Pokémon will be added to my battle box and the tapped star icon will be colored', function(){
				var star_icon = element.all(by.css('.battle')).get(1);
				expect(star_icon.getAttribute('class')).toMatch('battle-gold');
			});		
		});
	});

	//Aceptance criteria 6
	describe('Given the Pokédex is displaying the list of caught Pokémon', function(){
		/*
		beforeAll(function(){
			browser.get('/#/caught');  //Caught pokemons			
			browser.waitForAngular();  
		});
		*/

		describe('When I tap on a grayed out star icon', function(){
			beforeAll(function(){
				var star_icon = element.all(by.css('.battle')).get(0);
				star_icon.click();
			});
			it('Then the selected Pokémon will be removed from my battle box And the tapped star icon will be grayed out', function(){
				var star_icon = element.all(by.css('.battle')).get(0);
				expect(star_icon.getAttribute('class')).not.toMatch('battle-gold');
			});		
		});
	});

	//Aceptance criteria 7
	describe('Given the Pokédex main menu is open', function(){
		
		beforeAll(function(){
			var btn_menu = element(by.id('btn-menu'));
			btn_menu.click();			
			browser.sleep(500);  //Tiempo de espera por la animación de jQuery
		});

		describe('When I tap on the "Battle Box" button', function(){
			beforeAll(function(){
				var btn_all = element.all(by.css('ul > li')).get(2);
				btn_all.click();
				browser.waitForAngular();
			});
		
			it('Then a list of Pokémon in my battle box will appear', function(){
				expect(element.all(by.repeater('pokemon in battle_pokemon ')).count()).toEqual(1);
			});
			it('And each entry will display the Pokémon basic information', function(){
				expect(element.all(by.css('.pokemon-item-image')).get(0).isPresent()).toBe(true);
				expect(element.all(by.css('.pokemon-item-name')).get(0).isPresent()).toBe(true);
				expect(element.all(by.css('.pokemon-item-number')).get(0).isPresent()).toBe(true);
				expect(element.all(by.css('.type')).get(0).isPresent()).toBe(true);
			});
			it('And all entries will display a colored star icon', function(){
				element.all(by.css('.battle')).each(function(element, index){
					expect(element.getAttribute('class')).toMatch('battle-gold');
				});
			});
		});
	});


	//Aceptance criteria 8
	describe('Given the Pokédex is displaying my battle box', function(){

		describe('When I tap on a colored PokéBall icon', function(){
			beforeAll(function(){
				var star_icon = element.all(by.css('.pokeball')).get(0);
				star_icon.click();
				browser.ignoreSynchronization = true //Avoid waiting for the timeout of the toast
			
			});
			
			it('Then a message will appear stating "You cannot un-catch Pokémon that are in your battle box"', function(){
				var alert = element.all(by.css('.alert-toast')).get(0);
				expect(alert.isDisplayed()).toBe(true);
				expect(alert.getText()).toMatch("You cannot un-catch Pokémon that are in your battle box");
				browser.ignoreSynchronization = false //Protractor normal behavior
				
			});
		});
	});

});

/*
Lo que sigue LEEEEEMMMMMME:
And the PokéBall icon will remain colored
*/


/* browser.ignoreSynchronization=true */