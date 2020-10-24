import util from '../../src/js/util'

describe('add()', () => {
  test.each`
    a          | b       | expected
    ${1}       | ${1}    | ${2}
    ${'1'}     | ${'1'}  | ${'11'}
  `('$a, $b => $expected', ({ a, b, expected }) => {
    expect(util.add(a,b)).toBe(expected);
  });
});