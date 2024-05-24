import React from "react";
import SearchArt from "./SearchArt.js";
import SearchPages from "./SearchPages.js";

const SearchPlace2 = () => {

    return (

            <div className="search">
                <SearchPages placeholder={'Page - 10482'} linkTo={'/CMpage2'} />
                <SearchArt placeholder={'Artworks'} linkTo={'/artistCM2'} />
            </div>
    )

}
export default SearchPlace2;