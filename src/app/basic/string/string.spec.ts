import { message } from "./string";

describe('Pruebas con string', () => {
    it('Debe regresar un string', () => {
        const output = message('Valp');
        expect(typeof output).toBe('string');
    });
});

