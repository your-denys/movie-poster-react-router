import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css';

const Paginaton = ({ page, setPage, totalPages }) => {
  return (
    <>
      <Pagination className="pagination">
        {page - 1 >= 1 && (
          <Pagination.Prev
            className="pagination-item"
            onClick={() => setPage(page - 1)}
          />
        )}
        {page - 1 >= 1 && (
          <Pagination.Item
            className="pagination-item"
            onClick={() => setPage(page - 1)}
          >
            {page - 1}
          </Pagination.Item>
        )}
        <Pagination.Item className="pagination-item" active>
          {page}
        </Pagination.Item>

        {page + 1 <= totalPages && (
          <Pagination.Item
            className="pagination-item"
            onClick={() => setPage(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        )}
        {page + 2 <= totalPages && (
          <Pagination.Item
            className="pagination-item"
            onClick={() => setPage(page + 2)}
          >
            {page + 2}
          </Pagination.Item>
        )}

        {page + 1 <= totalPages && (
          <Pagination.Next
            className="pagination-item"
            onClick={() => setPage(page + 1)}
          />
        )}
      </Pagination>
    </>
  );
};

export default Paginaton;
