import { Link } from '@inertiajs/react';

export default function ClientsSuccessStories({ aboutData }) {
    return (
        <section className="bg-light-2/50 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-4">
                        Client <span className="text-transparent bg-clip-text bg-primary-1 ">Success Stories</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary-1 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-dark-1/70 border border-dark-3 rounded-xl p-6 shadow-lg hover:shadow-primary-1/10 hover:-translate-y-3 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-1/50">
                                    <img
                                        src={`/assets/images/boy.jpg`}
                                        alt={`Client ${item}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://via.placeholder.com/150?text=Client+${item}`;
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-light-1 font-bold">Client Name {item}</h4>
                                    <p className="text-light-2/70 text-sm">Industry {item}</p>
                                </div>
                            </div>
                            <p className="text-light-2/90 italic">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            </p>
                            <div className="mt-4 pt-4 border-t border-dark-3 text-sm">
                                <div className="text-primary-1 font-medium">+250% ROI</div>
                                <div className="text-light-2/70">Increased conversion rates</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}