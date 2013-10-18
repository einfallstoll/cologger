# cologger

Colorful, simple node.js logger

## usage

````javascript
var logger = require('cologger')(true);

logger.log('info-message');
logger.debug('debug-message');
logger.error('error-message');
logger.warn('warn-message');
logger.success('success-message');
````

If you set the parameter to `false` or don't specify it, debug-messages won't show.
