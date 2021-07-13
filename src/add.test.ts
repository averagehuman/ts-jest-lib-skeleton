
import { add2 } from './add';

describe('add should work', () => {

    test('one plus two is three', () => {
        expect(add2(1)).toEqual(4);
    });

    test('two plus two is four', () => {
        expect(add2(2)).toEqual(4);
    });

});
