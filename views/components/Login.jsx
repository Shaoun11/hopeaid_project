import { useState } from 'react';
import toast from "react-hot-toast";
import { Form, Link, useNavigate } from 'react-router-dom';




const Login = () => {

    const navigate =useNavigate()
    const [message, setMessage] = useState('');
    // const {userlogin,googlelogin}=useContext(Authcontext);
    const handlelogin = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        try {
            const response = await fetch('http://localhost:3001/api/UserLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ EmailAddress: email, Password: password })
            });

            const result = await response.json();

            if (response.status === 200) {
                setMessage('Login successful');
                console.log('Login successful', result);
                localStorage.setItem('authToken', result.token);
                // redirect to another page
                navigate("/")
                toast.success('Login successful');
            } else {
                toast.error(`Login failed: ${result.status}`);
                console.log('Login failed', result.status);
                
            }
        } catch (error) {
            toast.error(`An error occurred: ${error.message}`);
            toast.error('Error:', error);
        }
    }

    return (
        <>
            <div className='mt-20'>

                <div className="py-16">
                    <div className="flex backdrop-blur-3xl bg-[#FEF9F6] rounded-xl border   overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                        <div className="hidden lg:block lg:w-1/2 bg-cover"
                        >
                            <img className='bg-white h-[500px] w-[880px] object-cover ' src="https://i.ibb.co/R3GyTrY/Sign-in-rafiki.png" alt="" />
                        </div>
                        <div className="w-full p-8 lg:w-1/2 mt-4">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">Please Log in</h2>
                            <p className="text-xl text-gray-600 text-center">Hey,Welcome back!
                            <h2 className='text-gray-700 text-[22px] font-medium'>Hope<span className='text-[#068278]'>Aid</span> </h2>
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                                <a href="#" className="text-xs text-center text-gray-500 uppercase">login with email</a>
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                            </div>
                            <form onSubmit={handlelogin}>
                                <div className="mt-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                                    <input className="bg-stone-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='email' type="email"  />
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                                        {/*<a href="#" className="text-xs text-gray-500">Forget Password?</a>*/}
                                    </div>
                                    <input className="bg-stone-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='password' type="password" />
                                </div>
                                <div className="mt-8">
                                    <button className="bg-bg-stone-50 border-[#068278] border text-[#068278] hover:bg-[#068278] hover:text-white font-bold py-2 px-4 w-full rounded">Login</button>
                                </div>
                            </form>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 md:w-1/4"></span>
                                <a href="#" className="text-xs text-gray-500 uppercase ">or <Link to={"/register"}><span className='font-semibold text-red-500'>sign up</span></Link> </a>
                                <span className="border-b w-1/5 md:w-1/4"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Login;