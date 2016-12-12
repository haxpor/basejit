describe("basejit's core tests", function() {
    
    it("should have global text's value equal to 'test'", function() {
        expect(Basejit.globalText).toEqual("Test");
    });

    it("should return 'Hello World' from returnHelloWorld function", function() {
        expect(Basejit.util.returnHelloWorld()).toEqual("Hello World");
    });

    it("should have 'Dynamic Text' as value of dynamicText property", function() {
        expect(Basejit.dynamicText).toEqual("Dynamic Text");
    });
});
