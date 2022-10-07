import ecourses1 from "../images/ecourse_1-transparant.png";

export default function Release1Section() {
  return (
    <section className="release">
      <div className="px-2 pt-20 bg-slate-50 lg:px-14">
        <div className="release_img-container flex flex-col gap-5 items-center justify-center lg:items-start lg:flex-row lg:gap-24">
          <img className="w-4/5 lg:w-1/4" src={ecourses1} alt="" />
          <div className="flex flex-col gap-5 justify-center max-w-3xl text-slate-900">
            <h1 className="font-bold text-5xl lg:text-8xl">
              How to Make a New Habit
            </h1>
            <h2 className="font-light text-2xl lg:text-5xl py-4">
              Masalahnya, membentuk kebiasaan ini cukup tricky dan membutuhkan
              konsistensi.
            </h2>
            <button className="py-4 max-w-xs shadow-lg bg-slate-900 text-slate-50 text-lg tracking-widest hover:bg-gray-800 duration-150 lg:text-2xl">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
