import Input from "@/components/Input";
import React from "react";

const SignUp = () => {
    return (
        <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
            <div className="flex flex-col items-center justify-center h-screen w-[50%] border-r border-r-gray-500 rounded-2xl">
                <img src="/icon.svg" className="w-20 h-20" />
                <p className="text-white text-2xl mb-20">Create an Account!</p>
                <form className="flex flex-col gap-3">
                    <Input id="email" type="email">
                        Email
                    </Input>
                    <Input id="password" type="password">
                        Password
                    </Input>
                    <Input id="password" type="password">
                        Confirm Password
                    </Input>
                    <input
                        type="submit"
                        className="bg-primary text-white rounded-xl w-70 flex py-2.5 flex-col mt-4"
                        value="Sign Up"
                    ></input>
                </form>
            </div>
            <div className="h-screen w-[50%]"></div>
        </div>
    );
};

export default SignUp;