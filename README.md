# solidity-unittests-helpers

## Getting Started

These instructions will get you a useful helpers for testing purposes your Solidity Dapp.

### Prerequisites

What things you need to install the software and how to install them:

* [Get npm](https://www.npmjs.com/get-npm).

### Installing

To add an entry to your package.json's dependencies:

```javascript
npm install solidity-unittests-helpers --save
```

To add an entry to your package.json's devDependencies:

```javascript
npm install solidity-unittests-helpers --save-dev
```

## Remove the package

[npm-uninstall](https://docs.npmjs.com/cli/uninstall)

```javascript
npm uninstall [<@scope>/]solidity-unittests-helpers[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional|--no-save]

aliases: remove, rm, r, un, unlink
```

This uninstalls a package, completely removing everything npm installed on its behalf.

Example:
```javascript
npm uninstall solidity-unittests-helpers
```

In global mode (ie, with -g or --global appended to the command), it uninstalls the current package context as a global package.

npm uninstall takes 3 exclusive, optional flags which save or update the package version in your main package.json:

* -S, --save: Package will be removed from your dependencies.

* -D, --save-dev: Package will be removed from your devDependencies.

* -O, --save-optional: Package will be removed from your optionalDependencies.

* --no-save: Package will not be removed from your package.json file.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this page](https://www.npmjs.com/package/solidity-unittests-helpers).

## Quick Usage

* ## Reverter
Can be used to ensure a clean state for testing. [Source](https://github.com/andriy-baran/solidity-unittests-helpers/blob/master/lib/reverter.js)

```javascript
var SolUnittestHelpers = require("solidity-unittests-helpers");


beforeEach(function () {
    SolUnittestHelpers.snapshot();
})

afterEach(function () {
    SolUnittestHelpers.revert();
});
```

* ## Asserts

Provide way to testing negative and positive transactions.

Negative testing commonly referred to as error path testing or failure testing is generally done to ensure the stability of the application.

[Source](https://github.com/andriy-baran/solidity-unittests-helpers/blob/master/lib/asserts.js)
```javascript
var SolUnittestHelpers = require("solidity-unittests-helpers");

let asserts = SolUnittestHelpers.asserts(assert);

// equal
asserts.equal(3, '3', '== coerces values to strings');

// isTrue
var teaServed = true;
asserts.isTrue(teaServed, 'the tea has been served');

// isFalse
var teaServed = false;
asserts.isFalse(teaServed, 'no tea yet? hmm...');

// throws
asserts.throws(fn, 'function throws a reference error');

// doesNotThrow
asserts.doesNotThrow(fn, 'Any Error thrown must not have this message');

```


* ## latestTime

Get timestamp from the latest block [Source](https://github.com/andriy-baran/solidity-unittests-helpers/blob/master/lib/latestTime.js)

```javascript
var SolUnittestHelpers = require("solidity-unittests-helpers");

let time = await SolUnittestHelpers.latestTime();
console.log("time:", time);

// ==> "time: 1528634956"
```

* ## increaseTime

[Source](https://github.com/andriy-baran/solidity-unittests-helpers/blob/master/lib/increaseTime.js)

### duration

```javascript
var SolUnittestHelpers = require("solidity-unittests-helpers");

let duration = SolUnittestHelpers.duration;

// seconds
duration.seconds(25);
// ==> 25 seconds == 25

// minutes
duration.minutes(1);
// ==> 2 minutes == 120

// days
duration.days(1);
//==> 1 days == 86400

// weeks
duration.weeks(1);
// ==> 1 weeks == 604800

// years (1 year == 365 days)
// Take care if you perform calendar calculations using these units,
// because not every year equals 365 days and not even every day has
// 24 hours because of leap seconds.
// https://en.wikipedia.org/wiki/Leap_second

duration.year(1);
// ==> 1 years == 31536000

```

### increaseTimeWith

```javascript
var SolUnittestHelpers = require("solidity-unittests-helpers");

await console.log('Time now: ', SolUnittestHelpers.latestTime());
await SolUnittestHelpers.increaseTimeWith(duration.days(1));
await console.log('after increaseTimeWith: ', SolUnittestHelpers.latestTime());
// Time now: 1528723737
// after increaseTimeWith: 1528810142
```

### increaseTimeTo

```javascript
var SolUnittestHelpers = require("solidity-unittests-helpers");

await console.log('Time now: ', SolUnittestHelpers.latestTime());
await SolUnittestHelpers.increaseTimeTo(duration.years(2019));
await console.log('after increaseTimeTo: ', SolUnittestHelpers.latestTime());
// Time now: 1528638172
// after increaseTimeTo: 63671184023
```

## Authors

* **Vanja Solomichev** - [Vanija](https://github.com/VanijaDev)

* **Andrii Baran** - [andriy-baran](https://github.com/andriy-baran)

* **Serhii Budnik** - [Zikot4](https://github.com/Zikot4)


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/andriy-baran/solidity-unittests-helpers/blob/master/LICENSE) file for details

## Contributing

We love pull requests. If you have something you want to add or remove, please open a new pull request.