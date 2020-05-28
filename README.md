# @easternmotors/eslint-config-ts

## Getting Started

To get started, run:

```js
// via yarn
yarn add @easternmotors/eslint-config-ts
// or via npm
npm install @easternmotors/eslint-config-ts
```

### Prerequisites

Ensure you have the correct peer dependencies installed which are listed [in package.json](./package.json)

### Configuration

You can use/extend the definitions using the following syntax:

#### Using

package.json

```json
"lint": "eslint . --config ./node_modules/@easternmotors/eslint-config-ts --ext js,ts,tsx --resolve-plugins-relative-to ./node_modules/@easternmotors/eslint-config-ts",
"format": "prettier --config ./node_modules/@easternmotors/eslint-config-ts/prettier.config.js --write \"$(pwd)/**/*.{js,ts,tsx}\"",
"stylelint": "stylelint --config ./node_modules/@easternmotors/eslint-config-ts/stylelint.config.js '**/*.css'"
```

#### Extending

ESLint (see https://eslint.org/docs/user-guide/configuring#extending-configuration-files)

```json
"extends": ["eslint:recommended", "@easternmotors/eslint-config-ts"]
```

Prettier (see https://prettier.io/docs/en/configuration.html#sharing-configurations)

```json
(module.exports = {
  ...require("@easternmotors/eslint-config-ts/prettier.config"),
  "singleQuote": false
})
```

Stylelint (see https://eslint.org/docs/user-guide/configuring#extending-configuration-files)

```json
"extends": ["stylelint-config-recommended", "@easternmotors/eslint-config-ts/stylelint.config"]
```
