import { useEffect, useState } from "react";

const App = () => {

    const [reactions, setReactions] = useState({
      likes: 0,
      dislikes: 0
    });

    const [log, setLog]=useState([]);
    console.log(log);

    const handleLike = ()=> {
      setReactions({
        ...reactions, 
        likes: reactions.likes + 1
      });
      setLog([...log, 'Like']);
    }

    const handleDislike = ()=> {
      setReactions({
        ...reactions, 
        dislikes: reactions.dislikes + 1
      });
      setLog([...log, 'Dislike'])
    }

    useEffect(()=>{
      console.log('This will run only once when the component renders for the first time');
    }, []);

    useEffect(()=>{
      console.log('This will run when the component renders and for any state changes and all the re-renders');
    });

    useEffect(()=>{
      console.log('This will run when the component renders and on every state change of "Like" state')
    }, [reactions.likes]);



    return (
        <div>
          <button onClick={handleLike}><span className="material-symbols-outlined">
            thumb_up
          </span>{reactions.likes}</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={handleDislike}><span className="material-symbols-outlined">
            thumb_down
          </span>{reactions.dislikes}</button>
          <br/>
          <br/>
          <div>
            {/* {log.join(', ')} */}
            <ul>
            {
              log.map((reactions, index)=><li key={index}>{reactions}</li>)
            }
            </ul>
          </div>
        </div>
    )
}

export default App;