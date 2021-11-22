import React, { useEffect, useState } from 'react';
import { InputGroup, Form, FormControl, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import paths from '../../Router/paths.json';

const PagesTable = ({
  list
}) => {
  
  const [searchText, setSearchText] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [checkIsActive, setCheckIsActive] = useState(null);

  const navigate = useNavigate();

  // when ever list is upadated, then updated the filteredList
  useEffect(() => {
    setFilteredList(list);
    setCheckIsActive(true);
  }, [list]);

  // apply filters when they are updated
  useEffect(() => {
    applyFilters();
  }, [list, checkIsActive])

  // apply filters on the list
  const applyFilters = () => {
    try {
      const filters = {
        isActive: checkIsActive,
        search: {
          keysToSearch: ['pageTitle', 'id'],
          text: searchText.toLowerCase()
        }
      };
      const filteredItems = list.filter(each => {
        for (var filterkey in filters) {
          // user entered search text
          const searchMatched = valuesOfkeys(each, filters.search.keysToSearch).includes(filters.search.text);
          if (filters[filterkey] === each[filterkey] && searchMatched) {
            return true;
          } else {
            return false;
          }
        }
        return null;
      });
      setFilteredList(filteredItems);
    } catch (err) {
      alert(err.message);
    }
  };

  // capture search text
  const captureSearchText = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  // gives the value of the key present in the item
  const valuesOfkeys = (item, keys) => {
    try {
      const keyValues = keys.map(key => item[key]);
      const trimmedValues = keyValues.join('');
      return trimmedValues.toLowerCase();
    } catch (err) {
      alert(err.message);
    }
  }

  const search = () => {
    try {
      applyFilters();
    } catch (err) {
      alert(err.message);
    }
  };

  // runs when user clicks on is active checkbox
  const filterIsActive = (e) => {
    try {
      const isChecked = e.target.checked;
      setCheckIsActive(isChecked);
    } catch (err) {
      alert(err.message);
    }
  }

  // view page on another screen
  const viewPage = (pageId) => {
    const location = {
      pathname: `${paths.pageSummaryById}/${pageId}`,
      state: {}
    }
    navigate(location);
  };

  const displayRows = () => {
    try {
      return filteredList.map((each, index) => {
        const rowKey = `row_${index}`;
        return (
          <tr key={rowKey}>
            <td>{each.id}</td>
            <td>{each.pageType}</td>
            <td>{each.pageTitle}</td>
            <td>{each.isActive ? 'Yes' : 'No'}</td>
            <td>
              <Button variant="outline-secondary" id="button-addon2" onClick={() => viewPage(each.id)}>
                View page
              </Button>
            </td>
          </tr>
        )
      })
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <h3>List of pages</h3>  
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={captureSearchText}
            value={searchText}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={search}>
            Search
          </Button>
        </InputGroup>
      </div>
      <div>
        {/* filters */}
        <Form.Group className="mb-3 text-align-left"  controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Active" checked={checkIsActive ? checkIsActive : false}
          onChange={filterIsActive}
          />
        </Form.Group>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Page type</th>
            <th>Page title</th>
            <th>Active</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {displayRows()}
        </tbody>
      </Table>
    </>
  )
};

export default PagesTable;
