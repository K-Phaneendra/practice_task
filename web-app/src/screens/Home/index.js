import React, { useEffect, useState } from 'react';

import PageActions from '../../Actions/pages';
import PagesTable from './PagesTable';

function Home(props) {

  const [pages, setPages] = useState([]);

  // function to get all pages
  const getAllPages = async () => {
    try {
      const pageActions = new PageActions();
      const response = await pageActions.getAllPages();
      if (response) {
        setPages(response);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getAllPages();
  }, []);

  return (
    <div>
      <PagesTable list={pages} />
    </div>
  );
}

export default Home;