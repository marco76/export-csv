export class ExportToCSV {

    constructor() {

    }

    exportAllToCSV(JSONListItemsToPublish : any, fileName : string) {
        return this.exportColumnsToCSV(JSONListItemsToPublish, fileName, null);
    }

    exportColumnsToCSV(JSONListItemsToPublish : any, fileName : string, columns : string[]) {
        let self = this;

        const items = JSONListItemsToPublish;

        // store the data in an array
        let arrayToPublish = [];

        // for each item in the list
        for (let i = 0; i < items.length; i++) {

            let keys = Object.keys(items[i]);
            let csvRow = [];

            for ( let keyId = 0; keyId < keys.length; keyId++) {

                if (!columns) {
                    csvRow[keys[keyId]] = items[i][keys[keyId]];
                } else if (columns.indexOf(keys[keyId]) > -1) {
                    csvRow[keys[keyId]] = items[i][keys[keyId]];
                }

            }

            arrayToPublish.push(csvRow);
        }

        const replace = (key:string, value:string) => value === null ? '' : value;
        const header = Object.keys(arrayToPublish[0]);

        let csv = arrayToPublish.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replace)).join(';'));
        csv.unshift(header.join(';'));
        let data = csv.join('\r\n');
        ExportToCSV.download(fileName, data);
    }

    static downloadFile(filename : string, data : string, format : string) {
        let blob = new Blob([data], {type: format});

        if(window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        }
        else{
            let elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }

    static download(filename : string, data : any) {
        ExportToCSV.downloadFile(filename, data, 'text/csv');
    }
}