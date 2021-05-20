"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var Metadatakeys_1 = require("./Metadatakeys");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('Metadatakeys.path', target.prototype, key);
            var method = Reflect.getMetadata('Metadatakeys.method', target.prototype, key);
            var middlewares = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["" + routePrefix + path], middlewares), [routeHandler]));
            }
        }
    };
}
exports.controller = controller;
