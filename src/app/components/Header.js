"use client"; // This is a client component
import { useState, useCallback } from "react";
import "../globals.css";
import Image from "next/image";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter, useSearchParams } from "next/navigation";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };

  const createQueryString = useCallback(
    (searchInput, startDate, endDate, noOfGuests) => {
      const params = new URLSearchParams(searchParams);
      params.set("location", searchInput);
      params.set("startDate", startDate.toISOString());
      params.set("endDate", endDate.toISOString());
      params.set("noOfGuests", noOfGuests);
      return params.toString();
    },
    [searchParams]
  );

  const search = () => {
    router.push(
      "/search" +
        "?" +
        createQueryString(searchInput, startDate, endDate, noOfGuests)
    );
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-5 xl:px-10">
      <div className="grid grid-cols-3 items-center">
        <div
          className="h-10 cursor-pointer md:w-5/12"
          onClick={() => router.push("/")}
        >
          <div>
            <Image
              className=""
              src="https://links.papareact.com/qd3"
              width={120}
              height={120}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="border-2 rounded-full p-1 shadow-sm">
          <div className="flex ">
            <div className="w-11/12">
              <input
                className="w-full pr-1 md:pl-5 lg:pl-5 transparent outline-none text-gray-600 placeholder-gray-400"
                type="text"
                placeholder={placeholder || "Start your search .."}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="text-right inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex sm:space-x-3 md:space-x-5  justify-center text-gray-400 items-center">
            <p className="cursor-pointer invisible md:visible">Become a host</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <div className="flex  md:space-x-2 border-2 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white bg-gray-400 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {searchInput && (
          <div className="text-center items-center">
            <DateRangePicker
              className="border-2 shadow-sm border-red-300"
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5861"]}
              onChange={handleSelect}
            />

            <div className="flex justify-center">
              <div className="w-1/2">
                <div className="grid grid-cols-2 p-3 mx-4 bg-gray-300">
                  <div className="flex items-center">
                    <h4 className="text-start flex">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 mx-2 text-gray-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        ></path>
                      </svg>{" "}
                      Number of Guests
                    </h4>
                    <input
                      type="number"
                      className="text-lg text-center ml-3 outline-none text-gray-400 w-10 border-2 border-gray-200"
                      value={noOfGuests}
                      min={1}
                      onChange={(e) => setNoOfGuests(e.target.value)}
                    />
                  </div>
                  <div className="text-end">
                    <button
                      onClick={resetInput}
                      className="flex-grow text-white bg-gray-400 px-4 py-1 rounded-lg hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={search}
                      className="flex-grow text-white bg-red-400 hover:bg-red-500 mx-2 px-4 py-1 rounded-lg"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
