const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');


Given("I open app home page", () => {
  return client.page.counter()
    .navigate();
});

Then("counter value is {string}", (value) => {
  return client
    .page
    .counter()
    .checkCounterVisibility(value)
    .pause(1000);
});

When("I increase counter", () => {
  return client
    .page
    .counter()
    .incrementCounter();
});

When("I decrease counter", () => {
  return client
    .page
    .counter()
    .decrementCounter();
});