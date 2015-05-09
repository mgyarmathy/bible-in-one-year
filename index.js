var entries = require("./lib/bible-in-one-year.json");

module.exports = {
    length: function() {
        return entries.length;
    }, 
    getDay: function(index) {
        var index = index % this.length();
        return entries[index];
    },
};