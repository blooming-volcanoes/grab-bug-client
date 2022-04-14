/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import bannerImage from "assets/images/banner-1.png";
import Image from "next/image";
import React from "react";

function Banner() {
    return (
        <section>
            <div className="mx-4 my-12 flex flex-col items-center justify-between py-10 md:max-w-3xl  lg:mx-auto lg:max-w-6xl lg:flex-row">
                {/* left side */}
                <div className="order-2 mx-auto w-[90%] space-y-8 text-center lg:order-1 lg:w-[40%] lg:text-left">
                    <h1 className="text-4xl font-bold leading-[50px] text-gray-800">
                        One app to <br /> replace them all.
                    </h1>
                    <p className="text-sm text-gray-800">
                        All of your work in one place: Tasks, Docs, Chat, Goals, & more.
                    </p>

                    {/* subscribe */}
                    <div className="space-y-6">
                        <input
                            className="w-[80%] rounded-lg border-gray-300 px-4 py-4 text-sm font-medium shadow-lg placeholder:text-gray-400"
                            placeholder="Enter your email address"
                            type="email"
                        />
                        <div className="flex-warp mx-auto flex items-center justify-center space-x-4 lg:justify-start">
                            <button className="primary-btn rounded-lg py-3 px-7">
                                Get Started
                            </button>
                            <p className="text-sm font-semibold uppercase text-gray-300">
                                Free forever <br /> no credit card
                            </p>
                        </div>
                    </div>

                    {/* ratings and companies */}
                    <div className="flex flex-col items-center space-y-4 lg:items-start">
                        {/* ratings */}
                        <div className="flex space-x-4">
                            <div className="flex space-x-1">
                                {new Array(5)
                                    .fill(
                                        "https://clickup.com/landing/images/icons/rating-star.svg"
                                    )
                                    .map((rating, i) => (
                                        <img className="w-4" key={i} src={rating} alt="" />
                                    ))}
                            </div>
                            <p className="text-sm text-gray-500">Based on 10,000+ reviews on</p>
                        </div>
                        {/* companies */}
                        <div className="flex space-x-4">
                            <img
                                className="w-16"
                                src="https://clickup.com/landing/images/reviews/color/g2crowd.png"
                                alt=""
                            />
                            <img
                                className="w-16"
                                src="https://clickup.com/landing/images/reviews/color/capterra.png"
                                alt=""
                            />
                            <img
                                className="w-16"
                                src="https://clickup.com/landing/images/reviews/color/getapp.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* right side  */}
                <div className="order-1 w-full lg:order-2 lg:w-[60%]">
                    <div className="bg-none bg-cover bg-center bg-no-repeat lg:bg-[url('https://clickup.com/landing/images/main/bg_gradient__main-header.svg')]">
                        <Image src={bannerImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
