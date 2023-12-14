import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const MultipleImagesTextExtractor = () => {
  const [extractedTexts, setExtractedTexts] = useState([]);

  const handleImageUpload = async (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const promises = Array.from(files).map(async (file) => {
        const { data: { text } } = await Tesseract.recognize(
          file,
          'eng', // Language code (English in this case)
          { logger: (info) => console.log(info) } // Optional logger for more details
        );
        return text;
      });

      const texts = await Promise.all(promises);
      setExtractedTexts(texts);
    }
  };

  return (
    <div style={{padding : '10px 10px'}}>
      <input type="file" accept="image/*" onChange={handleImageUpload} multiple />
      <div>
        {extractedTexts.length > 0 && (
          <>
            <h2
            style={{padding : '10px 10px'}}
            >Extracted Texts from Multiple Files : </h2>
            <ul>
              {extractedTexts.map((text, index) => (
                <li 
                    key={index}
                    style={{color :'blue', padding : '10px 10px'}}
                >{text}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MultipleImagesTextExtractor;
