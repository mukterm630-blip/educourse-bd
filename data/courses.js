/* ===========================================================
   ⭐ এই ফাইলটিই আপনি এডিট করবেন ⭐
   ১) WHATSAPP_NUMBER  → দেশের কোডসহ নম্বর, + ছাড়া (যেমন 8801712345678)
   ২) affiliateLink    → আপনার আসল অ্যাফিলিয়েট লিংক বসান (https:// দিয়ে শুরু)
   ৩) image            → ছবির লিংক দিলে ছবি দেখাবে, ফাঁকা থাকলে আইকন দেখাবে
   ৪) নতুন কোর্স যোগ করতে একটি { ... }, ব্লক কপি করে নিচে পেস্ট করুন
   category এর মান শুধু: "ssc" , "hsc" , "class6-10"
   =========================================================== */

const WHATSAPP_NUMBER = "8801XXXXXXXXX";   // ← আপনার নম্বর বসান
const CONTACT_EMAIL = "your@email.com";    // ← আপনার ইমেইল বসান

const CATEGORIES = [
  { id: "ssc", name: "এসএসসি", icon: "🎓", note: "বিজ্ঞান, ব্যবসায় ও মানবিক" },
  { id: "hsc", name: "এইচএসসি", icon: "📘", note: "প্রথম ও দ্বিতীয় বর্ষ" },
  { id: "class6-10", name: "ক্লাস ৬-১০", icon: "📚", note: "ভিত্তি মজবুত করার কোর্স" }
];


const COURSES = [
  {
    id: "hsc-27-last-moment-bei",
    category: "hsc",
    title: "HSC 27 শেষ মুহূর্তের প্রস্তুতি কোর্স (বাংলা, ইংরেজি, ICT)",
    desc: "এইচএসসি ২০২৭ পরীক্ষার্থীদের বাংলা, ইংরেজি ও ICT বিষয়ে গোছানো প্রস্তুতির জন্য বিশেষ কোর্স।",
    details: "লাইভ ক্লাস, লেকচার স্লাইড, নিয়মিত MCQ পরীক্ষা, ফাইনাল মডেল টেস্ট ও এক্সক্লুসিভ সাজেশনের মাধ্যমে পরীক্ষার প্রস্তুতি নিতে পারবে।",
    instructor: "এক্সপার্ট টিচার প্যানেল",
    duration: "কোর্স পেজে দেখুন",
    level: "HSC 27",
    price: "৳ ১,২৫০ (আগের মূল্য ৳ ১,৫০০)",
    image: "",
    affiliateLink: "https://10minuteschool.com/product/hsc-27-sesh-muhurter-prostuti-bangla-english-ict/?aff=fbg6551&utm_medium=affiliation&utm_source=348&utm_campaign=undefined_undefined&utm_content=undefined&type=affiliate",
    features: [
      "বাংলা, ইংরেজি ও ICT",
      "৫০টি লাইভ ক্লাস",
      "৫০টি লেকচার স্লাইড",
      "৫০টি ক্লাসভিত্তিক MCQ পরীক্ষা",
      "৫টি ফাইনাল মডেল টেস্ট ও সলভ শিট",
      "৩টি স্পেশাল Zoom কনসালটেন্সি সেশন",
      "ফ্রি এক্সক্লুসিভ সাজেশন"
    ]
  }
];
