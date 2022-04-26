import { ApiError } from '../../common/services/api-error.service';
const PDFDocument = require('pdfkit');
const fs = require('fs');
import { globals } from '../../../config/globals';

class GeneratePDFService {

    constructor() {
    }

    async generate(text: string, type: string): Promise<void> {
        let pdfDoc = new PDFDocument;
        await pdfDoc.pipe(fs.createWriteStream(`${globals.TEMP_DATA_PATH}/${type}.pdf`));
        pdfDoc.text(text);
        pdfDoc.end();
    }
}

export default new GeneratePDFService();
