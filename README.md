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
To compare size when adding a new component, run:

```sh
npm run size
```

## Results

The screenshots uploaded to the `results` folder are generated from 3 different branches:

- `lumo`: Lumo components versions, generated from master branch
- `material`: Material components versions, generated from [material](https://github.com/web-padawan/components-benchmarks/tree/material) branch
- `src`: Unstyled components versions, generated from [src](https://github.com/web-padawan/components-benchmarks/tree/src) branch
