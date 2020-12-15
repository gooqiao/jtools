import { toUpperCaseDeep } from '../toUpperCaseDeep';
import { toUpperCase } from '../toUpperCase';
import { toLowerCase } from '../toLowerCase';
import { toLowerCaseDeep } from '../toLowerCaseDeep';

describe('toUpperCase', () => {
  it('array toUpperCase', () => {
    expect(toUpperCase([{ name: 'x' }, { name: 'y' }])).toEqual([
      { Name: 'x' },
      { Name: 'y' },
    ]);
  });

  it('deep array toUpperCase', () => {
    expect(
      toUpperCaseDeep([
        { name: 'x', props: { name: 'x' } },
        { name: 'y', props: { name: 'x' } },
      ])
    ).toEqual([
      { Name: 'x', Props: { Name: 'x' } },
      { Name: 'y', Props: { Name: 'x' } },
    ]);
  });

  it('object toUpperCase', () => {
    expect(toUpperCase({ name: 'x' })).toEqual({ Name: 'x' });
  });

  it('deep object toUpperCase', () => {
    expect(toUpperCaseDeep({ name: 'x', props: { name: 'x' } })).toEqual({
      Name: 'x',
      Props: { Name: 'x' },
    });
  });
});

describe('toLowerCase', () => {
  it('array toLowerCase', () => {
    expect(toLowerCase([{ Name: 'x' }, { Name: 'y' }])).toEqual([
      { name: 'x' },
      { name: 'y' },
    ]);
  });

  it('deep array toLowerCase', () => {
    expect(
      toLowerCaseDeep([
        { Name: 'x', Props: { Name: 'x' } },
        { Name: 'y', Props: { Name: 'x' } },
      ])
    ).toEqual([
      { name: 'x', props: { name: 'x' } },
      { name: 'y', props: { name: 'x' } },
    ]);
  });

  it('object toLowerCase', () => {
    expect(toLowerCase({ Name: 'x' })).toEqual({ name: 'x' });
  });

  it('deep object toLowerCase', () => {
    const params = { name: 'x', props: { name: 'x' } };

    const result = {
      Name: 'x',
      Props: { Name: 'x' },
    };

    expect(toLowerCaseDeep(result)).toEqual(params);
  });
});
