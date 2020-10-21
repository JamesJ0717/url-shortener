import React, { useState } from "react";
import Modal from "./Modal";

export default () => {
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState<{ output?: string; error: boolean; message?: string }>({
    error: false,
  });
  const [show, setShow] = useState(true);
  return (
    <div className="bg-gray-200 h-screen px-0 py-2 flex flex-col justify-center items-center">
      <main className="bg-gray-100 w-8/12 flex flex-col justify-center items-center rounded-2xl shadow-2xl">
        <form id="input" className="w-full p-4">
          <div className="w-full p-4">
            <label htmlFor="url" className="block text-sm leading-5 font-medium text-gray-700">
              URL
            </label>
            <div className="mt-1 rounded-md shadow-sm w-full">
              <input
                id="url"
                className="block w-full bg-gray-200 rounded py-3 mb-3"
                placeholder="URL"
                onChange={(e) => {
                  console.log(e.target.value);
                  setUrl(e.target.value);
                }}
              />
            </div>
          </div>
        </form>
        <button
          className="p-2 bg-blue-500 hover:bg-blue-800 text-blue-100 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
          type="submit"
          onClick={async () => {
            console.log(url);
            setOutput(await (await fetch(`/api/shortenUrl?url=${url}`)).json());
          }}
        >
          Shorten URL
        </button>

        {output.output !== "" ? (
          output.error === true && output.message ? (
            <Modal message={output.message} show={show} setShow={setShow} />
          ) : (
            <>
              <a className="py-4" target="_blank" rel="noopener noreferrer" href={output.output}>
                {output.output}
              </a>
            </>
          )
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};
