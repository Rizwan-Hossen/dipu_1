import { useState } from "react";
import Button from "@/components/button";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    // Logic to copy email to clipboard
    navigator.clipboard
      .writeText("email@gmail.com")
      .then(() => {
        console.log("Email copied successfully");
        setCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy email: ", error);
      });
  };

  const downloadCV = () => {
    // Logic to download CV
    // Example: window.open('path_to_cv.pdf', '_blank');
    // You should provide the proper path to the CV file
    window.open("path_to_cv.pdf", "_blank");
  };

  return (
    <>
      <nav className="m-auto flex justify-between max-w-6xl  text-gray-800 p-4 ">
        <div className="flex flex-auto items-center space-x-4 ">
          <div
            className=" text-gray-800 hover:underline border-2 rounded-full  px-4 pr-1 py-1 border-[#D9D9D9]"
            onClick={copyToClipboard}
          >
           Dipo.ui.58@gmail.com{" "}
            <button className="bg-secondary font-bold px-6 py-2 rounded-full ml-3 duration-300">
              {
                /* Show "Copied" text after copying the email */
                copied ? "Copied" : "Copy"
              }
            </button>
          </div>
          <button className="hover:underline bg-[#F0EFEE] font-bold px-6 py-2 rounded-full ml-3">
            <a
              href="https://drive.google.com/drive/folders/1TeENy_4Wpk6DilW_UyCjzxbHvtO3zzsc"
              target="_blank"
            >
              CV
            </a>
          </button>
        </div>
        <div className="flex flex-auto justify-end items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/diposaha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://dribbble.com/DipoUI/shots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            Dribbble
          </a>
          <a
            href="https://www.instagram.com/dipoui58/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            Instagram
          </a>
        </div>
      </nav>
      <main className="container max-w-6xl  mx-auto bg-white">
        <section className=" m-auto my-9 rounded-[48px] py-11 bg-primary flex justify-center items-center flex-col">
          <div className=" p-1 rounded-full  relative">
            <div className="w-[120px] h-[120px] bg-secondary p-1 rounded-full overflow-hidden">
              <img src="/images/dipu.png" alt="Dipu saha" />
            </div>
            <div className="  -rotate-12 absolute top-1/2 right-0 w-full ">
              <h3
                style={{
                  animationDuration: "4s",
                }}
                className="absolute  duration-700 animate-bounce text-xs  font-bold py-2 px-2 rounded-full -right-2/3 inline-block bg-white z-10"
              >
                Dipo Saha 👋
              </h3>
            </div>
          </div>

          <h1 className="mt-5 mb-5 bg-gradient-to-r from-[#656565]  to-[#010101] leading-tight bg-clip-text text-transparent text-3xl font-bold mb-4 w-[600px] h-[200] text-center">
            <span className="block">Building Digital</span> Excellence for
            Products, Brands, and Experiences
          </h1>
          <div className="flex">
            <a
             href="https://dribbble.com/DipoUI/shots"
             target="_blank"
              className="button-6  bg-secondary px-[31px] py-[16px] rounded-full font-bold flex underline hover:shadow-2xl transition duration-150 ease-in-out "
              type="button"
            >
              
                {" "}
                Latest Shots
                <span>
                  {" "}
                  <img
                    className="w-[24px] h-fit"
                    src="/images/send.svg"
                    alt=""
                  />{" "}
                </span>
              
            </a>
            <span className="mx-[34px]"></span>
            <a
             href="https://wa.me/01865484147"
                target="_blank"
              className="bg-black  text-white button-6 px-[31px] py-[16px] rounded-full font-bold flex underline hover:shadow-2xl transition duration-150 ease-in-out"
              type="button"
            >
              Book a call
            </a>
          </div>
        </section>
        <section className="bg-background  flex items-start justify-between flex-wrap gap-5">
          <div className="flex-1 bg-primary w-[384px] h-[821px] justify-center rounded-3xl">
            <marquee
              direction="up"
              height="100%"
              scrollamount="20"
              loop="infinite"
              behavior="sliding"
              className="h-full flex justify-center"
            >
              <img src="images/c1.png" alt="" />

              <img src="images/c2.png" alt="" />

              <img src="images/c3.png" alt="" />
            </marquee>
          </div>

          <div className="flex-1">
            <div className="flex flex-1 flex-wrap gap-5">
              <div className="card overflow-hidden flex-1 rounded-3xl w-[400px] h-[515px] relative after:bg-gradient-to-t  after:from-gray-700 after:to-transparent after:top-0 after:w-full after:h-full after:absolute after:z-10">
                <img className="" src="/images/mask_group.png" alt="" />
                <div className="text-white absolute bottom-0 pl-[17px] pb-[18px] z-20">
                  <h4 className="font-bold pb-[10px]">UI&UX Design</h4>
                  <p className="pb-[10px]">
                    Checkout our Website Design portfolio.
                  </p>
               <div>
               <a
             href="https://dribbble.com/DipoUI/shots"
             target="_blank"

                   className="bg-secondary text-black items-center button-6 px-[31px] py-[16px] rounded-full font-bold inline-flex underline hover:shadow-2xl transition duration-150 ease-in-out">
                    View Project{" "}
                    <span>
                      <img
                        className="w-[23px] h-fit"
                        src="images/send.svg"
                        alt=""
                      />
                    </span>
                  </a>
               </div>
                </div>
              </div>

              <div className="card overflow-hidden flex-1 rounded-3xl w-[400] h-[515] relative after:bg-gradient-to-t after:from-gray-700 after:to-transparent after:top-0 after:w-full after:h-full after:absolute after:z-10">
                <img src="/images/mask_group_1.png" alt="" />

                <div className="text-white absolute bottom-0 pl-[17px] pb-[18px] z-20">
                  <h4 className="font-bold pb-[10px]">UI&UX Design</h4>
                  <p className="pb-[10px]">
                    Checkout our Website Design portfolio.
                  </p>
                  <a
             href="https://dribbble.com/DipoUI/shots"
             target="_blank"
                  className="bg-secondary inline-flex text-black items-center button-6 px-[31px] py-[16px] rounded-full font-bold  underline hover:shadow-2xl transition duration-150 ease-in-out">
                    View Project{" "}
                    <span>
                      <img
                        className="w-[23px] h-fit"
                        src="images/send.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[820px] h-[277px] bg-primary rounded-2xl mt-[20px]">
              <h4 className="text-[black] font-bold pt-[74px] pl-[20px] text-3xl">
                Are you ready for collaboration?
              </h4>
              <div className="pl-[20px] pt-[53px] flex">
              <a
             href="mailto: Dipo.ui.58@gmail.com"
             target="_blank"
                className="bg-secondary  text-black items-center button-6 px-[31px] py-[16px] rounded-full font-bold flex underline hover:shadow-2xl transition duration-150 ease-in-out">
                  <span>
                    <img
                      className="w-[23px] h-fit"
                      src="images/sms.svg"
                      alt=""
                    />
                  </span>{" "}
                  Email me{" "}
                </a>
                <span className="mx-1"></span>
                <a
             href="https://wa.me/01865484147"
             target="_blank"
                  className="bg-black text-white  button-6 px-[31px] py-[16px] rounded-full font-bold flex underline hover:shadow-2xl transition duration-150 ease-in-out"
                  type="button"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-[70px] bg-white">
          <div className="bg-primary  rounded-3xl pt-20 ">
            <div>
              <h2 className="text-black text-3xl font-bold text-center ">
                Collaborate with brands and agencies to <br></br>create
                impactful results.
              </h2>
            </div>
            <div className="text-center relative mx-7 after:absolute after:top-1/2 after:w-full after:h-[1px] after:bg-gray-400 after:left-0 after:z-0">
              <button className="bg-secondary px-[40px] py-[16px] rounded-full font-bold  content-center z-10 relative -rotate-3">
                Service
              </button>
            </div>
            <div className="px-[70px] pb-[60px] pt-[90px] flex justify-between">
              <section className="text-black w-[219px] h-[141px]">
                <img src="/images/ui.png" alt="" />
                <h3 className="py-[5px] font-bold text-base">UI & UX</h3>

                <p className="text-[14px]">
                  Desigining interfaces that are intutive,efficient,and
                  enjoyable to use
                </p>
              </section>
              <section className="text-black w-[219px] h-[141px]">
                <img src="/images/prime_mobile.png" alt="" />
                <h3 className="py-[5px] font-bold text-base">
                  Web & Mobile App
                </h3>

                <p className="text-[14px]">
                  Transforming ideas into exceptional web and mobile app
                  experiences.
                </p>
              </section>
              <section className="text-black w-[219px] h-[141px]">
                <img src="/images/design.png" alt="" />
                <h3 className="py-[5px] font-bold text-base">
                  Design & Creative
                </h3>

                <p className="text-[14px]">
                  Crafting visually stunning designs that connect with your
                  audience.
                </p>
              </section>
              <section className="text-black w-[219px] h-[141px]">
                <img src="/images/code.png" alt="" />
                <h3 className="py-[5px] font-bold text-base">Development</h3>

                <p className="text-[14px]">
                  Bringing your vision to life with the latest technology and
                  design trend.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-primary items-center rounded-t-[50px]">
        <section className="bg-primary flex justify-center items-center rounded-t-[50px] mt-[73px]">
          <div className="pt-[80px]">
            <img
              className="bg-white w-[128px] h-[128px] px-[23px] py-[23px] rounded-full items-center justify-center flex mx-auto"
              src="/images/shake.png"
              alt=""
            />
            <h2 className="text-black text-center text-3xl font-bold">
              Tell me about your next <br></br> project
            </h2>
            <div className=" items-center justify-center flex mx-auto pt-[50px] ">
            <a
             href="mailto:Dipo.ui.58@gmail.com"
             target="_blank"
               className="bg-secondary  text-black items-center button-6 px-[31px] py-[16px] rounded-full font-bold flex underline hover:shadow-2xl transition duration-150 ease-in-out">
                <span>
                  <img className="w-[23px] h-fit" src="images/sms.svg" alt="" />
                </span>{" "}
                Email me{" "}
              </a>
              <span className="mx-5"></span>
              <a
             href="https://wa.me/01865484147"
             target="_blank"
                className="bg-black  text-white  button-6 px-[31px] py-[16px] rounded-full font-bold flex underline hover:shadow-2xl transition duration-150 ease-in-out"
                type="button"
              >
                What's app
              </a>
            </div>
          </div>
        </section>

        <hr className="border-[2px] mx-[60px] mt-[80px] bg-primary" />

        <footer className="m-auto flex justify-between max-w-6xl pt-[90px]">
          <div className="flex flex-auto items-center space-x-4 ">
            <h6>© 2024 All rights reserved.</h6>
          </div>
          <div className="flex flex-auto justify-end items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/diposaha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com/DipoUI/shots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              Dribbble
            </a>
            <a
              href="https://www.instagram.com/dipoui58/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              Instagram
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
