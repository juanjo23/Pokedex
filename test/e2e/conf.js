// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'user.story1.spec.js',
    'user.story2.spec.js',
    'user.story3.spec.js',
    'user.story4.spec.js',
    'user.story5.spec.js'
  ],
  baseUrl: 'http://localhost:8080',
  onPrepare: function(){
  	browser.driver.manage().window().setPosition(0, 0);
  	browser.driver.manage().window().setSize(450, 720);
  }
}