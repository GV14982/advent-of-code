"use strict";
exports.__esModule = true;
var data = require("./data.json");
var parsePasswords = function (arr) {
    return arr.map(function (s) {
        var password = {
            rule: null,
            char: null,
            val: null
        };
        s.split(" ").forEach(function (e, i) {
            switch (i % 3) {
                case 0:
                    password.rule = e.split("-").map(function (n) { return parseInt(n); });
                    break;
                case 1:
                    password.char = e.replace(':', '');
                    break;
                case 2:
                    password.val = e;
                    break;
                default:
                    throw new Error('Something broke parsing the passwords');
            }
        });
        return password;
    });
};
var checkPasswords = function (passwords) {
    return passwords.filter(function (password) {
        var regex = new RegExp("" + password.char, 'g');
        var match = password.val.match(regex);
        console.log(match);
        return Array.isArray(match) && match.length >= password.rule[0] && match.length <= password.rule[1];
    }).length;
};
var passwords = checkPasswords(parsePasswords(data));
console.log(passwords);
