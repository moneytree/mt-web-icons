# mt-web-icons

## Steps for updating the web font

1. Fork the repository from mt-web-icon
2. git fetch and pull the latest version
3. Go to https://icomoon.io/app/#/select
4. Upload the latest `selection.json` in the `iconmoon` folder
5. In the iconmoon web app, upload the svg you want to add. Be sure to center it and name it properly.
6. Generate the new web font by click `Generate Font` button at bottom right corner.
7. Download it
8. Unzip it
9. Copy the whole unzipped folder to update this repository,
make sure replace these folder & files
    - replace the folder `/icomoon` with unzip folder
    - replace the folder `/fonts` with unzip folder `/fonts`
    - replace the file `/css/style.css` with unzip file `/style.css`
    - replace the file `/style.css` with unzip file `/style.css`
    - replace the file `/selection.json` with unzip file `/selection.json`
10. In `package.json` increment the version
11. Follow the steps below to test locally
12. Create a PR
13. [Set new release](https://github.com/moneytree/mt-web-icons/releases) after merge

### Test the new icon it's work on local.
1. Under the mt-web-icon run
    - `yarn`
    - `yarn build`
2. Under your project, install the local mt-web-icon package
    - `rm -rf ./node_modules/mt-web-icons`
    - `yarn add file:../mt-web-icons` (path the folder mt-web-icons)
3. Test it

## Create svgs and build components

Run the following command before:

```console
yarn build
```

## How to use it

### Icon component:

```javascript
import React, { ReactNode } from 'react';
import Icon from 'mt-web-icons';

export default function IconAuto(): ReactNode {
  return <Icon icon="auto" width={100} height={100} fill="#ffffff" />;
}
```

### Icon with ES6 Module:

```javascript
import React, { ReactNode } from 'react';
// Imports from specific ESM module folder
import Icon from 'mt-web-icons/react/Icon/esm';

export default function Icon(): ReactNode {
  return <Auto width={100} height={100} fill="#ffffff" />;
}
```

### Icon with defined placeholder and fallback for suspence:

```javascript
import React, { ReactNode } from 'react';
import Icon from 'mt-web-icons';

export default function IconAuto(): ReactNode {
  return <Icon icon="Auto" placeholder={null} fallback={<div />} />;
}
```

### Specific Icon:

```javascript
import React, { ReactNode } from 'react';
import { Auto } from 'mt-web-icons';

export default function Icon(): ReactNode {
  return <Auto width={100} height={100} fill="#ffffff" />;
}
```
