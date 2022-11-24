import Card from 'react-bootstrap/Card';

function ContactComponent() {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header>
        <b>Personal Contacts</b>
      </Card.Header>
      <Card.Body>
        <Card.Title>Kirill Golubjov</Card.Title>
        <Card.Text>k.golubjov@gmail.com</Card.Text>
        <Card.Text>+(372) 53486232</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ContactComponent;
