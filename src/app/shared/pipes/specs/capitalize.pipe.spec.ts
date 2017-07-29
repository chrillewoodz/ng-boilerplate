import {CapitalizePipe} from '@pipes/capitalize.pipe';

describe('CapitalizePipe', () => {

  const pipe: CapitalizePipe = new CapitalizePipe();

  it('should transform "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('should transform "hello world I am not the universe" to "Hello world I am not the universe"', () => {
    expect(pipe.transform('hello world I am not the universe')).toBe('Hello world I am not the universe');
  });
});
