import Enum from "../src/Enum";

const states = { UNKNOWN: 1, READY: 2, PENDING: 3 };
const statesJson = JSON.stringify(states);

describe("Enum", function () {
    beforeEach(() => {
        this.States = new Enum("UNKNOWN", "READY", "PENDING");
    });

    it("should expose all enum values", () => {
        this.States.should.ownProperty("UNKNOWN");
        this.States.should.ownProperty("READY");
        this.States.should.ownProperty("PENDING");
    });

    it("should expose keys as an array", () => {
        this.States.keys().should.be.instanceof(Array);
    });

    it("should return the correct value", () => {
        this.States.valueOf().should.be.eql(states);
    });

    it("should return the correct string value", () => {
        this.States.toString().should.equal(statesJson);
    });

    it("should return the correct JSON value", () => {
        JSON.stringify(this.States).should.be.eql(statesJson);
    });

    it("should have the right keys", () => {
        this.States.keys().should.be.eql(["UNKNOWN", "READY", "PENDING"]);
    });

    describe("each enum value", () => {
        it("should have a value", () => {
            this.States.UNKNOWN.value.should.equal("UNKNOWN");
            this.States.READY.value.should.equal("READY");
            this.States.PENDING.value.should.equal("PENDING");
        });

        describe("when converted to a primitive", () => {
            describe("by casting to a String", () => {
                it("should return the key", () => {
                    String(this.States.UNKNOWN).should.equal("UNKNOWN");
                    String(this.States.READY).should.equal("READY");
                    String(this.States.PENDING).should.equal("PENDING");
                });
            });
            describe("by using the `+` operator", () => {
                it("should return the key", () => {
                    ("The state is " + this.States.UNKNOWN).should.equal("The state is UNKNOWN");
                    ("The state is " + this.States.READY).should.equal("The state is READY");
                    ("The state is " + this.States.PENDING).should.equal("The state is PENDING");
                });
            });
            describe("by calling `toNumber`", () => {
                it("should return a number", () => {
                    this.States.UNKNOWN.toNumber().should.equal(1);
                    this.States.READY.toNumber().should.equal(2);
                    this.States.PENDING.toNumber().should.equal(3);
                });
            });
        });
    });
});
