describe('podOver', function () {
    it('Should say Click Me when mouse is hovered over', function () {
        expect(podOver.object).not.toBeNull('Click Me');
    });
    
    it('Should change background color when mouse is hovered over', function () {
        expect(podOver.object).not.toBeNull('#D94A38');
    });
});