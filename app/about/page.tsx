export default function About() {
    return (
        <div className="flex flex-col min-h-screen items-start justify-start mt-4 ml-16 mr-16">

            <h1 className="self-center text-3xl font-bold underline decoration-red-500 decoration-2 underline-offset-8 mb-8 "> About r/IGCSE</h1>

            <div className="flex w-full gap-16">
                <div className="flex flex-col gap-6 w-2/3">
                    <div className="bg-[#141417] border-t-4 border-red-500 p-4 rounded-lg">
                        <div className="flex items-center gap-1">
                            <img src="flag.png" className="w-16 h-16" />
                            <h1 className="text-2xl font-bold">Our Mission</h1>
                        </div>
                        <p className="mt-2 text-base text-white-500 text-left mr-6">
                            r/IGCSE caters to students around the globe, providing both IGCSE & AS/A Level notes, subject guides, study sessions, and more.
                            Our <a href="https://discord.gg/igcse" className="text-blue-300 underline decoration-white-300 underline-offset-4">Discord Server</a> is focused on providing subject-specific channels in which you or other students may ask our verified Subject Helpers for assistance.
                            <br />
                            <br />
                            We are completely student-run, and all resources displayed have been created by other IGCSE & AS/A Level students. r/IGCSE is free and will always remain free.
                        </p>
                    </div>

                    <div className="bg-[#141417] border-t-4 border-[#f7d2a5] p-4 rounded-lg">
                        <div className="flex items-center gap-1">
                            <img src="book1.png" className="w-16 h-16" />
                            <h1 className="text-2xl font-bold">Resource Repository</h1>
                        </div>
                        <p className="mt-2 text-base text-white-500 text-left mr-6">
                            r/IGCSE has over 40+ resources published by our wonderful server members. These resources are free to view on our <a href="/resources" className="text-blue-300 underline decoration-white-300 underline-offset-4">resource repository</a>.
                            <br />
                            <br />
                            If`` you find any mistakes within official r/IGCSE published resources, please do not hesitate to contact us through igcseresources.1@gmail.com.
                        </p>
                    </div>

                    <div className="bg-[#141417] border-t-4 border-blue-300 p-4 rounded-lg">
                        <div className="flex items-center gap-1">
                            <img src="team1.png" className="w-16 h-16" />
                            <h1 className="text-2xl font-bold decoration-blue-300 decoration-2 underline-offset-8">Opportunities</h1>
                        </div>
                        <p className="mt-2 text-base text-white-500 text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque corrupti ratione rem eius ipsam sapiente cupiditate vel facere magnam dolorem, id molestiae velit aperiam voluptas pariatur omnis illo harum.
                            <br />
                            <br />
                            <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, porro? Minus vero magnam vitae laudantium facere, officia voluptatem enim, nesciunt voluptatum repudiandae ipsa velit animi corporis ad adipisci expedita iste.
                        </p>
                    </div>
                </div>

                <div className="w-1/3 mt-2">
                    <div>
                        <ol className="relative border-s-2 border-red-500">
                            <li className="mb-10 ms-6">
                                <span className="bg-red-500 absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -inset-s-3 ring-8 ring-buffer ring-red-500"></span>
                                <p className="bg-neutral-secondary-medium text-heading text-base font-medium px-1.5 py-0.5 rounded">October 14th, 2009</p>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-heading my-2">r/IGCSE Subreddit</h3>
                                <p className="mb-4 text-body">The r/IGCSE official subreddit is created.</p>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="bg-red-500 absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -inset-s-3 ring-8 ring-buffer ring-red-500"></span>
                                <p className="bg-neutral-secondary-medium text-heading text-base font-medium px-1.5 py-0.5 rounded">May 10, 2019</p>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-heading my-2">r/IGCSE Discord Server</h3>
                                <p className="mb-4 text-body">The r/IGCSE official Discord Server is created, started by a small team of students alongside the founder 1337HP (nomitsune).</p>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="bg-red-500 absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -inset-s-3 ring-8 ring-buffer ring-red-500"></span>
                                <p className="bg-neutral-secondary-medium text-heading text-base font-medium px-1.5 py-0.5 rounded">June, 2021</p>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-heading my-2">Discord Partner Status</h3>
                                <p className="mb-4 text-body">Discord officially recognises our community and r/IGCSE becomes a Discord Partner.</p>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="bg-red-500 absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -inset-s-3 ring-8 ring-buffer ring-red-500"></span>
                                <p className="bg-neutral-secondary-medium text-heading text-base font-medium px-1.5 py-0.5 rounded">September 14, 2025</p>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-heading my-2">50,000 Server Members!</h3>
                                <p className="mb-4 text-body">The r/IGCSE Discord Server hits 50,000 server members!.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            

        </div>

    );
}