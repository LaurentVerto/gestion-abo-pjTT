import React, { useEffect, useRef, useState } from 'react';

const Test = () => {
  const divRef = useRef(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const scrollToTop = () => {
    divRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setIsScrolledDown(false);
  };

  useEffect(() => {
    const divElement = divRef.current;

    const handleScroll = () => {
        if (!divElement || !divElement?.scrollTop) return;

      setIsScrolledDown(divElement.scrollTop > 0);
    };

    divElement?.addEventListener('scroll', handleScroll);
    return () => divElement?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1>Test Scroll Top Div</h1>

      <div
        ref={divRef}
        className='relative max-h-72 overflow-y-scroll h-screen w-[30%] border-2 border-black'
      >
        <div className='flex flex-col h-full p-2'>
          {Array.from({ length: 30 }, (_, i) => (
            <p key={i}>Element {i + 1}</p>
          ))}
        </div>

        {isScrolledDown && (
          <div className="sticky bottom-2 flex justify-end pointer-events-none">
            <button
              className='pointer-events-auto mr-2 p-2 bg-red-500 text-white rounded-full shadow-md'
              onClick={scrollToTop}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5z'
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;