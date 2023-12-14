import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const ImageTextExtractor = () => {
  const [extractedText, setExtractedText] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const { data: { text } } = await Tesseract.recognize(
        file,
        'eng', // Language code (English in this case)
        { logger: (info) => console.log(info) } // Optional logger for more details
      );

      setExtractedText(text);
    }
  };

  return (
    <div style={{padding : '10px 10px'}}>
      <input type="file" accept="image/*" onChange={handleImageUpload}
      
      
      />
      <div>
        <h2
        style={{padding : '10px 10px'}}
        >Extract Texts from a Single File :</h2>
        <ul>
                <li 
                style={{color :'blue', padding : '10px 10px'}}
                >{extractedText}</li>
             
            </ul>
       
      </div>
    </div>
  );
};

export default ImageTextExtractor;
