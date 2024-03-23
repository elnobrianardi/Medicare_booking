import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Budiman Santoso
                </span>
            </h3>
            <p className="text-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod euismod orci ac porta. 
            Integer auctor ipsum id odio tincidunt tempus. Donec feugiat volutpat blandit. Praesent at semper dui, sed 
            iaculis felis. Proin faucibus urna eu scelerisque suscipit. Nulla laoreet maximus feugiat. Nam tristique 
            bibendum libero, sed facilisis quam pretium at. Fusce ultricies lectus non tellus posuere, in viverra 
            purus quam elementum. 
            </p>
        </div>
        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formateDate('12-20-2010')} - {formateDate('23 June, 2015')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, New York
                    </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formateDate('12-12-2005')} - {formateDate('23 Nov, 2010')} 
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, New York
                    </p>
                </li>
            </ul>
        </div>
    
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Experience
            </h3> 
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
                        {formateDate('12-20-2010')} - {formateDate('23 June, 2015')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, New York
                    </p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
                        {formateDate('12-20-2010')} - {formateDate('23 June, 2015')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, New York
                    </p>
                </li>
            </ul>
        </div>    
    </div>
  )
}

export default DoctorAbout