var expect = chai.expect;

describe('App', function () {
    it('should be defined', function () {
        expect(App).to.be.a('object');
    });

    describe('MenuModel', function () {
        it('should create constructor', function () {
            expect(App).to.have.property('MenuModel');
            expect(App.MenuModel).to.be.a('function');
        });
    });
});

