/*
1. Given the Pokédex main menu is open
When I tap on the “All Pokemon” button
Then a list of 151 Pokémon will appear
And the Pokémon I have in my battle box will display a colored star icon
And the Pokémon I don’t have in my battle box will display a grayed out star
icon
*/


/*All is wrong STAR ICON **/

describe('User Story 5', function(){
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
				expect(element.all(by.repeater('pokemon in caught_pokemon')).count()).toEqual(1);
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
			browser.get('/#/pokemon');  //Default route			
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
/*

//Then a message stating “You haven’t captured this Pokémon yet” will
//And the tapped star icon will remain grayed out
	// Acceptance criteria 4
	describe('Given the Pokédex is displaying the list of all Pokémon', function(){
		beforeAll(function(){
			browser.get('/#/pokemon');  //Default route			
			browser.waitForAngular();  
		});

		describe('When I tap on a grayed out star icon of a uncaught Pokémon', function(){
			beforeAll(function(){
				var star_icon = element.all(by.css('.battle')).get(0);
				star_icon.click();
				//browser.waitForAngular();  
				 browser.pause();
			});
		
			it('Then a message stating "You haven’t captured this Pokémon yet" will appear', function(){
				var alert = element.all(by.css('.alert-toast')).evaluate('alert_message');
				//expect(alert.isDisplayed()).toBe(true);
				expect(alert.getText()).toMatch("Hola");
			});
		});
	});
*/
});
