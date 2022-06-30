import { mergeFiles } from '../index';

describe('Merge Yamls', () => {
    test('Should merge the ayml files', () => {
        const input = [__dirname + '/config1.yml', __dirname + '/config2.yml'];
        expect(mergeFiles(input)[0].foo).toEqual('bar');
        expect(mergeFiles(input)[0].bar.foo).toEqual('x');
        expect(mergeFiles(input)[0].bar.x).toEqual('y');
        expect(mergeFiles(input)[0].bar.y).toEqual('z');
        expect(mergeFiles(input)[0].something).toEqual('else');
    });
});
