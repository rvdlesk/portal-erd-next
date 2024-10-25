
// import React, { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/build/pdf.worker.min.js`;

// const PdfViewer = ({ open, onClose, pdfUrl }) => {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     useEffect(() => {
//         if (pdfUrl) {
//             setPageNumber(1); // Reset page number when pdfUrl changes
//         }
//     }, [pdfUrl]);

//     const onDocumentLoadSuccess = ({ numPages }) => {
//         setNumPages(numPages);
//     };

//     return (
//         <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
//             <DialogContent>
//                 <div>
//                     <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
//                         <Page pageNumber={pageNumber} />
//                     </Document>
//                     <p>
//                         Page {pageNumber} of {numPages}
//                     </p>
//                 </div>
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={onClose}>Cerrar</Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default PdfViewer;
