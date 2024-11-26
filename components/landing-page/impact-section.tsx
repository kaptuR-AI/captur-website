const ImpactSection = () => {
    return (
        <div className="py-10">
            <p className="text-center mb-10 w-full md:w-2/3 md:mx-auto">
                "CaptuR protects Africa&apos;s businesses, media,
                and governments from deepfake threats with cutting-edge AI,
                safeguarding truth, reputation, and informed decisions."
            </p>
            <div className="p-7 rounded-3xl flex justify-between border border-white bg-custom-gradient text-black">
                <div className="text-center">
                    <h2 className="font-extrabold text-6xl">85%+</h2>
                    <p className="text-sm">Organizations Vulnerable to deepfake</p>
                </div>
                <div className="text-center">
                    <h2 className="font-extrabold text-6xl">$250M</h2>
                    <p className="text-sm">Estimated Global loss 2024</p>
                </div>
                <div className="text-center">
                    <h2 className="font-extrabold text-6xl">75%</h2>
                    <p className="text-sm">African organization report misinformation & Scam</p>
                </div>
            </div>
        </div>
    )
}

export default ImpactSection;