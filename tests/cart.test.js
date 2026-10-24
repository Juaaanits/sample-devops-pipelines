const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateCartTotal } = require('../index');

test('calculates the cart total', () => {
    const cart = [
    { price: 1.5, quantity: 4 },
    { price: 2.5, quantity: 1 },
    { price: 3, quantity: 2 },
  ];

  assert.equal(calculateCartTotal(cart), 14.5);
});

test('returns zero for an empty cart', () => {
    assert.equal(calculateCartTotal([]), 0);
});