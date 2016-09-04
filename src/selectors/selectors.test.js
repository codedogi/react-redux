import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Corey', lastName: 'House'},
        {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];

      const expected= [
        {value: 'cory-house', text: 'Corey House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
