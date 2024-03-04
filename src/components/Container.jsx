/* eslint-disable react/prop-types */


function Container({children}) {
  return (
    <div 
    className="text-white flex flex-col w-3/4 m-auto gap-6 flex-wrap
    p-10"
    >
    {children}
    </div>
  )
}

export default Container