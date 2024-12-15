import Like from "./components/Like";
import Dislike from "./components/Dislike";
import { useCallback, useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onlike =(like)=>{
    setLikes(like)
  }

  const onDislike = (dislike)=>{
    setDislikes(dislike)
  }




    console.log('Rendering App...');

    return (
        <div>
            <h1>Reactions: {likes + dislikes}</h1>
            <Like 
            onLike = {onlike}
            />
            <Dislike
            onDislike = {onDislike}
             />
        </div>
    )
}

export default App;