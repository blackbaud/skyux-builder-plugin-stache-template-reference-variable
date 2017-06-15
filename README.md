# Stache Template Reference Variable Plugin (Deprecated)

[![npm](https://img.shields.io/npm/v/@blackbaud/skyux-builder-plugin-stache-template-reference-variable.svg)](https://www.npmjs.com/package/@blackbaud/skyux-builder-plugin-stache-template-reference-variable)
[![status](https://travis-ci.org/blackbaud/skyux-builder-plugin-stache-template-reference-variable.svg?branch=master)](https://travis-ci.org/blackbaud/skyux-builder-plugin-stache-template-reference-variable)

### NOTE: This plugin has been deprecated in favor of an [all-inclusive plugin](https://github.com/blackbaud/skyux-builder-plugin-stache).

This [SKY UX Builder](https://github.com/blackbaud/skyux-builder) plugin adds an [Angular Template Reference Variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars) (`#stache`) to all `<stache>` tags so that the parent component may access its public properties. This plugin is intended to be used with [Stache 2 Components](https://github.com/blackbaud/stache2).

## Installation

```
npm install --save @blackbaud/skyux-builder-plugin-stache-template-reference-variable
```

## Usage

Open **skyuxconfig.json** and add the following:

```
{
  "plugins": [
    "@blackbaud/skyux-builder-plugin-stache-template-reference-variable"
  ]
}
```

## Found an issue?

Please log all issues related to Stache (and its plugins) at [blackbaud/stache2](https://github.com/blackbaud/stache2/issues).
