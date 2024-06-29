import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/Loader/MyLoader";
import { Post } from "./Posts";


const PostIdPage: React.FC = () => {

const params = useParams()
const [post, setPost] = useState<Post>();
const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
})
useEffect(() => {
    fetchPostById(params.id)
}, [])

    return (
          <div>
           <h1>Sie haben den Beitrag {isLoading ? `mit der ID ${params.id}` : ""} geöffnet.</h1>
            {isLoading
                ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><MyLoader/></div>
                // idk how to do it better.
                // if i do without questionmark ts will be not happy because post must have id, title and body
                // but if i do post checking instead of isLoading then i dont use my custom hook how it should be
                // but then the logic inside that hook isnt nessacery but in other cases the logic is top notch
                :  <div>{post?.id}. {post?.title}</div>
            }
        </div>
    )
};

export default PostIdPage;