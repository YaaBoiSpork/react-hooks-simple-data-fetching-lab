import React, { useState, useEffect } from "react";

function App(){
    const [puppo, setPuppo] = useState(null);

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setPuppo(data.message)
            });
    }, []);
        
    if (!puppo) return <p>Loading...</p>;

    return <img src={puppo} alt="A Random Dog"  />
}

export default App;