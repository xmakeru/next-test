

export default function RenderPageButtons({ currentPage, totalPages, handlePageChange }) {
  const renderPageButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 border rounded ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
          }`}
        >
          {i}
        </button>
      );
    }
    if (totalPages === 0) {
      return <div></div>
    } else {
      return buttons;
    }
  };

  return <>{renderPageButtons()}</>
}
