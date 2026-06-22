import React from "react";
import logo from "./assets/logo.svg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

const App = () => {
  return (
    <div className="">
      <nav className="bg-black py-[35px]">
        <div className="container flex items-center justify-between">
          <img src={logo} alt="Logo" />
          <ul className="flex gap-[34px] text-white">
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
          <button className="text-white text-[20px] bg-[#D87D4A] px-[29px] rounded-[5px]">
            Cart
          </button>
        </div>
      </nav>
      <div className="bg-[#D87D4A] text-white text-center py-[109px] text-[48px]">
        <h2>HEADPHONES</h2>
      </div>

      <main>
        <section className="mt-[137px]">
          <div className="flex items-center px-[165px] gap-[125px]">
            <div className="">
              <img src={img1} alt="img1" />
            </div>
            <div className="w-[445px]">
              <span className="text-[#D87D4A] text-[14px]">NEW PRODUCT</span>
              <h3 className="text-[40px] font-bold">XX99 Mark II Headphones</h3>
              <p className="text-[15px] opacity-50 mt-[32px]">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <button className="bg-[#D87D4A] text-white text-[14px] px-[30px] py-[15px] mt-[30px] rounded-[5px] mt-[40px]">
                See Product
              </button>
            </div>
          </div>
        </section>
        <section className="mt-[137px]">
          <div className="flex items-center px-[165px] gap-[125px] flex-row-reverse">
            <div className="">
              <img src={img2} alt="img2" />
            </div>
            <div className="w-[445px]">
              <h3 className="text-[40px] font-bold">XX99 Mark I Headphones</h3>
              <p className="text-[15px] opacity-50 mt-[32px]">
                As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
              </p>
              <button className="bg-[#D87D4A] text-white text-[14px] px-[30px] py-[15px] mt-[30px] rounded-[5px] mt-[40px]">
                See Product
              </button>
            </div>
          </div>
        </section>
        <section className="mt-[137px]">
          <div className="flex items-center px-[165px] gap-[125px]">
            <div className="">
              <img src={img3} alt="img3" />
            </div>
            <div className="w-[445px]">
              <h3 className="text-[40px] font-bold">XX59 Headphones</h3>
              <p className="text-[15px] opacity-50 mt-[32px]">
               Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
              </p>
              <button className="bg-[#D87D4A] text-white text-[14px] px-[30px] py-[15px] mt-[30px] rounded-[5px] mt-[40px]">
                See Product
              </button>
            </div>
          </div>
        </section>
        <section className="mt-[137px]">
          <div className="flex items-center px-[165px] gap-[125px] flex-row-reverse">
            <div className="">
              <img src={img4} alt="img4" />
            </div>
            <div className="w-[445px]">
              <h3 className="text-[40px] font-bold uppercase">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h3>
              <p className="text-[15px] opacity-50 mt-[32px]">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
              <button className="bg-[#D87D4A] text-white text-[14px] px-[30px] py-[15px] mt-[30px] rounded-[5px] mt-[40px]">
                See Product
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-5 text-center mt-[100px]">
        salom bu footer qismi
      </footer>
    </div>
  );
};

export default App;
