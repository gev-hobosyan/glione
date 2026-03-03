import React from "react";

const SignUp = () => {
    return (
        <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
            <div className="flex flex-col items-center justify-center h-screen w-[50%] border-r border-r-gray-500 rounded-2xl">
                <img src="/icon.svg" className="w-20 h-20" />
                <p className="text-white text-2xl mb-20">Create an Account!</p>
                <form>
                    <p className="text-white">Email</p>
                    <input
                        type="text"
                        className="border-white/50 focus:border-secondary/50 focus:ring-0 ring-0 focus:outline-none focus:shadow-input border rounded-xl w-70 py-2.5 px-5 mt-2 text-white"
                        placeholder="Email"
                    ></input>
                    <p className="text-white mt-5">Password</p>
                    <input
                        type="password"
                        className="border-white/50 focus:border-secondary/50 focus:ring-0 ring-0 focus:outline-none focus:shadow-input border rounded-xl w-70 py-2.5 px-5 mt-2 text-white"
                        placeholder="Password"
                    ></input>
                    <p className="text-white mt-5">Confirm Password</p>
                    <input
                        type="password"
                        className="border-white/50 focus:border-secondary/50 focus:ring-0 ring-0 focus:outline-none focus:shadow-input border rounded-xl w-70 py-2.5 px-5 mt-2 text-white"
                        placeholder="Confirm Password"
                    ></input>
                    <input
                        type="submit"
                        className="bg-primary text-white rounded-xl w-70 flex py-2.5 flex-col mt-10"
                        value="Sign In"
                    ></input>
                </form>
            </div>
            <div className="h-screen w-[50%]"></div>
        </div>
    );
};

export default SignUp;