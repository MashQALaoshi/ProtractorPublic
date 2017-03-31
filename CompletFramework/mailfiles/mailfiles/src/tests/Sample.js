var cred = require('../configurations/credentials');
var obj = require('../configurations/object');

function selectOption(selector, item) {
  var selectList, desiredOption;

  selectList = this.findElement(selector);
  selectList.click();

  selectList.findElements(protractor.By.tagName('option'))
      .then(function findMatchingOption(options) {
        options.some(function (option) {
          option.getText().then(function doesOptionMatch(text) {
            if (item === text) {
              desiredOption = option;
              return true;
            }
          });
        });
      })
      .then(function clickOption() {
        if (desiredOption) {
          desiredOption.click();
        }
      });
}

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get(cred.url);

    element(by.model(obj.name)).sendKeys(cred.name);

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
    //browser.driver.close();
  });
/*
  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');

      todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoList.todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor tests');
    });

  });
 */
});
