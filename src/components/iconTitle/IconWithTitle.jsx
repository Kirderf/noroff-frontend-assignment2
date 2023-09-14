
import React from 'react'

const IconWithTitle = () => {
  return (
    <div class=" flex gap-6 items-center text-3xl font-semibold hs-collapse transition-all duration-300 basis-full ">
            <div>
            <img class="relative bg-[url('./src/assets/Backgroundicon.svg')] bg-[10%_100%] w-20 max-w-3xl bottom-0 px-3 py-1" style={{
              backgroundSize: "100% 120%",
              backgroundPositionY: "-12px",
              backgroundRepeat: 'no-repeat'
            }}
            src="./src/assets/Logo.png" alt="Logo"/>
           </div>
            <h1 class="text-white font-light" style={{
              fontFamily: "'Love Ya Like A Sister', cursive",
            }}>Lost in Translation</h1>
        </div>
  )
}

export default IconWithTitle
