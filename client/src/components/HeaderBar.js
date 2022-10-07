/* eslint-disable jsx-a11y/anchor-is-valid */
export default function HeaderBar() {
  return (
    <header className="navbar">
      <div className="bg-amber-300 text-slate-900">
        <div className="px-2 py-5 xl:px-14">
          <div className="flex justify-between">
            <div className="flex gap-12 items-center">
              <h1 className="font-bold text-4xl">
                <a>BagasRaisR</a>
              </h1>

              <a
                id="dropdownMenuIconHorizontalButton"
                data-dropdown-toggle="dropdownDotsHorizontal"
                className="text-3xl cursor-pointer select-none hidden lg:block"
              >
                Courses
              </a>
              <div
                id="dropdownDotsHorizontal"
                className="hidden z-10 w-64 bg-amber-50 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      className="block py-2 px-7 text-xl text-light hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Make a New Habit
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-7 text-xl text-light hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Akhirnya Jadi Konten
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="text-3xl hidden lg:block">
                <a>Content</a>
              </h2>
              <h2 className="text-3xl hidden lg:block">
                <a>Design</a>
              </h2>
            </div>
            <div className="flex gap-5">
              <h2 className="text-3xl hidden lg:block">
                <a>About</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
