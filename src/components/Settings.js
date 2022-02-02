import React from 'react';

const Settings = (props) => {
    
    return (
        <div className='settings'>
            <h2>Personal info</h2>
            <span>Donation total<br/>${props.amount}</span>
            <form onSubmit={(e)=>{
                if(window.confirm("Would you like to make another donation?")){
                    window.location.reload();
                }else{
                    e.preventDefault();
                }
            }}>
                <label>
                    First name
                    <input required placeholder='Enter your first name' className='text' type="text"></input>
                </label>
                <label>
                    Last name
                    <input required placeholder="Enter your last name" className='text' type="text"></input>
                </label>
                <label>
                    E-mail
                    <input required placeholder="Enter your E-mail" className='text' type="email"></input>
                </label>
                <input value="Donate now" className='submit' type="submit" />
            </form>

        </div>
    );
}

export default Settings;
