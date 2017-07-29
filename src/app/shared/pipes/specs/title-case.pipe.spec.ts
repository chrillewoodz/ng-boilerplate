import {TitleCasePipe} from '@pipes/title-case.pipe';

describe('TitleCasePipe', () => {

  const pipe: TitleCasePipe = new TitleCasePipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });

  it('transforms "abc def abc-def" to "Abc Def Abc-def"', () => {
    expect(pipe.transform('abc def abc-def')).toBe('Abc Def Abc-def');
  });

  it('transforms "aBc" to "Abc"', () => {
    expect(pipe.transform('aBc')).toBe('Abc');
  });

  it('transforms "ABC" to "Abc"', () => {
    expect(pipe.transform('ABC')).toBe('Abc');
  });

  it('transforms "abCdEF" to "Abcdef"', () => {
    expect(pipe.transform('abCdEF')).toBe('Abcdef');
  });

  it('transforms "I am a grey-white horse with a lean mean tenderloin-E" to "I Am A Grey-white Horse With A Lean Mean Tenderloin-e"', () => {
    expect(pipe.transform('I am a grey-white horse with a lean mean tenderloin-E')).toBe('I Am A Grey-white Horse With A Lean Mean Tenderloin-e');
  });
});
