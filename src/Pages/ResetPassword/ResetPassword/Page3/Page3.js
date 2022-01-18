import React from 'react';
import Header from '../../../Header/Header';

const Page3 = () => {
    return (
        <>
            <Header></Header>
            <div className='d-flex flex-column mt-3'>
                <h2 className='underline'>Password Reset</h2>
                <div className='w-25 align-self-center resetBox mt-5'>
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex flex-direction-column align-items-center boxWidth'>
                            <div>

                                <input className='w-100 mt-5' type="text" placeholder='New Password' />
                                <input className='w-100 mt-4' type="text" placeholder='Confirm Password' />
                                <button className='w-100 mt-4 mb-4 resetButton p-1'>RESET PASSWORD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <svg className='wave1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E6E7F2" fill-opacity="1" d="M0,288L60,240C120,192,240,96,360,58.7C480,21,600,43,720,74.7C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <svg className='wave2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ECEEF5" fill-opacity="1" d="M0,96L120,133.3C240,171,480,245,720,256C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </div>
        </>
    );
};

export default Page3;