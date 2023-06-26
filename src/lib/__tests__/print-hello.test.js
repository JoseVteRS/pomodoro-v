import { it, test } from "vitest";
import { printHello } from "../print-hello";


test('printHello', () => {
   it('should be a function', ()=> {
         expect(typeof printHello).toBe('function');
   })
});