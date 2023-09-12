import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full py-16 px-4 shadow-black shadow-md'>
        <h1 className='text-[#ff5f5f]  font-black lg:text-[3rem] text-[2rem] text-center'>Quick Delivery App</h1>
        <div className=' mx-auto grid md:grid-cols-2'>
            <img className='w-[40rem] lg:ml-[18rem] my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
            <div className='flex flex-col space-y-2 lg:mt-[6rem]'>
                <p className='text-[#ffffff] font-bold text-[1.1rem]'>Get The App</p>
                <h1 className='text-[2.5rem] font-bold'>Limitless Convenience on-demand</h1>
                <p className='text-[1rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
                </p>
                <button className='w-max text-[1.2rem] '> Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery