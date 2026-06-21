export default function About() {
    return (
        <div className="flex flex-col min-h-screen items-start justify-start mt-4 ml-16 mr-16">

            <h1 className="self-center text-3xl font-bold underline decoration-red-500 decoration-2 underline-offset-8 mb-8 "> About r/IGCSE</h1>

            <div className="flex w-full gap-16">
                <div className="flex flex-col gap-6 w-2/3">
                    <div className="bg-[#141417] border-t-4 border-red-500 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                            <img src="logo.png" className="w-16 h-16" />
                            <h1 className="text-2xl font-bold underline decoration-red-500 decoration-2 underline-offset-8">Our Mission</h1>
                        </div>
                        <h2 className="text-sm italic text-gray-400 mt-1">Since 2019.</h2>
                        <p className="mt-2 text-base text-white-500 text-left">
                            r/IGCSE caters to students around the globe, providing both IGCSE & AS/A Level notes, subject guides, study sessions, and more.
                            Our <a href="https://discord.gg/igcse" className="underline decoration-white-300 underline-offset-4">Discord Server</a> is focused on providing subject-specific channels in which you or other students may ask our verified Subject Helpers for assistance.
                            <br />
                            <br />
                            We are completely student-run, and all resources displayed have been created by other IGCSE & AS/A Level students. r/IGCSE is free and will always remain free.
                        </p>
                    </div>

                    <div className="bg-[#141417] border-t-4 border-amber-500 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                            <img src="logo.png" className="w-16 h-16" />
                            <h1 className="text-2xl font-bold underline decoration-amber-500 decoration-2 underline-offset-8">Resource Repository</h1>
                        </div>
                        <h2 className="text-sm italic text-gray-400 mt-1">Since 2019.</h2>
                        <p className="mt-2 text-base text-white-500 text-left">
                            r/IGCSE caters to students around the globe, providing both IGCSE & AS/A Level notes, subject guides, study sessions, and more.
                            Our <a href="https://discord.gg/igcse" className="underline decoration-white-300 underline-offset-4">Discord Server</a> is focused on providing subject-specific channels in which you or other students may ask our verified Subject Helpers for assistance.
                            <br />
                            <br />
                            We are completely student-run, and all resources displayed have been created by other IGCSE & AS/A Level students. r/IGCSE is free and will always remain free.
                        </p>
                    </div>

                    <div className="bg-[#141417] border-t-4 border-red-500 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                            <img src="logo.png" className="w-16 h-16" />
                            <h1 className="text-2xl font-bold underline decoration-red-500 decoration-2 underline-offset-8">Our Mission</h1>
                        </div>
                        <h2 className="text-sm italic text-gray-400 mt-1">Since 2019.</h2>
                        <p className="mt-2 text-base text-white-500 text-left">
                            r/IGCSE caters to students around the globe, providing both IGCSE & AS/A Level notes, subject guides, study sessions, and more.
                            Our <a href="https://discord.gg/igcse" className="underline decoration-white-300 underline-offset-4">Discord Server</a> is focused on providing subject-specific channels in which you or other students may ask our verified Subject Helpers for assistance.
                            <br />
                            <br />
                            We are completely student-run, and all resources displayed have been created by other IGCSE & AS/A Level students. r/IGCSE is free and will always remain free.
                        </p>
                    </div>
                </div>

                <div className="w-1/3 self-start mt-2">
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
                        </ol>
                    </div>
                </div>
            </div>
            

        </div>

    );
}