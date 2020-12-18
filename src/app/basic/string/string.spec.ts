import { message } from "./string";

describe('Pruebas con string', () => {
    it('Debe regresar un string', () => {
        const output = message('Valp');
        expect(typeof output).toBe('string');
    });
    it('Debe retornar el parametro recibido', () => {
        const name = 'Valp';
        const output = message(name);      
        expect(output).toContain(name);
    })
});

