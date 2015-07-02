import Enum from "../src/Enum";
import EnumValue from "../src/EnumValue";

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

    it("should return the correct value", () => {
        this.States.valueOf().should.be.eql(states);
    });

    it("should return the correct string value", () => {
        this.States.toString().should.equal(statesJson);
    });

    it("should return the correct JSON value", () => {
        JSON.stringify(this.States).should.be.eql(statesJson);
    });

    describe("keys property", () => {
        it("should be exposed as an array", () => {
            this.States.keys().should.be.instanceof(Array);
        });

        it("should have the correct keys", () => {
            this.States.keys().should.be.eql(["UNKNOWN", "READY", "PENDING"]);
        });
    });

    describe("each enum value", () => {
        it("should be an instanceof EnumValue", () => {
            (this.States.UNKNOWN instanceof EnumValue).should.equal(true);
            (this.States.READY instanceof EnumValue).should.equal(true);
            (this.States.PENDING instanceof EnumValue).should.equal(true);
        });

        it("should have a value", () => {
            this.States.UNKNOWN.value.should.equal("UNKNOWN");
            this.States.READY.value.should.equal("READY");
            this.States.PENDING.value.should.equal("PENDING");
        });

        it("should have a the correct toNumber value", () => {
            this.States.UNKNOWN.toNumber().should.equal(1);
            this.States.READY.toNumber().should.equal(2);
            this.States.PENDING.toNumber().should.equal(3);
        });
    });
});
