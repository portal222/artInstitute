import React from "react";
import SearchPlace from "./search/SearchPlace";
import ImageBaseHome from "./result/ImageBaseHome";



const Home = () => {


    return (
        <>
            <div className="main">
                <p className="homePage">
                    Welcome to <br></br>
                    The Art Institute Of Chicago. </p>
                 <p className="homePage2">  You can search museum by artist, artwork title,
                  <br></br>
                   place of origin, medium, year... <br></br>
                   For best results use " ".
                </p>
            </div>
            <ImageBaseHome />


        </>
    )

}
export default Home;