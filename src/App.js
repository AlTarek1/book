import "./App.css";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import MyPDF from "./1.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function App() {
  const [NumPages, setNumPages] = useState();
  const [CurrentPage, setCurrentPage] = useState(1);
  const onloadDocumentSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(1);
  };
  const GoPrevPage = () => {
    if (CurrentPage !== 1) {
      setCurrentPage(CurrentPage - 1);
    }
  };
  const GoNextPage = () => {
    if (CurrentPage !== NumPages) {
      setCurrentPage(CurrentPage + 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header ">
        <Document
          className="document"
          file={MyPDF}
          onLoadSuccess={onloadDocumentSuccess}
        >
          {CurrentPage === 1 || CurrentPage === NumPages ? (
            <Page
              className="page page-front-back"
              height={400}
              pageNumber={CurrentPage}
            />
          ) : (
            <>
              <Page
                className="page page-right"
                height={400}
                pageNumber={CurrentPage}
              />
              <Page
                className="page page-left"
                height={400}
                pageNumber={CurrentPage + 1}
              />
            </>
          )}
        </Document>
        <div className="btns">
          <button onClick={GoNextPage}>التالي</button>
          <button onClick={GoPrevPage}>السابق</button>
        </div>
      </header>
    </div>
  );
}

export default App;
