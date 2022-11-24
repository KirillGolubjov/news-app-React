import Card from 'react-bootstrap/Card';

function ContactSchoolComponent() {
  return (
    <Card border="primary" style={{ width: '20rem' }}>
      <Card.Header>
        <b>School Contacts</b>
      </Card.Header>
      <Card.Body>
        <Card.Title>GAMMA INTELLIGENCE OÜ</Card.Title>
        <Card.Text>info@gammatest.net</Card.Text>
        <Card.Text>+372 555 81 521</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ContactSchoolComponent;
