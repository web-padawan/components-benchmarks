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
