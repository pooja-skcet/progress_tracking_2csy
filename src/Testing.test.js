import { add, sub } from './Testing'
test( () =>{
    expect(add(9,3)).toBe(12);
    expect(add(-3,-10)).toBe(-13);
});
test ( ()=>{
    expect(sub(9,3)).toBe(6);
    expect(sub(3,9)).toBe(-6);
});