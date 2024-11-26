const ImpactSection = () => {
    return (
        <div className="p-4 max-w-7xl m-auto">
            <p className="text-center mb-10 w-full tracking-wide  md:w-2/3 md:mx-auto">
            &quot;DeepTrack protects Africa&apos;s businesses, media,
                and governments from deepfake threats with cutting-edge AI,
                safeguarding truth, reputation, and informed decisions.&quot;
            </p>
            <div className="p-7 rounded-3xl flex justify-between border border-white bg-custom-gradient text-black grid lg:grid-cols-3 sm:grid-col-1 md:grid-cols-3 gap-4  ">
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