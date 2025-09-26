export const Button = () => {
  const handleClick = () => {
    console.dir('testing')
  }
  return (
    <button onClick={handleClick} className='rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all select-none hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
      button
    </button>
  );
};
