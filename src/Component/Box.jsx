
const Box = ({onClick,value}) => {
  return (
    <div onClick={onClick} className="h-20 border-red-50 rounded-xl items-center justify-center flex  shadow bg-gradient-to-b from-gray-400  to-sky-700 via-10% ">
      <h1 className="font-mono font-medium text-3xl text-[#200e0e92]">{value}</h1>
    </div>
  )
}

export default Box
