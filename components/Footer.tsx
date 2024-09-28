import React from "react";
import Link from "next/link";
import Container from "./Container";

export function Footer() {
  return (
    <Container>
    <div className="relative">
    <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t-8 border-[#302d2d3b] dark:border-trueGray-700 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div>
          <span className="font-bold">About Us</span>
        </div>
        <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
          Cryptosteeze is your trusted companion for navigating the exciting world of cryptocurrency, providing expert insights, innovative tools, and a supportive community to help you achieve financial success.
        </div>
      </div>

      <div>
        <div className="flex justify-start mr-5 font-bold">Contact Us</div>
        <div className="grid grid-cols-2 grid-rows-1 gap-x-20 gap-y-10 mt-5 text-white dark:text-gray-500">
          <div className="flex flex-row items-center">
             <a href="tel:+2347856903456" className="flex flex-row items-center">
              <PhoneIcon />
             <div className="flex flex-col">
             <span className="text-center text-[12px] text-white">Have a Question?</span>
             <span className="+2347856903456 text-[12px] text-white">+2347856903456</span>
             </div>
            </a>
          </div>
          <div className="flex flex-row items-center">
            <a href="mailto:cryptosteeze@gmail.com" className="flex flex-row items-center">
              <FacebookIcon />
              <div className="flex flex-col">
              <span className="text-center text-[12px] text-white">Contact Us at</span>
              <span className="text-center text-[12px] text-white">cryptosteeze@gmail.com</span>
              </div>
            </a>
          </div>
          <div className="flex flex-row items-center">
  
              <InstagramIcon />
              {/* <span className="text-center text-[12px] text-white">Instagram</span> */}
          </div>
          <div className="flex justify-between flex-row items-center">
              <LinkedInIcon />
              {/* <span className=" text-[12px] text-white">LinkedIn</span> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  </Container>
);
}


const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <circle cx="22.5" cy="22.5" r="22.5" fill="#001F3F" />
    <path d="M35.7301 12.3142C35.8681 12.1661 35.9433 11.9702 35.9397 11.7677C35.9361 11.5652 35.8541 11.3721 35.7109 11.2289C35.5678 11.0857 35.3746 11.0037 35.1721 11.0001C34.9697 10.9965 34.7737 11.0717 34.6256 11.2097L26.0606 19.7748V13.3249C26.0606 13.1177 25.9782 12.9189 25.8317 12.7724C25.6851 12.6258 25.4863 12.5435 25.2791 12.5435C25.0718 12.5435 24.8731 12.6258 24.7265 12.7724C24.5799 12.9189 24.4976 13.1177 24.4976 13.3249V21.6607C24.4976 22.0921 24.8477 22.4422 25.2791 22.4422H33.6149C33.8221 22.4422 34.0209 22.3599 34.1675 22.2133C34.314 22.0668 34.3964 21.868 34.3964 21.6607C34.3964 21.4535 34.314 21.2547 34.1675 21.1081C34.0209 20.9616 33.8221 20.8793 33.6149 20.8793H27.1651L35.7301 12.3142ZM17.2663 11.0639C15.7919 10.8638 14.2988 11.1514 13.1318 11.9006C11.9491 12.6602 11.1166 13.8907 11.0259 15.486C10.8686 18.2524 11.3781 22.0723 13.9226 26.4799C16.4306 30.8239 19.4961 33.5278 21.9906 35.1595C24.9144 37.0736 28.3612 35.4971 29.8711 32.6577C30.0939 32.2388 30.2092 31.7711 30.2067 31.2966C30.2041 30.8221 30.0838 30.3557 29.8565 29.9392L28.5394 27.525C28.0958 26.7117 27.3776 26.0825 26.513 25.7496C25.6485 25.4168 24.6938 25.4019 23.8193 25.7078L22.0896 26.3121C21.677 26.4569 21.3248 26.3736 21.1279 26.1798C20.0307 25.092 19.0168 23.2623 18.6459 21.718C18.5782 21.4357 18.6907 21.0814 19.021 20.799L20.337 19.6706C20.9104 19.1791 21.3031 18.5101 21.4527 17.7698C21.6022 17.0295 21.5 16.2605 21.1622 15.585L19.6983 12.657C19.4898 12.24 19.1826 11.8801 18.8035 11.6086C18.4243 11.3372 17.9847 11.1623 17.5226 11.0993L17.2663 11.0639ZM12.5847 15.5756C12.6452 14.5232 13.1755 13.7292 13.9758 13.2155C14.7916 12.6914 15.9013 12.4559 17.0537 12.6133L17.3101 12.6477C17.7373 12.706 18.1072 12.9707 18.2999 13.3562L19.7629 16.2842C19.9444 16.6477 19.9994 17.0614 19.919 17.4598C19.8385 17.8581 19.6274 18.2181 19.319 18.4827L18.0019 19.6122C17.3413 20.1791 16.887 21.097 17.1246 22.0827C17.5612 23.8989 18.7136 25.9891 20.0275 27.2895C20.7569 28.0116 21.7885 28.0741 22.6043 27.7886L24.334 27.1832C24.8587 26.9997 25.4314 27.0085 25.9502 27.2081C26.4689 27.4078 26.8999 27.7852 27.1661 28.2731L28.4842 30.6874C28.6926 31.0729 28.6957 31.5366 28.4905 31.9231C27.2755 34.2071 24.7769 35.1168 22.845 33.8518C20.5246 32.3337 17.6435 29.7996 15.2761 25.6984C12.8911 21.568 12.4441 18.0545 12.5847 15.5756Z" fill="white" />
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <circle cx="22.5" cy="22.5" r="22.5" fill="#001F3F"/>
  <path d="M36.5 13.75C36.5 12.2375 35.2625 11 33.75 11H11.75C10.2375 11 9 12.2375 9 13.75V30.25C9 31.7625 10.2375 33 11.75 33H33.75C35.2625 33 36.5 31.7625 36.5 30.25V13.75ZM33.75 13.75L22.75 20.625L11.75 13.75H33.75ZM33.75 30.25H11.75V16.5L22.75 23.375L33.75 16.5V30.25Z" fill="#F5F5F5"/>
</svg>
);

// You can define other social icons similarly

const InstagramIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
  <path d="M23.6536 1.62131C23.9184 1.62352 24.1776 1.69813 24.403 1.83705C24.6285 1.97597 24.8116 2.17391 24.9327 2.40945C25.0537 2.64499 25.108 2.90914 25.0896 3.17332C25.0713 3.43749 24.9811 3.69162 24.8287 3.90819L23.3658 5.9873C23.276 13.1273 20.888 17.9748 16.268 20.3964C14.0667 21.4915 11.6339 22.04 9.1757 21.9954C6.13614 22.0655 3.13249 21.3272 0.471804 19.856C0.292813 19.7357 0.154478 19.564 0.0750333 19.3635C-0.00441099 19.163 -0.021234 18.9431 0.0267822 18.7329C0.0720965 18.5197 0.180802 18.3252 0.338635 18.1749C0.496469 18.0245 0.696057 17.9254 0.91121 17.8906C2.69866 17.6409 4.45882 17.2245 6.16864 16.6468C-1.49359 13.102 0.176995 5.13375 0.906999 2.68684C0.978165 2.44391 1.11198 2.22397 1.29501 2.0491C1.47804 1.87423 1.70384 1.75058 1.94976 1.69056C2.19568 1.63054 2.45307 1.63625 2.69608 1.70714C2.93909 1.77802 3.15918 1.91158 3.33426 2.09441C5.57704 4.40557 8.55085 5.86891 11.7504 6.23578C11.6938 5.37599 11.8268 4.51427 12.14 3.71156C12.4531 2.90884 12.9388 2.18473 13.5627 1.59043C14.6438 0.564444 16.0789 -0.00519392 17.5694 3.56918e-05C19.0598 0.0052653 20.4908 0.584959 21.5647 1.6185L23.6536 1.62131ZM2.04552 19.1302C4.6595 20.3543 10.7859 21.6838 15.6166 19.1526C19.765 16.9781 21.9002 12.5096 21.9634 5.87078C21.9661 5.65124 22.0357 5.43774 22.1627 5.2587L23.6803 3.09957L23.6228 3.02517C22.8956 3.01534 22.1782 3.00551 21.4468 3.02517C21.1617 3.01799 20.8889 2.90777 20.6789 2.71491C19.8707 1.89575 18.7735 1.42628 17.623 1.40737C16.4724 1.38847 15.3604 1.82166 14.5258 2.61384C13.9893 3.12337 13.5883 3.75862 13.3592 4.46211C13.13 5.1656 13.0798 5.91514 13.2132 6.6429C13.2372 6.77847 13.2302 6.91773 13.1928 7.05023C13.1554 7.18273 13.0884 7.30504 12.997 7.408C12.9091 7.51173 12.7971 7.59224 12.6708 7.64243C12.5444 7.69262 12.4077 7.71094 12.2726 7.69579C8.50061 7.43309 4.95877 5.78567 2.3277 3.07009C1.38712 5.9873 0.19384 13.029 7.75921 15.796C7.91861 15.8528 8.05836 15.9542 8.16187 16.0881C8.26539 16.222 8.32833 16.3827 8.34321 16.5513C8.35948 16.7171 8.32857 16.8841 8.25406 17.0332C8.17955 17.1822 8.06447 17.3071 7.92205 17.3936C6.07315 18.2946 4.08716 18.8814 2.04552 19.1302Z" fill="#F5F5F5"/>
</svg>
);
