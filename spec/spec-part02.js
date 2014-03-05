describe('joins all elements of an array into a string: Array is first argument; String is optional second argument', function(){
    it('return string of joined array elements despite having no specified delimiter  ', function(){
        expect(join(['one', 'two', 'three'])).toBe('onetwothree');
    });
    it('return string of joined array elements with no space between them', function(){
        expect(join(['one', 'two', 'three'], '')).toBe('onetwothree');
    });
    it('returns string array elements joined by delimiter if specified delimiter is a string', function(){
        expect(join(['one', 'two', 'three'], '?')).toBe('one?two?three');
    });
    it('returns false if second argument is not a string value', function(){
        expect(join(['one', 'two', 'three'], 8)).toBeFalsy();
    });
 
});
