"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(Promise.prototype, {
    caught: {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.catch(console.error);
        },
    },
});