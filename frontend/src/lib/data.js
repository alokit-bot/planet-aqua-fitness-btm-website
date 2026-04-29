// Static content for Planet Aqua Pool & Fitness — single source of truth

export const business = {
    name: "Planet Aqua Pool and Fitness",
    nameKannada: "ಪ್ಲಾನೆಟ್ ಫಿಟ್ನೆಸ್",
    tagline: "Swim. Lift. Transform.",
    rating: 4.7,
    reviews: 885,
    phone: "+91 91646 91371",
    phoneTel: "+919164691371",
    whatsapp: "919164691371",
    hours: "5:00 AM – 11:00 PM",
    address: "36, 20th Main Rd, above Corporation Bank, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
    addressShort: "BTM 1st Stage, Bengaluru",
    landmark: "Above Corporation Bank, 20th Main Road",
    mapsLink:
        "https://www.google.com/maps/search/?api=1&query=Planet+Aqua+Pool+and+Fitness+BTM+Layout+Bengaluru",
    mapsEmbed:
        "https://www.google.com/maps?q=20th+Main+Rd,+Jay+Bheema+Nagar,+1st+Stage,+BTM+Layout,+Bengaluru,+Karnataka+560068&output=embed",
};

export const whyUs = [
    {
        icon: "Waves",
        title: "Pool + Gym Combo",
        desc: "BTM's rare all-in-one fitness destination — swim laps, then hit the weights. One membership, two worlds.",
    },
    {
        icon: "Clock",
        title: "Open 5 AM – 11 PM",
        desc: "Early-bird swimmers, lunch-hour lifters, post-office grinders. We're open when you're ready.",
    },
    {
        icon: "MapPin",
        title: "Heart of BTM 1st Stage",
        desc: "Right above Corporation Bank on 20th Main Road. Easy access from anywhere in BTM Layout.",
    },
    {
        icon: "Star",
        title: "4.7★ · 885+ Reviews",
        desc: "Trusted by BTM regulars for years. Rated for cleanliness, coaching, and community.",
    },
];

export const poolFeatures = [
    "Olympic-practice size pool",
    "Heated & maintained water",
    "Separate changing rooms & showers",
    "Swim attire & cap mandatory (hygiene)",
    "Professional coaching available",
    "Beginner & advanced batches",
];

export const gymFeatures = [
    "Full-equipped weight room",
    "Cardio: treadmills, cycles, elliptical",
    "Strength training rigs & free weights",
    "Expert personal trainers on-floor",
    "Air-conditioned workout space",
    "Customised workout & diet plans",
];

export const plans = [
    {
        name: "Pool Only",
        period: "Monthly",
        price: "800",
        unit: "/month",
        features: ["Unlimited swim sessions", "All batches", "Locker access"],
        highlight: false,
    },
    {
        name: "Gym Only",
        period: "Monthly",
        price: "1,200",
        unit: "/month",
        features: ["Full gym access", "Cardio + strength", "Floor trainer guidance"],
        highlight: false,
    },
    {
        name: "Pool + Gym Combo",
        period: "Monthly",
        price: "1,800",
        unit: "/month",
        features: ["Both facilities", "Unlimited usage", "Priority locker"],
        highlight: true,
        badge: "Best Value",
    },
    {
        name: "Annual Combo",
        period: "Yearly",
        price: "18,000",
        unit: "/year",
        features: ["Pool + Gym all year", "Save ₹3,600", "Lock today's price"],
        highlight: false,
        badge: "Save ₹3,600",
    },
    {
        name: "Personal Training",
        period: "1-on-1",
        price: "2,500",
        unit: "/month",
        features: ["Dedicated coach", "Custom plan", "Progress tracking"],
        highlight: false,
    },
];

export const schedule = [
    {
        block: "Early Morning",
        time: "5:00 AM – 8:00 AM",
        focus: "Pool focus · serious swimmers",
        icon: "Sunrise",
    },
    {
        block: "Day Hours",
        time: "8:00 AM – 5:00 PM",
        focus: "Open access · pool & gym",
        icon: "Sun",
    },
    {
        block: "Peak Evening",
        time: "5:00 PM – 9:00 PM",
        focus: "Post-office crowd · trainers in",
        icon: "Sunset",
    },
    {
        block: "Late Night",
        time: "9:00 PM – 11:00 PM",
        focus: "Quiet sessions · last laps",
        icon: "Moon",
    },
];

export const testimonials = [
    {
        name: "Rahul M.",
        role: "Member · 2 years",
        text: "Best pool + gym combo in BTM. Worth every rupee. The water is always clean and the trainers actually pay attention.",
        rating: 5,
    },
    {
        name: "Priya S.",
        role: "Member · 1 year",
        text: "Open till 11 PM is a lifesaver after office. Coaches are excellent and the place is genuinely welcoming for women.",
        rating: 5,
    },
    {
        name: "Karthik R.",
        role: "Member · 3 years",
        text: "Been coming here for 3 years. Clean pool, good equipment, friendly staff. Doesn't feel like a chain — feels like a community.",
        rating: 5,
    },
    {
        name: "Anjali T.",
        role: "Parent",
        text: "My kids love swimming here. Very safe, well-maintained, and the coaches are patient with beginners. Highly recommended.",
        rating: 5,
    },
];

export const faqStats = [
    { value: "4.7", label: "Google Rating", suffix: "★" },
    { value: "885", label: "Reviews", suffix: "+" },
    { value: "5+", label: "Years Serving BTM", suffix: "" },
    { value: "18", label: "Hours Open Daily", suffix: "h" },
];
