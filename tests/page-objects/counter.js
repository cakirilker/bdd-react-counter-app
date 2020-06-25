
const counterCommands = {
  checkCounterVisibility(value) {
    return this
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('@counterText', 1000)
      .assert.containsText('@counterText', value);
  },
  incrementCounter() {
    return this
      .click('@incrementButton');
  },
  decrementCounter() {
    return this
      .click('@decrementButton');
  }
};

module.exports = {
  url: 'http://localhost:3000/',
  elements: {
    counterText: { selector: '#counter-text' },
    incrementButton: '#increment',
    decrementButton: '#decrement'
  },
  commands: [counterCommands]
}