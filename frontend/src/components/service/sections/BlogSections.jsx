import BlogsCard from "../components/BlogsCard"

const BlogSections = () => {
    return (
        // Added horizontal padding for mobile
        <div className="flex flex-col items-center px-6">
            <div className="text-center">
                <p className="text-sm text-red-500 font-medium tracking-wide mb-2">BLOGS</p>
                {/* Added intermediate font size for smoother responsiveness */}
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold text-white mb-[15px]">News & Articles</h2>
                {/* Reduced bottom margin on smaller screens */}
                <p className="text-gray-300 text-sm md:text-base mb-16 md:mb-[110px]">Best Articles to get started</p>
            </div>
            {/* Wrapper to ensure the card component is centered */}
            <div className="w-full flex justify-center">
                <BlogsCard />
            </div>
            {/* Reduced vertical margin on smaller screens */}
            <div className="my-16 md:my-[92px]">
                {/* Made button padding responsive */}
                <button className="text-[14px] py-4 px-12 md:py-[26px] md:px-[67px] border border-red-500 rounded-[8px] text-white hover:bg-red-500 transition">
                    Read More
                </button>
            </div>
        </div>
    )
}

export default BlogSections