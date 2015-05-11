var oldnewtestament = require("./lib/oldnew-testament.json");
var mcheyne = require("./lib/mcheyne.json");
var chronological = require("./lib/chronological.json");
var newtestament = require("./lib/new-testament.json");

var ReadingPlan = function(reading_plan) {
    var entries;

    switch (reading_plan) {
        case 'oldnew-testament':
            entries = oldnewtestament;
            break;
        case 'mcheyne':
            entries = mcheyne;
            break;
        case 'chronological':
            entries = chronological;
            break;
        case 'new-testament':
            entries = newtestament;
            break;
        default:
            entries = oldnewtestament;
            break;
    }

    this.length = function() {
        return entries.length;
    };

    this.getDay = function(index) {
        var index = index % this.length();
        return entries[index]; 
    }
};

module.exports = ReadingPlan;