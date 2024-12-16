import { useState, useEffect, useCallback } from "react";

// মূল কম্পোনেন্ট
const OfferCountdown = () => {
    // অফারের শুরুর এবং শেষের সময় নির্ধারণ (3 দিনের জন্য)
    const offerStartTime = new Date("2024-12-15T00:00:00").getTime(); // স্টার্ট টাইম
    const offerEndTime = new Date("2024-12-18T00:00:00").getTime();   // শেষ টাইম

    // সময়ের বাকি অংশ এবং অফারের স্টেট ট্র্যাক করতে useState ব্যবহার করা হয়েছে
    const [timeLeft, setTimeLeft] = useState({});  // অফার শেষ হওয়ার জন্য কত সময় বাকি
    const [offerLive, setOfferLive] = useState(false); // অফার বর্তমানে লাইভ আছে কি না

    // সময় গণনার লজিক, অফার লাইভ আছে কিনা তা চেক এবং সময়ের পার্থক্য বের করা
    const calculateTimeLeft = useCallback(() => {
        const now = new Date().getTime(); // বর্তমান সময়

        // যদি বর্তমান সময় অফারের শুরুর এবং শেষের সময়ের মধ্যে থাকে
        if (now >= offerStartTime && now <= offerEndTime) {
            setOfferLive(true); // অফারকে লাইভ হিসেবে চিহ্নিত করুন
            const difference = offerEndTime - now; // অফার শেষ হতে কত সময় বাকি

            // বাকি সময়কে দিন, ঘণ্টা, মিনিট, সেকেন্ডে রূপান্তর
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),         // দিন
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),     // ঘণ্টা
                minutes: Math.floor((difference / (1000 * 60)) % 60),        // মিনিট
                seconds: Math.floor((difference / 1000) % 60),               // সেকেন্ড
            };
        }

        // যদি অফার শেষ হয়ে যায়
        setOfferLive(false); // অফারকে লাইভ থেকে সরিয়ে ফেলুন
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // শূন্য সময় দেখান
    }, [offerStartTime, offerEndTime]);

    // প্রতি ১ সেকেন্ডে সময় গণনার জন্য useEffect ব্যবহার করা হয়েছে
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft()); // প্রতি ১ সেকেন্ডে সময় গণনা করে আপডেট করুন
        }, 1000);

        // টাইমার ক্লিয়ার করা হচ্ছে কম্পোনেন্ট আনমাউন্ট হলে
        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    // UI অংশ, অফার লাইভ হলে এবং অফার শেষ হয়ে গেলে দুটি ভিন্ন ভিউ দেখানো হচ্ছে
    return (
        <div className="flex flex-col items-center justify-center py-5 bg-gray-100">
            {offerLive ? ( // যদি অফার লাইভ থাকে
                <div className="text-center bg-green-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-green-800">🎉 Limited Time Offer! 🎉</h2>
                    <p className="text-lg text-green-600">Hurry up! Offer ends in:</p>
                    {/* দিন, ঘণ্টা, মিনিট এবং সেকেন্ড দেখানোর জন্য */}
                    <div className="mt-4 text-3xl font-mono text-red-500">
                        {timeLeft.days.toString().padStart(2, "0")} days,{" "}
                        {timeLeft.hours.toString().padStart(2, "0")}:
                        {timeLeft.minutes.toString().padStart(2, "0")}:
                        {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                </div>
            ) : ( // যদি অফার শেষ হয়ে যায়
                <div className="text-center bg-gray-200 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">❌ Offer Expired!</h2>
                    <p className="text-lg text-gray-600">Stay tuned for the next offer!</p>
                </div>
            )}
        </div>
    );
};

export default OfferCountdown;



    /*************  সার্ভার থেকে অফারের সময় আনার ফাংশন  ***************/
    
    // import { useState, useEffect, useCallback } from "react"; 

    // // মূল কম্পোনেন্ট
    // const OfferCountdownServer = () => {
    //     // টাইমার এবং অফারের স্টেটগুলো ট্র্যাক করার জন্য useState ব্যবহার
    //     const [timeLeft, setTimeLeft] = useState({}); // অফার শেষ হওয়ার জন্য সময় বাকি
    //     const [offerLive, setOfferLive] = useState(false); // অফার লাইভ কিনা তা নির্ধারণ
    //     const [offerStartTime, setOfferStartTime] = useState(null); // অফারের শুরু সময়
    //     const [offerEndTime, setOfferEndTime] = useState(null); // অফারের শেষ সময়
    
    //     // সার্ভার থেকে অফারের সময় আনার ফাংশন
    //     const fetchOfferData = async () => {
    //         try {
    //             // সার্ভারের নির্দিষ্ট এন্ডপয়েন্ট থেকে অফারের সময় ফেচ করা
    //             const response = await fetch("https://api.example.com/offer-time"); 
    //             const data = await response.json();
    
    //             // সার্ভার থেকে প্রাপ্ত ডেটা প্রক্রিয়া করে স্টেট আপডেট
    //             const startTime = new Date(data.startTime).getTime(); // স্টার্ট টাইম
    //             const endTime = new Date(data.endTime).getTime();     // এন্ড টাইম
    
    //             setOfferStartTime(startTime); // স্টার্ট টাইম সেট
    //             setOfferEndTime(endTime);     // এন্ড টাইম সেট
    //         } catch (error) {
    //             console.error("Failed to fetch offer data:", error); // এরর হ্যান্ডলিং
    //         }
    //     };
    
    //     // অফারের সময় বাকি বের করার লজিক
    //     const calculateTimeLeft = useCallback(() => {
    //         const now = new Date().getTime(); // বর্তমান সময়
    
    //         if (offerStartTime && offerEndTime) { // যখন অফারের সময় লোড হয়ে গেছে
    //             // অফার যদি এখন চলছে
    //             if (now >= offerStartTime && now <= offerEndTime) {
    //                 setOfferLive(true); // অফার লাইভ হিসেবে চিহ্নিত
    //                 const difference = offerEndTime - now; // বাকি সময় গণনা
    
    //                 // সময়কে দিন, ঘণ্টা, মিনিট এবং সেকেন্ডে রূপান্তর
    //                 return {
    //                     days: Math.floor(difference / (1000 * 60 * 60 * 24)),       // দিন
    //                     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),   // ঘণ্টা
    //                     minutes: Math.floor((difference / (1000 * 60)) % 60),      // মিনিট
    //                     seconds: Math.floor((difference / 1000) % 60),             // সেকেন্ড
    //                 };
    //             } else {
    //                 setOfferLive(false); // অফার শেষ হলে
    //                 return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // শূন্য দেখান
    //             }
    //         }
    
    //         return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // ডিফল্ট মান
    //     }, [offerStartTime, offerEndTime]); // নির্ভরশীলতা নির্ধারণ
    
    //     // সার্ভার থেকে সময় ফেচ এবং প্রতি ১ সেকেন্ডে টাইমার আপডেট করার জন্য useEffect
    //     useEffect(() => {
    //         fetchOfferData(); // অফারের সময় লোড করা
    //         const timer = setInterval(() => {
    //             setTimeLeft(calculateTimeLeft()); // প্রতি সেকেন্ডে সময় গণনা
    //         }, 1000);
    
    //         return () => clearInterval(timer); // কম্পোনেন্ট আনমাউন্ট হলে টাইমার বন্ধ করা
    //     }, [calculateTimeLeft]);
    
    //     // UI অংশ
    //     return (
    //         <div className="flex flex-col items-center justify-center py-5 bg-gray-100">
    //             {offerLive ? ( // যদি অফার লাইভ থাকে
    //                 <div className="text-center bg-green-100 p-6 rounded-lg shadow-md">
    //                     <h2 className="text-2xl font-bold mb-4 text-green-800">🎉 Limited Time Offer! 🎉</h2>
    //                     <p className="text-lg text-green-600">Hurry up! Offer ends in:</p>
    //                     {/* সময় দেখানোর জন্য */}
    //                     <div className="mt-4 text-3xl font-mono text-red-500">
    //                         {timeLeft.days.toString().padStart(2, "0")} days,{" "}
    //                         {timeLeft.hours.toString().padStart(2, "0")}:
    //                         {timeLeft.minutes.toString().padStart(2, "0")}:
    //                         {timeLeft.seconds.toString().padStart(2, "0")}
    //                     </div>
    //                 </div>
    //             ) : ( // যদি অফার শেষ হয়ে যায়
    //                 <div className="text-center bg-gray-200 p-6 rounded-lg shadow-md">
    //                     <h2 className="text-2xl font-bold mb-4 text-gray-800">❌ Offer Expired!</h2>
    //                     <p className="text-lg text-gray-600">Stay tuned for the next offer!</p>
    //                 </div>
    //             )}
    //         </div>
    //     );
    // };
    
    // export default OfferCountdownServer; 
    

