import React from 'react';
import { usePagination } from '../../../hooks/usePagination';

interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'}
        >
          {p}
        </span>
      )}
    </div>
  );
};

export default Pagination;