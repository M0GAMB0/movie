import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ movieName, year, genres, language, country }) => {
  return (
    <Card style={{ width: '18rem', marginTop: '10px' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{movieName}</Card.Title>
        <Card.Text>
          Year : {year}
          <br />
          Genres : {genres}
          <br />
          Language : {language}
          <br />
          Country : {country}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MovieCard;
