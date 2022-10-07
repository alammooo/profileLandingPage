/* eslint-disable jsx-a11y/anchor-is-valid */

import bagasPortrait from "../images/bagasPortrait.jpg";

export default function FooterBar() {
  return (
    <footer>
      <div className="bg-neutral-900">
        <div className="flex flex-col gap-5 items-center pt-20 pb-44">
          <div className="inline-flex justify-center items-center w-full">
            <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
            <div className="absolute left-1/2 px-4 bg-current -translate-x-1/2 dark:bg-gray-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-center text-white text-4xl max-w-4xl">
            Hidup nggak bisa ngalir gitu aja, karena arus justru akan membawa
            kita ke tempat terendah. Focus On Beating Yourself!
          </h1>

          <div className="flex gap-5 items-center">
            <div className="footer_img-container max-w-[4.5rem] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={bagasPortrait}
                alt="Profile Bagas"
              />
            </div>
            <div className="">
              <h1 className="text-3xl text-white">Bagas Rais R</h1>
              <h2 className="text-3xl text-slate-100 text-uppercase">
                Content-Creator, Muslim Designer
              </h2>
            </div>
          </div>
        </div>

        <div className="contact bg-neutral-900">
          <div className="flex flex-col py-10 justify-center gap-16 px-14 max-w-[120rem] mx-auto lg:flex-row">
            <div className="text flex-1 flex flex-col gap-5">
              <h1 className="text-6xl font-semibold text-white">
                Any Suggestion or a company one to collaborate on a Project?
              </h1>
              <a className="text-2xl font-semibold text-white block">
                0813-2917-4606{" "}
              </a>
              <a className="text-2xl font-semibold text-white block">
                bgsraisr@gmail.com
              </a>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-5">
                <div className="mb-6">
                  <label
                    for="default-input"
                    className="block mb-2 text-lg font-medium text-white dark:text-gray-300"
                  >
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    className="bg-slate-100 border border-gray-300 text-gray-900 text-lg rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="default-input"
                    className="block mb-2 text-lg font-medium text-white dark:text-gray-300"
                  >
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    className="bg-slate-100 border border-gray-300 text-gray-900 text-lg rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  for="default-input"
                  className="block mb-2 text-lg font-medium text-white dark:text-gray-300"
                >
                  Alamat Email
                </label>
                <input
                  type="text"
                  id="default-input"
                  className="bg-slate-100 border border-gray-300 text-gray-900 text-lg rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <label
                for="message"
                className="block mb-2 text-lg font-medium text-white dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-lg text-gray-900 bg-slate-100 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>
        </div>

        <hr className="border-slate-700 sm:mx-auto dark:border-slate-700" />
        <span className="block text-slate-500 sm:text-center dark:text-slate-400 py-5">
          © 2022{" "}
          <a className="hover:underline">Abdullah Alam, Muhammad Ramadhan.</a>
        </span>
      </div>
    </footer>
  );
}
