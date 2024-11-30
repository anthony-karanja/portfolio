import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

function Resume() {
  const pdfFile = 'src/assets/Resume-Tony.pdf';
  return (
    <>
      <NavBar />
      <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfFile} />
        </Worker>
      </div>
      <Footer />
    </>
  );
}

export default Resume;

