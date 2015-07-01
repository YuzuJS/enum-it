import EnumValue from "./EnumValue";

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
