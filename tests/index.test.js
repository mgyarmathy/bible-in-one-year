var bioy = require('../');
var test = require('tape');

test('bible-in-one-year', function (t) {
  t.plan(3);

  t.equal(bioy.length(), 366, "has 366 entries");
  
  var result = true;
  for(var i = 1; i<=bioy.length(); i++) {
    var d = bioy.getDay(i)
    if (d.address == undefined || d.url == undefined) {
        result = false;
    }
  }
  t.ok(result, "all entries have an address and url");

  t.deepEqual(bioy.getDay(0), bioy.getDay(0+bioy.length()), "first day equals the same day one year later");
});