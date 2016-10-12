describe('User story 1', function(){
	describe('When I tap on the main menu button', function(){
		beforeAll(function(){
			browser.get('http://localhost:8080/#/pokemon');  //Default route
			var btn_menu = element(by.id('btn-menu'));
			btn_menu.click();			
			browser.sleep(500);  //Tiempo de espera por la animación de jQuery
		});
		
		it('Then a menu will expand', function(){
			var menu_expanded = element(by.css('.navbar-collapse.collapse.in'));
			expect(menu_expanded.isPresent()).toBe(true);
		});
		it('And the main menu button will be replaced by a close button', function(){
			var close_button = element(by.css('.glyphicon-remove'));
			expect(close_button.isPresent()).toBe(true);
		});
		it('And there will be a button labeled "All Pokémon"', function(){
			var menu = element.all(by.css('ul > li')).get(0);
			expect(menu.getText()).toMatch('ALL POKEMON');
		});
		it('And there will be a button labeled "Caught Pokémon"', function(){
			var menu = element.all(by.css('ul > li')).get(1);
			expect(menu.getText()).toMatch('CAUGHT POKEMON');
		});
		it('And there will be a button labeled "Battle Box"', function(){
			var menu = element.all(by.css('ul > li')).get(2);
			expect(menu.getText()).toMatch('BATTLE BOX');
		});
	});

	describe('When I tap on the close button', function(){
		beforeAll(function(){
			browser.get('http://localhost:8080/#/pokemon');  //Default route
			var btn_menu = element(by.id('btn-menu'));
			btn_menu.click();			
			browser.sleep(500);  //Tiempo de espera por la animación de jQuery
			btn_menu.click();			
			browser.sleep(500);
		});
		
		it('Then the main menu will collapse', function(){
			var menu_expanded = element(by.css('.navbar-collapse.collapse'));
			expect(menu_expanded.isPresent()).toBe(true);
		});
		it('And the close button will be replaced by the main menu button', function(){
			var close_button = element(by.css('.glyphicon-menu-hamburger'));
			expect(close_button.isPresent()).toBe(true);
		});
	});
});