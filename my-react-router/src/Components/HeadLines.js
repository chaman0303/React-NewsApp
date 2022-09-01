import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeadLines({Title}) {
  return (
    <>
    <div className="NewsTitleContainer">
        <h1>
          <span>{Title}</span> news on NewsFeeder
        </h1>
      </div>
    <Card>
      <Card.Header as="h5">Miami’s Bitcoin Conference Left a Trail of Harassment</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="danger">Read Full Article</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default HeadLines;