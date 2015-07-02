import EnumValue from "../src/EnumValue";

describe("EnumValue", function () {
    beforeEach(() => {
        this.State = new EnumValue("foo", 100);
    });

    it("should have a value", () => {
        this.State.value.should.equal("foo");
    });

    describe("when converted to a primitive", () => {
        describe("by casting to a String", () => {
            it("should return the key", () => {
                String(this.State).should.equal("foo");
            });
        });
        describe("by using the `+` operator", () => {
            it("should return the key", () => {
                ("The state is " + this.State).should.equal("The state is foo");
            });
        });
        describe("by calling `toNumber`", () => {
            it("should return a number", () => {
                this.State.toNumber().should.equal(100);
            });
        });
    });
});
