const BuiltForSection = () => {
    return (
        <section className="py-10 md:w-3/4 md:mx-auto p-4">
            <h2 className="text-center font-extrabold lg:text-4xl sm:text-2xl mb-20">Designed for Africa. Built for the World.</h2>
            <div className="flex gap-10 justify-center flex-wrap">
                <div className="w-96 h-80 border rounded-lg flex items-center justify-center flex-col gap-4 p-10">
                    <h3 className="font-bold text-xl text-center">Localized Language Detection</h3>
                    <p className="text-sm text-gray-400 text-center">Built to recognize and analyse African languages and accents.</p>
                </div>
                <div className="w-96 h-80 border rounded-lg flex items-center justify-center flex-col gap-4 p-10">
                    <h3 className="font-bold text-xl text-center">Regulatory Alignment</h3>
                    <p className="text-sm text-gray-400 text-center">GDPR, CCPA, and regional compliance ready.</p>
                </div>
                <div className="w-96 h-80 border rounded-lg flex items-center justify-center flex-col gap-4 p-10">
                    <h3 className="font-bold text-xl text-center">Scalable for Any Business</h3>
                    <p className="text-sm text-gray-400 text-center">From startups to governments, our tools fit youe needs.</p>
                </div>
            </div>
        </section>
    )
}

export default BuiltForSection;