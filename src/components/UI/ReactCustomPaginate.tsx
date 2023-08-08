import ReactPaginate from "react-paginate";

interface Props {
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  pageCount: number;
  page: number;
  onPageChange: (selected: { selected: number }) => void;
}

const ReactCustomPaginate = ({
  pageRangeDisplayed,
  marginPagesDisplayed,
  pageCount,
  page,
  onPageChange,
}: Props) => {
  return pageCount > 1 ? (
    <ReactPaginate
      className={"inline-flex -space-x-px text-sm mt-4 w-full  justify-center"}
      breakLabel="..."
      breakLinkClassName={
        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      }
      nextLabel=">"
      nextLinkClassName={
        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      }
      onPageChange={onPageChange}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      activeLinkClassName={
        "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      }
      forcePage={page - 1}
      pageCount={pageCount}
      pageLinkClassName={
        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      }
      previousLinkClassName={
        "flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      }
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  ) : null;
};
export default ReactCustomPaginate;
