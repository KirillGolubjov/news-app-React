import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent() {
  const [page, setPage] = useState(1);

  return (
    <Pagination className="mt-4 justify-content-center">
      <Pagination.Prev
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      />
      <Pagination.Item disabled>{page} / 15</Pagination.Item>
      <Pagination.Next
        disabled={page === 15} //page.length
        onClick={() => setPage(page + 1)}
      />
    </Pagination>
  );
}

export default PaginationComponent;
