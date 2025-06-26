import React from 'react';

const plans = [
    {
        title: 'Standard',
        badge: 'Most Popular',
        description: 'One request at a time. For companies who need on-going design support.',
        price: '$2,995/m',
        note: 'Pause or cancel anytime',
        features: [
            '1x active task at a time',
            'Unlimited revisions',
            'Dedicated project manager',
            'Daily comms through Slack',
            'Work with senior designers',
            '2-3 days turn around time',
            'Top tier design',
        ],
    },
    {
        title: 'Growth',
        badge: 'Best value',
        description: 'Double the requests. For companies with increasing design needs. Limited spots.',
        price: '$4,795/m',
        note: 'Pause or cancel anytime',
        features: [
            '2x active task at a time',
            'Unlimited revisions',
            'Dedicated project manager',
            'Daily comms through Slack',
            'Work with senior designers',
            '2-3 days turn around time',
            'Top tier design',
        ],
    },
    {
        title: 'Basic – Weekly',
        badge: null,
        description: 'Perfect if you want to try the subscription out or only have a few one-off tasks.',
        price: '$890/m',
        note: 'Paid per weekly',
        features: [
            'Fixed Scope of work',
            '2 rounds of revisions',
            'Dedicated project manager',
            'Daily comms through Slack',
            '1x designer',
            '2–5 days turn around time',
            'Top tier design',
        ],
    },
];

const PriceCard = () => {
    return (
        <div className="">
            <div className=" grid md:grid-cols-3 gap-6">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1e1e1e] text-white border border-red-500 rounded-xl py-[44px] px-[45px] flex flex-col justify-between"
                    >
                        {/* Header */}
                        <div>
                            <div className="flex gap-2 items-center mb-2">
                                <h3 className="text-[34px] font-semibold">{plan.title}</h3>
                                {plan.badge && (
                                    <span className={`text-[14px] ${idx == 0 ? "bg-red-500 text-white" : " bg-white text-black"}  px-2 py-[6px] rounded-[8px]`}>
                                        {plan.badge}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-400 mb-4">{plan.description}</p>

                            <hr className="border-red-500 mb-4" />

                            <h4 className="text-[48px] font-bold text-red-500 mb-1">{plan.price}</h4>
                            <p className="text-sm text-gray-400 mb-6">{plan.note}</p>

                            <hr className="border-red-500 mb-4" />


                            {/* Features */}
                            <ul className="space-y-3 text-sm text-white">
                                {plan.features.map((feature, i) => {
                                    const highlight = '2x active task';
                                    const isMatch = feature.includes(highlight);

                                    return (
                                        <li key={i} className="flex text-[20px] items-start gap-2">
                                            <span className="text-red-500 font-bold text-lg">+</span>

                                            {isMatch ? (
                                                (() => {
                                                    const parts = feature.split(highlight); // split into [before, after]
                                                    return (
                                                        <span>
                                                            {parts[0]}
                                                            <span className="text-red-500 font-medium">{highlight}</span>
                                                            {parts[1]}
                                                        </span>
                                                    );
                                                })()
                                            ) : (
                                                <span>{feature}</span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>

                        </div>

                        {/* Buttons */}
                        <div className="mt-8 space-y-3">
                            <button className="w-full h-[56px] text-[14px] border border-red-500 py-2 rounded-[8px] text-white hover:bg-red-500 transition">
                                Book A Call
                            </button>
                            <button className="w-full h-[56px] text-[14px] bg-red-500 py-2 rounded-[8px] text-black font-semibold hover:opacity-90 transition">
                                Click to buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceCard;
