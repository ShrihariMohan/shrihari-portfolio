import Image from "next/image"
import CircularProgress from '@mui/material/CircularProgress';


function SplashScreen() {
  return (
    <div className="h-screen w-screen fixed top-0 z-50 flex flex-col place-content-center place-items-center bg-cover bg-[url('/background-filler-splash-screen.svg')]"
      style={{ backgroundColor: '#1F2933' }}>
      <Image src='/splash_screen.png' width={450} height={450}></Image>

      <CircularProgress className="text-cyan-600 mt-4" size={55} />
      <p className='text-cyan-400 text-2xl bottom-5 absolute tracking-wider font-extrabold' style={{ fontFamily: 'Satisfy, cursive' }}> Shrihari M </p>

    </div>
  )
}

export default SplashScreen