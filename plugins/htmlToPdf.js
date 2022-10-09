import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  install (Vue, options) {
    Vue.prototype.getPdf = function (title, isShowPreviewFullTime) {
      html2Canvas(document.querySelector('#pdfDom'), {
        allowTaint: false,
        useCORS: true,
        x: 0,
        y: 50
      }).then(function (canvas) {
        const pageWidth = 595.28
        const pageHeight = canvas.height / (canvas.width / 592.28)
        const pageData = canvas.toDataURL('image/jpeg', 1.0)
        const PDF = new JsPDF('', 'pt', [pageWidth, pageHeight])
        PDF.addImage(pageData, 'JPEG', 0, 0, pageWidth, pageHeight)
        PDF.save(title + '.pdf')
      }
      )
    }
  }
}
