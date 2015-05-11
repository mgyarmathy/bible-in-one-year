bible-in-one-year
===

One year scripture reading plan for the Bible.

## Installation

    npm install --save bible-in-one-year

## Usage

    var ReadingPlan = require('bible-in-one-year');

    var oldnew_testament_plan = ReadingPlan('oldnew-testament');

    console.log(oldnew_testament_plan.getDay(0));
    // Genesis 1–3; Matthew 1

Available plans are "oldnew-testament", "mcheyne", "chronological", or "new-testament".

## Tests

    npm test

## Release History

* 1.0.0 Initial release