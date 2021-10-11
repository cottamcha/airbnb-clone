import React, { useState } from 'react'
import Image from 'next/image'
import { SearchIcon, UsersIcon, UserCircleIcon, MenuIcon, GlobeAltIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState('')
    const [noOfGuests, setNoOfGuests] = useState(1)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const router = useRouter()

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => setSearchInput('')

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                guests: noOfGuests,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString()
            }
        })
    }

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection'
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div onClick={() => router.push('/')} className='relative flex items-ceneter h-10 cursor-pointer my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-md'>
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type='text' placeholder={placeholder || 'Start your Search'}/>
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>
            <div className='flex items-center space-x-4 justify-end text-gray-500 '>
                <p className='hidden lg:inline-flex'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center border-2 p-2 space-x-2 rounded-full shadow-md'>
                    <MenuIcon className='h-6 cursor-pointer'/>
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto mt-3'>
                    <DateRangePicker
                        ranges={[selectionRange]} 
                        minDate={new Date()} 
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect} 
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold' >Number of Guests</h2>

                        <UsersIcon className='h-5' />
                        <input 
                            type='number' 
                            className='w-12 pl-2 text-lg outline-none text-red-400' 
                            value={noOfGuests}
                            min={1}
                            max={50}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                        />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow py-2 text-gray-500 hover:bg-red-400 rounded-xl hover:shadow-xl hover:text-white transition duration-250 ease-out'>Cancel</button>
                        <button onClick={search} className='flex-grow text-red-400 hover:bg-red-400 rounded-xl hover:shadow-xl hover:text-white transition duration-250 ease-out'>Submit</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
