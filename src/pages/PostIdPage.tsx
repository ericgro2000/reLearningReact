import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/Loader/MyLoader";
import { Post } from "./Posts";

interface FullPost extends Post {
    postId: number;
    name: string;
    email: string;
  }

const PostIdPage: React.FC = () => {

const params = useParams()
const [post, setPost] = useState<Post>();
const [comments, setComments] = useState<FullPost[]>([]);

const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
})

const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data);
})

useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
}, [])

    return (
          <div>
           <h1>Sie haben den Beitrag {isLoading ? `mit der ID ${params.id}` : ""} geöffnet.</h1>
            {isLoading
                ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><MyLoader/></div>
                // let us do not remember that there was any previous comments here before that comment(i was really tired and didnt think the problem throught)
                :  <div>{post?.id}. {post?.title}</div>
            }
            <h1>
            Kommentare
            </h1>
            {isComLoading
                ? <MyLoader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
};

export default PostIdPage;