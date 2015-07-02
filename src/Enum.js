import EnumValue from "./EnumValue";

export default class Enum {
    constructor(...keys) {
        this._values = [];
        var options = { startNumber: 1 };
        if (typeof keys[keys.length-1] === "object") {
            options = keys.pop();
        }
        keys.forEach((key, index) => this._defineEnumValueProperty(key, options.startNumber + index));
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

    valueOf() {
        var result = {};
        this._values.forEach((enumValue) => result[enumValue.value] = enumValue.toNumber());
        return result;
    }

    toString() {
        return JSON.stringify(this);
    }

    toJSON() {
        return this.valueOf();
    }
}
