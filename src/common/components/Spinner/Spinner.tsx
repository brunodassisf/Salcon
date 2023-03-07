export default function Spinner() {
  return (
    <>
      <style global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div>
        <div className="fixed flex justify-center items-center w-full h-full top-0 left-0 bg-blue-100/60 z-10">
          <div className="relative">
            <div
              className="w-12 h-12 rounded-full absolute
            border-8 border-solid border-gray-200"
            ></div>

            <div
              className="w-12 h-12 rounded-full animate-spin absolute
            border-8 border-solid border-blue-600 border-t-transparent shadow-md"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
