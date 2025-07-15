import { sum } from '../index.js';

describe('UNIT TEST: SUM', () => {

    // SUM ES UNA FUNCION
    // SI RECIBE PARAMETROS
    // SI LOS PARAMETROS SON NUMÉRICOS
    // SI EL RETURN ES NUMERICO

    test('sum should be a function', () => {
        expect(typeof sum).toBe('function');
    });

    test('should has a two parameters', () => {
        expect(() => sum(1)).toThrow('No se enviaron parametros!');
    });

    test('should received two parameters numeric', () => {
        expect(() => sum(1, "hola")).toThrow('Los parametros deben ser numéricos');
        expect(() => sum(null, 3)).toThrow();
    });

    test('should response with a Number', () => {
        const response = sum(3, 2);
        expect(typeof response).toBe('number');
    });
});