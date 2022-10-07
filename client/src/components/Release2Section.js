import ebook2 from "../images/eBook2.png";

export default function Release2Section() {
  return (
    <section class="release">
      <div class="px-14 pt-20 bg-slate-50 mt-10">
        <div class="release_img-container flex flex-col justify-center lg:flex-row lg:gap-24">
          <img class="w-full lg:w-1/3" src={ebook2} alt="" />
          <div class="flex flex-col gap-5 justify-center max-w-3xl text-slate-900">
            <h1 class="font-bold text-5xl lg:text-8xl">Akhirnya Jadi Konten</h1>
            <h2 class="font-light text-2xl py-4 lg:text-5xl">
              Supaya Semakin banyak lagi Muslim konten kreator
            </h2>
            <button class="py-4 max-w-xs shadow-lg bg-slate-900 text-slate-50 text-2xl tracking-widest hover:bg-gray-800 duration-150">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
