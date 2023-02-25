import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { stringSlicer } from '../../helper/CommonFunction';

function BasicExample(props) {
    const {title,description,img} = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{stringSlicer(title,100)}</Card.Title>
                <Card.Text>
                    {stringSlicer(description,200)}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;