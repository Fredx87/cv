import puppeteer from "puppeteer";

async function generatePdf() {
  const htmlPath = `${__dirname}/../dist/index.html`;
  const pdfPath = `${__dirname}/../dist/cv.pdf`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle2" });
  await page.emulateMediaType("screen");
  await page.pdf({
    path: pdfPath,
    format: "A4",
    displayHeaderFooter: false,
    margin: {
      top: "2cm",
      bottom: "2cm",
      left: "2cm",
      right: "2cm"
    }
  });

  await browser.close();
}

generatePdf();
