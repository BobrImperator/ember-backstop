# ember-backstop

**BackstopJS visual regression testing addon for Ember.**

- Simple to add, Simple to use.
- Works in Local or CI pipeline.
- Manages your test and reference files.
- Works in your existing Acceptance and Integration tests.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

### First...
```
ember install ember-backstop
```
### If you use GIT
Add these lines to your GIT ignore...
```
  #backstopjs
  html_report
  bitmaps_test
```

### If you use Mirage 
Add this line to your Mirage config...
```
  this.passthrough('/backstop/**');
```

Usage
------------------------------------------------------------------------------
### Backstop-remote service
You will need the backstop-remote service running for visual tests.

In a seperate window run...
```
ember backstop-remote
```
Leave that running while you're testing. When you don't need it anymore you can either close the window or run `ember backstop-stop` to stop the service.


### Adding a visual regression test is simple...
First import the backstop helper into your test...
```
import backstop from 'ember-backstop/test-support/backstop';
```

Then add a `backstop()` helper to any UI state you want to test...
```
  test('it renders the thing', async function(assert) {
    await visit('/sales/company/11102');
    await backstop(assert);
    assert.dom('#myFancyElement').Exists();
  });
```

Now, whenever you run a test, BackstopJS will take a screen shot and compare it against the last known good. 

### The first run
The first time you run backstop-helper tests BackstopJS will fail because there aren't any reference files yet. So, here's what you do...
1. run tests normally
2. When tests complete, in another window run `ember backstop-approve`

Tests should pass now.

### View the most recent BackstopJS test report
You can always view the last test run report by running `ember backstop-report` in another window. 

### Approving changes
Anytime you want to promote a changed test to the new reference file, run `ember backstop-approve`.  This command also takes an optional `filter` parameter e.g. `ember backstop-approve --filter=testFilenameAsRegExString`

### More Info
See http://backstopjs.org for documentation on BackstopJS -- but keep in mind -- for this implementation all DOM interactions should probably be done in your Ember test -- and not the BackstopJS config.

### Issues

#### If your screenshots are blank
Take a look at your test network calls.  Are you seeing `UnrecognizedURLError` errors?  If so, there may be an issue with a middleware addon dependency loading too early. Try ensuring any server dependencies don't block proxy requests to `/backstop/**`. Post the issue [here](https://github.com/garris/ember-backstop/issues) and let us know! 

#### Questions/comments? 
Post an issue, propose a feature or just say Hi!  https://github.com/garris/ember-backstop/issues


Contributing
------------------------------------------------------------------------------

Yes. Please pitch in to make this addon awesome for everyone.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
