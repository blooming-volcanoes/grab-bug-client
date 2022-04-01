/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import bannerImage from "assets/images/banner-1.png";
import Image from "next/image";
import React from "react";

function Banner() {
    return (
        <section>
            {/* left side */}
            <div>
                <h1>One app to replace them all.</h1>
                <p>All of your work in one place: Tasks, Docs, Chat, Goals, & more.</p>

                {/* subscribe */}
                <div>
                    <input type="email" />
                    <div>
                        <button>Get Started</button>
                        <p>Free forever no credit card</p>
                    </div>
                </div>

                {/* ratings and companies */}
                <div>
                    {/* ratings */}
                    <div>
                        {new Array(5)
                            .fill("https://clickup.com/landing/images/icons/rating-star.svg")
                            .map((rating, i) => (
                                <img key={i} src={rating} alt="" />
                            ))}
                        <p>Based on 10,000+ reviews on</p>
                    </div>
                    {/* companies */}
                    <div>
                        <img
                            src="https://clickup.com/landing/images/reviews/color/g2crowd.png"
                            alt=""
                        />
                        <img
                            src="https://clickup.com/landing/images/reviews/color/capterra.png"
                            alt=""
                        />
                        <img
                            src="https://clickup.com/landing/images/reviews/color/getapp.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* right side  */}
            <div>
                <div>
                    <Image src={bannerImage} />
                </div>
            </div>
        </section>
    );
}

export default Banner;
