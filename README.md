# cologger

Colorful, simple node.js logger

## usage

### require

````javascript
var logger = require('cologger')(true);
````

### settings
````javascript
logger.showDebug = true;
````

If you set the property to `false` or don't specify it, debug-messages won't show.

### existing log levels
````javascript
// [INFO] in white
logger.info('info-message');

// [DEBUG] in cyan
logger.debug('debug-message');

// [SUCCESS] in green
logger.success('success-message');

// [WARN] in yellow
logger.warn('warn-message');

// [ERROR] in red
logger.error('error-message');
````

#### log objects
````javascript
// Log objects
logger.success('Successfully created an object', { my: 'object' }, true, undefined, null, [1,2,4]);
````

#### custom log levels
````javascript
logger.addLevel('custom', 'magenta');

// [CUSTOM] in magenta
logger.custom('ugly log');

logger.removeLevel('custom');
````

##### available colors
* red
* green
* yellow
* blue
* magenta
* cyan
* white