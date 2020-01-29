npm test
npm run prebublish

## Documentation
rm -rf ./doc
typedoc -out ./doc --exclude "**/*.spec.ts"


## Publish locally

- create a new package
npm pack

- go in the project that uses the package
npm install ../[PATH_TO_NPM]/package-version.tgz
result :
  "@molteni/export-csv": "file:../../../../marco/array-utils/molteni-array-utils-0.0.5.tgz",