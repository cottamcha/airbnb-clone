import React from 'react'
import { CubeTransparentIcon, CogIcon } from '@heroicons/react/solid'

const Footer = () => {
    return (
        <div className='bg-gray-200'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-800 text-center'>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>About</h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>Community</h5>
                    <p>Accessibility</p>
                    <p>This is not a real site</p>
                    <p>Its a clone</p>
                    <p>The cake is a lie</p>
                    <p>Airhub</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>Host</h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>Support</h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
            </div>
            <div className='flex items-center justify-between px-32 py-10'>
                <p>© 2021 Jacob Cottam</p>
                <div className='flex'>
                    <CubeTransparentIcon className='h-5 pr-3 cursor-pointer'/>
                    <CogIcon className='h-5 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Footer
