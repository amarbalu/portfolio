import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { saveAs } from "file-saver";
import styled, { useTheme } from "styled-components";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import resumePDF from "../../assets/resume.pdf"; // Path to your PDF file

// Configure pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBackground};
  }

  svg {
    font-size: 1.5rem;
  }
`;

const ResumeViewer = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  canvas {
    width: 100% !important;
    height: auto !important;
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  svg {
    font-size: 3rem;
    color: ${(props) => props.theme.buttonColor};
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState(null);
  const theme = useTheme(); // Get current theme

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const handleDownload = () => {
    saveAs(resumePDF, "Balu_Amarnath_Resume.pdf");
  };

  const handleShare = () => {
    const shareURL = window.location.href;
    const message = `Check out my resume: ${shareURL}`;
    if (navigator.share) {
      navigator
        .share({
          title: "My Resume",
          text: message,
          url: shareURL,
        })
        .catch(console.error);
    } else {
      alert("Share functionality is not supported on this browser.");
    }
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <Button onClick={handleDownload} aria-label="Download Resume">
          <FaDownload />
        </Button>
        {isMobileDevice() && (
          <Button onClick={handleShare} aria-label="Share Resume">
            <FaShareAlt />
          </Button>
        )}
      </ButtonContainer>
      <ResumeViewer>
        {loading && (
          <LoadingSpinner>
            <AiOutlineLoading3Quarters />
          </LoadingSpinner>
        )}
        <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </ResumeViewer>
    </Wrapper>
  );
};

export default Resume;
