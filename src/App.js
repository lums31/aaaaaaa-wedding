import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Button, Image } from 'react-bootstrap';

function App() {
  return (
    <div className=''>
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
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
    </div>
  );
}

export default App;
