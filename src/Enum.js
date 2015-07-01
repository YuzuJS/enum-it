class EnumValue {
    constructor(key, asNumber) {
        this._key = key.toUpperCase();
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

export default class Enum {
    constructor(...keys) {
        this._values = [];
        keys.forEach((key, index) => this._defineEnumValueProperty(key, index + 1));
    }

    _defineEnumValueProperty(key, value) {
        var enumValue = new EnumValue(key, value);
        this._values.push(enumValue);

        Object.defineProperty(this, enumValue.value, {
            value: enumValue,
            enumerable: true
        });
    }

    keys() {
        return this._values.map((enumValue) => enumValue.value);
    }
}
