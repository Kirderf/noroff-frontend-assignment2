import React from 'react'
import IconWithTitle from '../iconTitle/IconWithTitle'
const Header = () => {
  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 dark:bg-gray-800 bg-yellow border-b-4 border-r-yellow-dark">
      <nav class="flex flex-nowrap  max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <IconWithTitle />
        <div id="navbar-image-and-text-2" class="grow block gap-2">
          <div class="pr-20 flex mt-5 flex-row items-center justify-end sm:mt-0 sm:pl-5">
            <div class=" bg-yellow-dark rounded-2xl pr-14 pl-5 py-0.5"><p class="text-white">Gard</p></div>
            <img class="w-12 h-auto absolute  bg-yellow-dark rounded-full p-0" src="./src/assets/profileUser.svg" alt="Logo" href="profile"/>
          </div>
        </div>
      </nav>
      <br></br>
    </header>
  )
}

export default Header