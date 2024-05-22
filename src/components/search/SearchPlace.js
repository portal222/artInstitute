import React from "react";
import SearchArt from "./SearchArt.js";
import SearchPage from "./SearchPage.js";

const SearchPlace = () => {

    return (

            <div className="placeSearchCM">
                <SearchPage placeholder={'Page - 10482'} linkTo={'/CMpage'} />
                <SearchArt placeholder={'Artworks'} linkTo={'/artistCM'} />
            </div>
    )

}
export default SearchPlace;