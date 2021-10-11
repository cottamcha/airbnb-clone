import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import { format } from 'date-fns'


const Search = ({ searchResults }) => {
    const router = useRouter()
    const {location, startDate, endDate, guests} = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${guests} guests`} />
            
            <main className='flex pt-14 px-6'>
                <section className='flex-grow'>
                    <p className='text-xs'>300+ stays - {range} - for {guests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults.map(({img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json())

    return {
        props:{
            searchResults
        }
    }
}