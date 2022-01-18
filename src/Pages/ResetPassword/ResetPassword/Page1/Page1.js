import React from 'react';
import './Page1.css';

const Page1 = () => {
    return (
        <div>
            <h2 className='underline'>Password Reset</h2>
            <div>
                <p className=''>Email address</p>
                <input type="text" /><br />
                <button>RESET MY PASSWORD</button>
                <p><b>Back to</b> Login Page</p>
            </div>
        </div>
    );
};

export default Page1;