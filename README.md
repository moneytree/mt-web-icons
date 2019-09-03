# mt-web-icons

## Prerequisites

You have Node installed at v10.0.0+ and Yarn at v1.2.0+.
You are familiar with Git.

# Steps for updating the web font

1. Go to https://icomoon.io/app/#/select
2. Upload the latest `selection.json` in the `iconmoon` folder
3. In the iconmoon web app, just upload whatever svg you want to add. Be sure to center it and name it properly.
4. Generate the new web font
5. Download it
6. Unzip it
7. Copy the whole unzipped folder to update this repository

# Create svgs and build components

Run the following command before:

```console
yarn build
```

# How to use it

### Icon component:

```javascript
import React, { ReactElement } from 'react';
import Icon from 'mt-web-icons';

export default function IconAuto(): ReactElement {
  return <Icon icon="auto" width={100} height={100} fill="#ffffff" />;
}
```

### Icon with ES6 Module:

```javascript
import React, { ReactElement } from 'react';
// Imports from specific ESM module folder
import Icon from 'mt-web-icons/react/Icon/esm';

export default function Icon(): ReactElement {
  return <Auto width={100} height={100} fill="#ffffff" />;
}
```

### Icon with defined placeholder and fallback for suspence:

```javascript
import React, { ReactElement } from 'react';
import Icon from 'mt-web-icons';

export default function IconAuto(): ReactElement {
  return <Icon icon="Auto" placeholder={null} fallback={<div />} />;
}
```

### Specific Icon:

```javascript
import React, { ReactElement } from 'react';
import { Auto } from 'mt-web-icons';

export default function Icon(): ReactElement {
  return <Auto width={100} height={100} fill="#ffffff" />;
}
```
