import Link from "next/link";

export default function NavigationPage({ pagination }) {
  const { currentPage, nextPage, previousPage, totalPages } = pagination;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center -space-x-px">
        {/* Previous Page */}
        {previousPage && (
          <li>
            <Link
              href={`?page=${previousPage}`}
              className="block py-2 px-3 ml-0 leading-tight text-zinc-500 bg-white rounded-l-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <span className="sr-only">Previous</span>
              <i className="fas fa-chevron-left"></i>
            </Link>
          </li>
        )}

        {/* Page Numbers */}
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={`?page=${page}`}
              className={`py-2 px-3 leading-tight ${
                currentPage === page
                  ? "text-white bg-zinc-500"
                  : "text-zinc-500 bg-white"
              } border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700`}
            >
              {page}
            </Link>
          </li>
        ))}

        {/* Next Page */}
        {nextPage && (
          <li>
            <Link
              href={`?page=${nextPage}`}
              className="block py-2 px-3 leading-tight text-zinc-500 bg-white rounded-r-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <span className="sr-only">Next</span>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
