import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Image } from 'react-bootstrap';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    var imgs = document.images,
        len = imgs.length,
        counter = 0;

    [].forEach.call( imgs, function( img ) {
        if(img.complete)
          incrementCounter();
        else
          img.addEventListener( 'load', incrementCounter, false );
    } );

    function incrementCounter() {
        counter++;
        if ( counter === len ) {
            console.log( 'All images loaded!' );
        }
    }


  }, [])
  
  return (
    <div style={{
      maxWidth: '700px',
      margin: 'auto'
    }}>

      {/* <div className='mx-auto' styles={{ width: '100px', height: '100px', backgroundColor: 'red', position: 'absolute', top: 50,  bottom: 0, left: 0, right: 0, margin: 'auto'}}>
        <center>💍  </center>
      </div> */}
      {/* Image 1 */}
      <Image 
        src='https://firebasestorage.googleapis.com/v0/b/test-1-6e966.appspot.com/o/1.jpeg?alt=media&token=43cce8b5-7e1b-46b9-ae85-9811d4391f3b'
        fluid  
        className='mb-4'
      />

      {/* Image 2 */}
      <Image 
        src='https://firebasestorage.googleapis.com/v0/b/test-1-6e966.appspot.com/o/2.jpeg?alt=media&token=17e3feff-0014-4d0f-aa02-9b4feaff74e7'
        fluid  
        className='mb-4'
      />

      {/* Image 3 */}
      <Image 
        src='https://firebasestorage.googleapis.com/v0/b/test-1-6e966.appspot.com/o/3.jpeg?alt=media&token=edd1cb1b-f797-413b-a5b9-de0f909a1381'
        fluid  
        className='mb-4'
      />

      {/* Image 4 */}
      <Image 
        src='https://firebasestorage.googleapis.com/v0/b/test-1-6e966.appspot.com/o/4.jpeg?alt=media&token=6a1453ad-8636-46ce-bb04-ca5534d3ae3d'
        fluid  
        className='mb-4'
      />
      
      <iframe src="https://drive.google.com/file/d/1JYV86m5FxpAc4SmahbnlQeIkn8a2sPRL/preview" width="100%" allow="autoplay" />
      <iframe src="https://drive.google.com/file/d/1Rst9Lyu71-Lez5DNIw6PylvMU17hBoFa/preview" width="100%" allow="autoplay" />

      {/* jj1 */}
      {
        [
          'https://firebasestorage.googleapis.com/v0/b/test-1-6e966.appspot.com/o/jj%2Fjj1.jpeg?alt=media&token=fcc2904c-d594-499b-901a-c46db96587bb',
          'https://firebasestorage.googleapis.com/v0/b/test-1-6e966.appspot.com/o/jj%2Fjj2.jpeg?alt=media&token=98b05d22-254b-4f11-9226-d98f622a47a7',
          'https://firebasestorage.googleapis.com/v0/b/test-1-6e966.appspot.com/o/jj%2Fjj3.jpeg?alt=media&token=0d61b7b5-ab31-440f-b880-5587f7a3b5b4',
          'https://firebasestorage.googleapis.com/v0/b/test-1-6e966.appspot.com/o/jj%2Fjj4.jpeg?alt=media&token=5089043e-1a04-4ca1-b684-0ed388cd6ddf',
        ].map( image => <Image 
          src={image}
          fluid  
          className='mb-2'
        />)
      }

      {/* <div>
        <Button variant="primary">Primary</Button>{' '}
      </div> */}
    </div>
  );
}

export default App;
