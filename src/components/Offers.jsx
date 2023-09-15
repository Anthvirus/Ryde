import React from "react";

const Offer = [
    {
        title: "Customized Packages",
        about:"Tailoring your ryde experience to your specific needs is a hallmark of our services. Whether it's a romantic night out, a business meeting, or a special event, you can opt for customized packages that include amenities like in-car refreshments, Wi-Fi, and a professional chauffeur, ensuring you arrive in style."
    },
    {
        title: "First Class Fleet" ,
        about:"We boast an impressive fleet of top-of-the-line vehicles. From sleek sedans to spacious SUVs, you can choose the ride that suits your style. What's more, many providers offer exclusive discounts for loyal customers and frequent riders, ensuring you can travel in style without breaking the bank."
    },
    {
        title: "Exclusive Loyalty Program",
        about:"Many luxury taxi providers offer loyalty programs that reward frequent travelers with exclusive benefits. These programs often include discounts, priority booking, and access to premium services, making every ride a rewarding experience."
    }
]

function Offers(){
    return (
        Offer.map(({title, about}, index) => {
            return (
            <div className="flex flex-col items-center p-6 shadow-md h-auto w-72 sm:w-80 lg:w-96 bg-neutral-600 text-slate-50">
                <h1 className="my-3 text-lg lg:text-2xl uppercase font-extralight" key={index}>{title}</h1>
                <p className="text-sm lg:text-lg">{about}</p>
            </div>)
        })
    )
}

export default Offers;