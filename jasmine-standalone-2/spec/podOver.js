describe('podOver', function () {
    it('Should say Click Me', function () {
        expect(podOver.object).not.toBeNull('Click Me');
    });
    
    it('Should change background color', function () {
        expect(podOver.object).not.toBeNull('#D94A38');
    });
});