// 👉 STEP 1:  Import reverseString from reverse-string.js
const { reverseString } = require('../index')


//👉 STEP 2: Add a describe() block for the function we will test
describe('reverseString', () => {
  //👉 STEP 3: Add a happy path test for the function
  test('reverses single word string', () => {
    expect(reverseString('pancake')).toEqual('ekacnap');
  });

  test('reverses multiple word strings', () => {
    expect(reverseString('I eat 3 pancakes')).toEqual('sekacnap 3 tae I')
  });
  //👉 STEP 3: Add a sad path test for the function
  test('returns an empty string when passed just numbers', () => {
    expect(reverseString(123)).toEqual("");
  });
  test('reverses string with punctuation', () => {
    expect(reverseString("Hello World!")).toEqual("!dlroW olleH")
  })
})


