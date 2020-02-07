# components-benchmarks

Benchmarks for Vaadin components using [tachometer](https://github.com/PolymerLabs/tachometer/).

## Setup

```sh
npm install
```

## Run the app

Benchmarks contain a same demo app, implemented using LitElement and Polymer versions of Vaadin
components. To compare the [FCP](https://web.dev/fcp/) metric for these implementations, run:

```sh
npx tachometer --config tachometer.json
```

## Check size

Both versions of the app use [size-limit](https://github.com/ai/size-limit) to check bundle size.
To compare bundle size for these implementationswhen adding a new component, run:

```sh
npm run size
```
