import Pagination from 'react-bootstrap/Pagination';
import { setPage } from '../services/stateService';
import { useDispatch, useSelector } from 'react-redux';

function PaginationComponent() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.searchParams.page);
  const totalResults = useSelector(state => state.totalResults);
  const pageSize = useSelector(state => state.searchParams.pageSize);

  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <Pagination className="mt-4 justify-content-center">
      <Pagination.Prev
        disabled={page <= 1}
        onClick={() => dispatch(setPage(page - 1))}
      />
      <Pagination.Item disabled>
        {page} / {totalPages}
      </Pagination.Item>
      <Pagination.Next
        disabled={page >= totalPages} //page.length
        onClick={() => dispatch(setPage(page + 1))}
      />
    </Pagination>
  );
}

export default PaginationComponent;
