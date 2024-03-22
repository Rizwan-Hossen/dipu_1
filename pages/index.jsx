import { useState } from "react";
import Button from "@/components/button";
import localFont from "next/font/local";

const okta_neue = localFont({
  src: [
    {
      path: "../public/fonts/Okta-Neue-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/Okta-Neue-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Okta-Neue-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Okta-Neue-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/Okta-Neue-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-okta-neue",
});

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    // Logic to copy email to clipboard
    navigator.clipboard
      .writeText("Dipo.ui.58@gmail.com")
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
      {/* <main className={okta_neue.className}> */}

      <nav className=" m-auto flex justify-between max-w-6xl  text-gray-800 p-4 md:p-2 ">
        <div className="flex flex-auto items-center space-x-4 ">
          <div
            className=" md:text-white md:border-0   hover:underline border-2 rounded-full md:pr-0 md:py-0 md:px-0 px-4  pr-1 py-1 border-[#D9D9D9]"
            onClick={copyToClipboard}
          >
            <span className="md:hidden "> Dipo.ui.58@gmail.com </span>
            <button className="bg-secondary md:bg-black font-bold md:ml-0 px-6 py-2 rounded-full ml-3 duration-300">
              <span className="hidden md:block">
                {copied ? "Copied" : "Email"}
              </span>
              <span className="md:hidden">
                {
                  /* Show "Copied" text after copying the email */
                  copied ? "Copied" : "Copy"
                }
              </span>
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
            <span className="md:hidden">LinkedIn</span>
            <span className="hidden md:block md:bg-white md:p-[6px] md:rounded-full">
              {" "}
              <img src="/images/mdi_linkedin.svg" alt="" />{" "}
            </span>
          </a>
          <a
            href="https://dribbble.com/DipoUI/shots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            {" "}
            <span className="md:hidden">Dribble</span>
            <span className="hidden md:block md:bg-white md:p-[6px] md:rounded-full">
              {" "}
              <img src="/images/dribble.png" alt="" />{" "}
            </span>
          </a>
          <a
            href="https://www.instagram.com/dipoui58/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            <span className="md:hidden">Instagram</span>
            <span className="hidden md:block md:bg-white md:p-[6px] md:rounded-full">
              {" "}
              <img src="/images/instagram.png" alt="" />{" "}
            </span>
          </a>
        </div>
      </nav>
      <main className="container max-w-6xl  mx-auto bg-white ">
        <section className=" m-auto md:my-0  my-9 md:rounded-none rounded-[48px] py-11 bg-primary flex justify-center items-center flex-col">
          <div className=" p-1 rounded-full  relative">
            <div className="w-[120px] h-[120px] bg-secondary p-1 rounded-full overflow-hidden  border-white border-[4px] ">
              <img src="/images/dipu.png" alt="Dipo saha" />
            </div>
            <div className="  -rotate-12 absolute top-1/2 right-0 w-full ">
              <h3
                style={{
                  animationDuration: "10s",
                }}
                className="absolute  duration-700 animate-bounce text-xs  font-medium py-2 px-2 rounded-full right-[-65px] inline-block bg-white z-10"
              >
                Dipo Saha <span className="text-white">👋</span>
              </h3>
            </div>
          </div>

          <h1 className="mt-5 md:col-6 md:w-full md:h-[156px] md:px-[16px]  bg-gradient-to-r from-[#656565]  to-[#010101] leading-tight bg-clip-text text-transparent md:text-xl text-3xl font-bold mb-4 w-[600px] h-[200] text-center">
            <span className="block">Building Digital</span> Excellence for
            Products, Brands, and Experiences
          </h1>
          <div className="flex">
            <a
              href="https://dribbble.com/DipoUI/shots"
              target="_blank"
              className="button-6  bg-secondary px-[16px] py-[16px] rounded-full font-bold flex  hover:shadow-2xl transition duration-150 ease-in-out "
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
            <span className="ml-[32px]"></span>
            <a
              href="https://wa.me/+8801865484147"
              target="_blank"
              className="bg-black  text-white button-6 px-[26px] py-[16px] rounded-full font-bold flex hover:shadow-2xl transition duration-150 ease-in-out"
              type="button"
            >
              Book a call
            </a>
          </div>
        </section>

        <section className="bg-background grid grid-cols-3   gap-5">
          <div className="col-span-1 md:order-last md:hidden md:col-span-3 bg-primary w-full md:w-full h-[821px] justify-center rounded-3xl">
            <marquee
              direction="up"
              height="100%"
              scrollamount="15"
              loop="infinite"
              behavior="sliding"
              className="h-full flex justify-center"
            >
              <img src="images/c1.png" alt="" />
              <img src="images/c2.png" alt="" />
              <img src="images/c3.png" alt="" />
            </marquee>
          </div>

          <div className="col-span-2 md:col-span-3 md:px-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="md:col-span-2 card md:w-full overflow-hidden flex-1 rounded-3xl w-full  h-[515px] relative after:bg-gradient-to-t  after:from-gray-700 after:to-transparent after:top-0 after:w-full after:h-full after:absolute after:z-10">
                <img className="w-full" src="/images/mask_group.png" alt="" />
                <div className="text-white absolute bottom-0 pl-[17px] pb-[18px] z-20">
                  <h4 className="font-bold pb-[10px]">UI&UX Design</h4>
                  <p className="pb-[10px]">
                    Checkout our Website Design portfolio.
                  </p>
                  <div>
                    <a
                      href="https://dribbble.com/DipoUI/shots"
                      target="_blank"
                      className="bg-secondary text-black items-center button-6 px-[31px] py-[16px] rounded-full font-bold inline-flex  hover:shadow-2xl transition duration-150 ease-in-out"
                    >
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

              <div className="md:col-span-2 card  overflow-hidden flex-1 rounded-3xl w-full md:w-full h-[515px] relative after:bg-gradient-to-t after:from-gray-700 after:to-transparent after:top-0 after:w-full after:h-full after:absolute after:z-10">
                <img className="w-full" src="/images/mask_group_1.png" alt="" />
                <div className="text-white absolute bottom-0 pl-[17px] pb-[18px] z-20">
                  <h4 className="font-bold pb-[10px]">UI&UX Design</h4>
                  <p className="pb-[10px]">
                    Checkout our Website Design portfolio.
                  </p>
                  <a
                    href="https://dribbble.com/DipoUI/shots"
                    target="_blank"
                    className="bg-secondary inline-flex text-black items-center button-6 px-[31px] py-[16px] rounded-full font-bold  hover:shadow-2xl transition duration-150 ease-in-out"
                  >
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

            <div className="w-full mt-5 md:w-full bg-primary hidden md:block h-[450px] justify-center rounded-3xl">
            <marquee
              direction="up"
              height="100%"
              scrollamount="15"
              loop="infinite"
              behavior="sliding"
              className="h-full flex justify-center"
            >
              <img src="images/c1 1.png" alt="" />
              <img src="images/c2.png" alt="" />
              <img src="images/c3.png" alt="" />
            </marquee>
          </div>

            <div className="w-full md:w-full h-[277px] bg-primary rounded-2xl mt-[20px]">
              <h4 className=" bg-gradient-to-r from-[#656565]  to-[#010101] leading-tight bg-clip-text text-transparent md:text-xl font-bold  pt-[74px] pl-[20px] text-3xl">
                Are you ready for collaboration?
              </h4>
              <div className="pl-[20px] md:pl-[10px] pt-[53px] flex">
                <a
                  href="mailto: Dipo.ui.58@gmail.com"
                  target="_blank"
                  className="bg-secondary  text-black items-center button-6 px-[24px] py-[16px] rounded-full font-bold flex  hover:shadow-2xl transition duration-150 ease-in-out"
                >
                  <span>
                    <img
                      className="w-[23px] h-fit "
                      src="images/sms.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span className="pl-[12px]">
                  Email me{" "}
                  </span>
                 
                </a>
                <span className="pl-[14px]"></span>
                <a
                  href="https://wa.me/01865484147"
                  target="_blank"
                  className="bg-black text-white  button-6 px-[24px] py-[16px] rounded-full font-bold flex  hover:shadow-2xl transition duration-150 ease-in-out"
                  type="button"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* responsive endddddddddd */}
        <section className="container pt-[70px] bg-white">
          <div className="bg-primary  rounded-3xl pt-20 ">
            <div>
              <h2 className="text-black md:text-xl md:px-[10px] text-3xl font-bold text-center pb-[32px] bg-gradient-to-r from-[#656565]  to-[#010101] leading-tight bg-clip-text text-transparent  ">
                Collaborate with brands <br className="hidden md:block"></br> and agencies to <br className="md:hidden"></br>create<br className="hidden md:block"></br>
                impactful results.
              </h2>
            </div>
            <div className="text-center relative mx-7 after:absolute after:top-1/2 after:w-full after:h-[1px] after:bg-gray-400 after:left-0 after:z-0">
              <button className="bg-secondary px-[40px] py-[10px] rounded-full font-bold  content-center z-10 relative -rotate-3">
                Service
              </button>
            </div>
            <div className="px-[70px] pb-[60px] pt-[90px] flex justify-between  md:hidden">
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
            <div className=" pb-[60px]  pt-[90px] md:pl-[15px] md:flex justify-between hidden">
              <div >
                <section className="text-black w-auto h-[141px] ">
                  <img src="/images/ui.png" alt="" />
                  <h3 className="py-[5px] font-bold text-base">UI & UX</h3>

                  <p className="text-[14px]">
                    Desigining interfaces that are intutive,efficient,and
                    enjoyable to use
                  </p>
                </section>
                <section className="text-black w-auto h-[141px] ">
                  <img src="/images/prime_mobile.png" alt="" />
                  <h3 className="py-[5px] font-bold text-base">
                    Web & Mobile App
                  </h3>

                  <p className="text-[14px]">
                    Transforming ideas into exceptional web and mobile app
                    experiences.
                  </p>
                </section>
              </div>
              <span className="hidden md:px-[20px]"></span>
              <div>
                <section className="text-black w-auto h-[141px]">
                  <img src="/images/design.png" alt="" />
                  <h3 className="py-[5px] font-bold text-base">
                    Design & Creative
                  </h3>

                  <p className="text-[14px]">
                    Crafting visually stunning designs that connect with your
                    audience.
                  </p>
                </section>
                <section className="text-black w-auto h-[141px]">
                  <img src="/images/code.png" alt="" />
                  <h3 className="py-[5px] font-bold text-base">Development</h3>

                  <p className="text-[14px]">
                    Bringing your vision to life with the latest technology and
                    design trend.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-primary items-center rounded-t-[50px]">
        <section className="bg-primary flex justify-center items-center rounded-t-[50px] mt-[73px]">
          <div className="pt-[80px]">
            <div className="bg-white w-[128px] h-[128px] px-[23px] py-[23px] rounded-full items-center justify-center flex mx-auto">
              <img className=" w-full h-fit" src="/images/shake.png" alt="" />
            </div>

            <h2 className="text-black text-center text-3xl font-bold bg-gradient-to-r from-[#656565]  to-[#010101] leading-tight bg-clip-text text-transparent md:px-[40px] md:text-xl">
              Tell me about <br className="hidden md:block"></br> your next <br className="md:hidden"></br> project
            </h2>
            <div className=" items-center justify-center flex mx-auto pt-[50px] ">
              <a
                href="mailto:Dipo.ui.58@gmail.com"
                target="_blank"
                className="bg-secondary  text-black items-center button-6 px-[24px] py-[16px] rounded-full font-bold flex  hover:shadow-2xl transition duration-150 ease-in-out"
              >
                <span>
                  <img className="w-[23px] h-fit" src="images/sms.svg" alt="" />
                </span>{" "}
                <span className="pl-[12px]">Email me </span>
              </a>
              <span className="ml-[16px]"></span>
              <a
                href="https://wa.me/01865484147"
                target="_blank"
                className="bg-black  text-white  button-6 px-[24px] py-[16px] rounded-full font-bold flex  hover:shadow-2xl transition duration-150 ease-in-out"
                type="button"
              >
                What's app
              </a>
            </div>
          </div>
        </section>

        <hr className="border-[2px] mx-[60px] mt-[80px] bg-primary" />

        <footer className="m-auto flex justify-between max-w-6xl pt-[90px]">
          <div className="flex flex-auto items-center space-x-2 ">
            <h6 className="md:text-sm">© 2024 All rights reserved.</h6>
          </div>
          <div className="flex flex-auto justify-end items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/diposaha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            <span className="md:hidden">LinkedIn</span>
            <span className="hidden md:block md:bg-white md:p-[6px] md:rounded-full">
              {" "}
              <img src="/images/mdi_linkedin.svg" alt="" />{" "}
            </span>
          </a>
          <a
            href="https://dribbble.com/DipoUI/shots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            {" "}
            <span className="md:hidden">Dribble</span>
            <span className="hidden md:block md:bg-white md:p-[6px] md:rounded-full">
              {" "}
              <img src="/images/dribble.png" alt="" />{" "}
            </span>
          </a>
          <a
            href="https://www.instagram.com/dipoui58/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            <span className="md:hidden">Instagram</span>
            <span className="hidden md:block md:bg-white md:p-[6px] md:rounded-full">
              {" "}
              <img src="/images/instagram.png" alt="" />{" "}
            </span>
          </a>
        </div>
        </footer>
      </section>
      {/* </main> */}
    </>
  );
}
