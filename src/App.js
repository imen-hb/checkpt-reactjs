import { Button, Card, Container, Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*navbar*/ }
      <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>

    {/*card1*/ }
    <div style={{display:"flex",justifyContent:"space-around",padding:"2%"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg" />
      <Card.Body>
        <Card.Title>Lebron James</Card.Title>
        <Card.Text>
        LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    {/*card2*/}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/11/25/3831444-77861808-2560-1440.jpg" />
      <Card.Body>
        <Card.Title>Stephen Curry</Card.Title>
        <Card.Text>
        Wardell Stephen Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  
    {/*card3*/}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/04/896/500/GettyImages-1250842920-copy.jpg?ve=1&tl=1" />
      <Card.Body>
        <Card.Title>Kevin Durant</Card.Title>
        <Card.Text>
        Kevin Wayne Durant, also known by his initials KD, is an American professional basketball player for the Phoenix Suns of the National Basketball Association.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

      
    </div>
  );
}

export default App;
