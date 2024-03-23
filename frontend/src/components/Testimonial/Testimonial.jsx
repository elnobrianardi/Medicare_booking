import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'
import {BsArrowRightCircle} from 'react-icons/bs'
import { BsArrowLeftCircle } from 'react-icons/bs';


const Testimonial = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
        <Slide  slidesToScroll={1} slidesToShow={3} indicators={true} arrows={false}>
        <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Muhibur Rahman
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                        "I have taken medical services from them. 
                        They treat me so well and they are providing the best medical services."
                    </p>
                </div>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Mahmuduhibur Rahman
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                        "I have taken medical services from them. 
                        They treat me so well and they are providing the best medical services."
                    </p>
                </div>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                               Mahmud
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                                <HiStar className='text-yellow-400 w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                        "I have taken medical services from them. 
                        They treat me so well and they are providing the best medical services."
                    </p>
                </div>
                
        </Slide>
        </div>
  )
} 


export default Testimonial