import Dropdown from 'react-bootstrap/Dropdown';
const Genres = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Biography</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Adventure</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Genres;
