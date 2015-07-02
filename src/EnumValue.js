export default class EnumValue {
    constructor(key, asNumber) {
        if (typeof key !== "string") {
            throw new TypeError("EnumValue: key must be a string");
        }
        this._key = key;
        this._number = asNumber;
    }

    get value() {
        return this._key;
    }

    toNumber() {
        return this._number;
    }

    toString() {
        return this.value;
    }

    valueOf() {
        return this.value;
    }
}
