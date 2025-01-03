import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react"

function Location() {
    return (
        <MainLayout>
            <Head title="Location" />
            <div className="h-full container mx-auto overflow-hidden pb-10 lg:pb-20 px-0 lg:px-5 bg-white text-black">
                <div className="pt-28 pb-16 px-10">
                    <h1 className="text-4xl lg:text-5xl text-center text-[#ff5f01] font-extrabold">Our Restaurents</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16 text-center [&>*>h2]:text-2xl [&>*>h2]:my-4 overflow-hidden">
                    <div className="shadow-lg p-5 rounded-lg max-w-full h-96">
                        <h2>Kelena Branch</h2>
                        <p className="h-32">Address: 11 GRD Floor, Jalan SS 6/12, Ss 6, 47301 Petaling Jaya, Selangor</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.960861783648!2d101.5972896734892!3d3.1050516534252353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d67eb85d9d7%3A0x2c0d32e9373a4d00!2sCHAIRMAN%20FRIED%20CHICKEN!5e0!3m2!1sen!2smy!4v1734348775390!5m2!1sen!2smy" width="100%" height="50%" style={{ border: 0, margin: "auto", paddingBottom: 20 }} loading="lazy"></iframe>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg max-w-full h-96">
                        <h2>Main Branch</h2>
                        <p className="h-32">Address: 1-G-01 , 1-1-01 & 1-2, 01, Persiaran Waterfront, PD WATERFRONT, 71000 Port Dickson, Negeri Sembilan</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9565120776056!2d101.79880977348877!3d2.521108056695276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf129818cfb09%3A0xbd7c8d4634b85327!2sCHAIRMAN%20FRIED%20CHICKEN!5e0!3m2!1sen!2smy!4v1734349061037!5m2!1sen!2smy" width="100%" height="50%" style={{ border: 0, margin: "auto", paddingBottom: 20 }} loading="lazy"></iframe>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg max-w-full h-96">
                        <h2>Johor Bahru Branch</h2>
                        <p className="h-32">Address: RESORT, 39, Jalan Lampam 41, Taman Tanjung Puteri, 81700 Pasir Gudang, Johor</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5428300859676!2d103.92931217348952!3d1.448809261252859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3ffe5a3ce2d5%3A0x5d5afe44d2eded03!2sCHAIRMAN%20FRIED%20CHICKEN!5e0!3m2!1sen!2smy!4v1734349195788!5m2!1sen!2smy" width="100%" height="50%" style={{ border: 0, margin: "auto", paddingBottom: 20 }} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Location