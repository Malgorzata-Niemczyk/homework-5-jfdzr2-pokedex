const PaginationButtons = () => {
    return ( 
        <div className="pagination-buttons-wrapper flex">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Prev
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
     );
}
 
export default PaginationButtons;