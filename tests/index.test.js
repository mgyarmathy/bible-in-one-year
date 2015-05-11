var ReadingPlan = require('../');
var test = require('tape');

test('bible-in-one-year', function (t) {
  t.plan(6);

  var default_plan = new ReadingPlan();
  t.equal(default_plan.length(), 365, "default plan has 365 entries");

  var oldnew_testament_plan = new ReadingPlan('oldnew-testament');
  t.equal(oldnew_testament_plan.length(), 365, "oldnew_testament_plan has 365 entries");

  var chronological_plan = new ReadingPlan('chronological');
  t.equal(chronological_plan.length(), 365, "chronological_plan has 365 entries");

  var mcheyne_plan = new ReadingPlan('mcheyne');
  t.equal(mcheyne_plan.length(), 365, "mcheyne_plan has 365 entries");
  
  var new_testament_plan = new ReadingPlan('new-testament');
  t.equal(new_testament_plan.length(), 365, "new_testament_plan has 365 entries");
  
  t.equal(default_plan.getDay(0), default_plan.getDay(0+default_plan.length()), "first day equals the same day one year later");
});