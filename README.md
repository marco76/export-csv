# export-csv

## Goal - Export your web table to Excel in a click
Many js applications show tables and data. Very often the business users need the possibility to export their data in excel.
Most of the time a simple export (no server required) is enough.

## Description
This package easily export to the CSV the content of an array of objects (JavaScript or JSON, e.g. table of data on the screen) to a format compatible with Excel.


## Features
- The library has been written in Typescript and target Angular (1.x, >=2).
- It is possible to decide which columns export and in which order.

## Installation
```
npm i @molteni/export-csv --save
```
or
add to your _package.json_ in the '_dependencies_' :  "_@molteni/export-csv": "^0.0.1_",

## Usage
In Angular import the library with:
_import ExportToCSV from  "@molteni/export-csv";_

Use the library:

_Export only one specific columns_

exportColumnsToCSV(JSONListItemsToPublish : any[], fileName : string, columns : string[]);

```
var exporter = new ExportToCSV();
exporter.exportColumnsToCSV(this.blogArticles, "filename", ["title"])
```

_Export all the columns_

exportAllToCSV(JSONListItemsToPublish : any[], fileName : string);

```
var exporter = new ExportToCSV();
exporter.exportColumnsToCSV(this.blogArticles, "filename")
```

## Limitations

- doesn't work with Safari