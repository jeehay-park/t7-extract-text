import './App.css';
import ImageTextExtractor from './ImageTextExtractor';
import MultipleImagesTextExtractor from './MultipleImagesTextExtractor';

function App() {
  return (
    <>
      <h1 style={{padding : '10px 10px'}}>Extract texts</h1>
      
      <ImageTextExtractor />
      <MultipleImagesTextExtractor />
    </>
  
   
  );
}

export default App;
