import React from "react";

function Search() {
    return (
        <div className="my-3 md:mt-0 md:w-[40%]">
            <span className="hidden uppercase md:inline"> Search: </span>{" "}
            <input
                className="h-[35px] w-[100%] rounded-[5px] text-[16px] md:w-[80%]"
                placeholder="Search here..."
                type="text"
            />
        </div>
    );
}

export default Search;
