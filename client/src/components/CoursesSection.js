/* eslint-disable jsx-a11y/anchor-is-valid */

import bagasPortrait from "../images/bagasPortrait.jpg";

export default function CoursesSection() {
  return (
    <section className="courses">
      <div className="flex flex-col px-14 max-w-4xl gap-7 mx-auto py-20">
        <h1 className="text-6xl font-semibold">Latest on Youtube</h1>
      </div>
      <div className="video-container mt-5 mb-10">
        <iframe
          className="w-full lg:max-w-7xl h-72 lg:h-[40rem] mx-auto"
          src="https://www.youtube.com/embed/Ex1UJkPc3rk"
          title="06. 30 days challenge"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex flex-col px-14 max-w-4xl gap-7 mx-auto py-20">
        <h1 className="text-6xl font-semibold">
          Latest on Blog <br /> from Bagas
        </h1>
      </div>
      <div className="px-14 grid grid-cols-1 gap-7 max-w-[95rem] mx-auto lg:grid-cols-3 pb-10">
        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className="rounded-t-lg"
              src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
              alt=""
            />
          </a>
          <div className="p-5">
            <a>
              <h5 className="pb-14 text-3xl font-semibold tracking-wide text-slate-900 dark:text-white">
                Melihat ke atas
              </h5>
            </a>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="footer_img-container w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={bagasPortrait}
                    alt="Profile Bagas"
                  />
                </div>
                <h1 className="text-xl">Bagas Rais</h1>
              </div>
              <h1 className="text-xl">Blog</h1>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className="rounded-t-lg"
              src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
              alt=""
            />
          </a>
          <div className="p-5">
            <a>
              <h5 className="pb-14 text-3xl font-semibold tracking-wide text-slate-900 dark:text-white">
                Waktu pivotmu sendiri
              </h5>
            </a>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="footer_img-container w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={bagasPortrait}
                    alt="Profile Bagas"
                  />
                </div>
                <h1 className="text-xl">Bagas Rais</h1>
              </div>
              <h1 className="text-xl">Blog</h1>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className="rounded-t-lg"
              src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
              alt=""
            />
          </a>
          <div className="p-5">
            <a>
              <h5 className="pb-14 text-3xl font-semibold tracking-wide text-slate-900 dark:text-white">
                Seni menyampaikan nasihat
              </h5>
            </a>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="footer_img-container w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={bagasPortrait}
                    alt="Profile Bagas"
                  />
                </div>
                <h1 className="text-xl">Bagas Rais</h1>
              </div>
              <h1 className="text-xl">Blog</h1>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className="rounded-t-lg"
              src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
              alt=""
            />
          </a>
          <div className="p-5">
            <a>
              <h5 className="pb-14 text-3xl font-semibold tracking-wide text-slate-900 dark:text-white">
                Seni menyampaikan nasihat
              </h5>
            </a>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="footer_img-container w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={bagasPortrait}
                    alt="Profile Bagas"
                  />
                </div>
                <h1 className="text-xl">Bagas Rais</h1>
              </div>
              <h1 className="text-xl">Blog</h1>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className="rounded-t-lg"
              src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
              alt=""
            />
          </a>
          <div className="p-5">
            <a>
              <h5 className="pb-14 text-3xl font-semibold tracking-wide text-slate-900 dark:text-white">
                Seni menyampaikan nasihat
              </h5>
            </a>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="footer_img-container w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={bagasPortrait}
                    alt="Profile Bagas"
                  />
                </div>
                <h1 className="text-xl">Bagas Rais</h1>
              </div>
              <h1 className="text-xl">Blog</h1>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className="rounded-t-lg"
              src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
              alt=""
            />
          </a>
          <div className="p-5">
            <a>
              <h5 className="pb-14 text-3xl font-semibold tracking-wide text-slate-900 dark:text-white">
                Seni menyampaikan nasihat
              </h5>
            </a>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="footer_img-container w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={bagasPortrait}
                    alt="Profile Bagas"
                  />
                </div>
                <h1 className="text-xl">Bagas Rais</h1>
              </div>
              <h1 className="text-xl">Blog</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
