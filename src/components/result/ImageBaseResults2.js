import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import GlobalContext from "../GlobalContext";
import Loader from "../Loader";
import ImageArtworks from "./ImageArtworks";
import SearchPlace from "../search/SearchPlace";
import PaginationCM from "./PaginationCM";
import { Box, Pagination } from "@mui/material";

const ImageBaseResults2 = () => {

    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [page, setPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;



    console.log("ime pretraga", searchStringValue)

    useEffect(() => {
        getImage(searchStringValue);
    }, [])

    const getImage = async (searchStringValue) => {
        const url = `https://api.artic.edu/api/v1/artworks/search?q=${searchStringValue}&page=1&limit=100`;

        try {
            const response = await axios.get(url)


            const data = response.data;

            console.log("pretraga CM muzej", data);
            console.log("pagination CM", data.pagination);

            setData(data.data);

            setPage(data.pagination);
            setIsLoading(false);



        } catch (err) {
            setError(err);
        }
    };

    const pageSize = 7;
    const paginatedPosts = PaginationCM(data, pageSize);
    const currentPosts = paginatedPosts[currentPage - 1];

    if (isLoading) {
        return (
            <div className="main">

                <div className="home">
     
                    <Loader />
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="main">
                <div className="home">
                    <SearchPlace />
                </div>
            </div>

            <Box>

                {paginatedPosts.length > 1 && (
                    <Box mt={2} display="flex" justifyContent="center">
                        <Pagination
                            count={paginatedPosts.length}
                            page={currentPage}
                            onChange={(_, newPage) => setCurrentPage(newPage)}
                        />
                    </Box>
                )}
                {currentPosts &&
                    currentPosts.map((post) => (
                        <div className="main"
                            key={post.id}>

                            <ImageArtworks key={post.id} imgId={post.id} />

                        </div>
                    ))}
                {paginatedPosts.length > 1 && (
                    <Box mt={2} display="flex" justifyContent="center">
                        <Pagination
                            count={paginatedPosts.length}
                            page={currentPage}
                            onChange={(_, newPage) => setCurrentPage(newPage)}
                        />
                    </Box>
                )}
            </Box>
        </>

    )

}
export default ImageBaseResults2;