import { MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react';


function Header() {
    const router = useRouter();
    const searchInputRef = useRef();

    return (
        <header>
            <Image 
            src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            height={40}
            width={120}
            className='cursor-pointer'
            onClick={() => router.push('/')}
            />

            <form className='flex border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type='text' />

                <XIcon className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3' 
                onClick={() => (searchInputRef.current.value = "")}
                />

                <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2'/>
            </form>
        </header>
    )
}

export default Header
