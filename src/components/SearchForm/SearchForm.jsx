import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { Button, Form, Input, Span } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query"></Input>
      <Button type="submit">
        <FcSearch />
        <Span>Search</Span>
      </Button>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
