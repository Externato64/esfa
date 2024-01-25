import PdfPrinter from 'pdfmake';
import { formatCurrency, imageBase64 } from "@/services/utils";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ProductType } from '@/types/entities';

export function generateProductsPdf(products: ProductType[]): { download: (name: string) => void } {
    const tableHeader = ['Produto', 'Tipo', 'Preço'];
        const tableContent: any = [tableHeader];

        products.forEach(product => {
            tableContent.push([
                product.name,
                product.type,
                product.oldPrice ? 
                [
                    {
                        text: [
                        {text:`${formatCurrency(product.oldPrice)}   `, decoration: 'lineThrough', decorationColor: 'red', color: 'red' },
                        formatCurrency(product.price)
                        ]
                    }
                ]
                : formatCurrency(product.price)
            ]);
        });


        // @ts-ignore
        const pdfDoc = PdfPrinter.createPdf({
            info: {
              title: 'Produtos ESFA',
              author: 'ESFA System',
              subject: 'Lista de produtos',
              creator: 'ESFA System',
              creationDate: new Date(),
            },
            pageSize: 'A4',
            content: [
              {
                  image: imageBase64,
                  fit: [100, 100],
                  style: 'image'
              },
              { text: 'PRODUTOS ESFA', style: 'header' },
              { text: '  ', fontSize: 16 },
              { text: 'Lista:', fontSize: 12 },
              { text: '  ', fontSize: 10 },
              {
                layout: 'lightHorizontalLines',
                fontSize: 20,
                table: {
                  headerRows: 1,
                  widths: ['*', 50, 'auto'],
                  body: tableContent,
                  fontSize: 50
                },
              },
              { text: ' ', fontSize: 12 },
              {
                text: '© 2024 Externato São Francisco de Assis',
                style: 'footer',
              },
            ],
            defaultStyle: {
              font: 'Roboto',
            },
        
            styles: {
              header: {
                fontSize: 16,
                font: 'Roboto',
                bold: true,
                alignment: 'center',
              },
              footer: {
                fontSize: 12,
                font: 'Roboto',
                italics: true,
                alignment: 'center',
              },
              image: {
                alignment: 'center'
              }
            },
          }, null,null, pdfFonts.pdfMake.vfs);

          return pdfDoc;
}