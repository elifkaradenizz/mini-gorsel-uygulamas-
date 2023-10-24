import { useState } from "react";

function App() {

  const pictureIDs= [100,54,122,203,112]
  const [imageId, setImageId] = useState(200)
  const getLoremPicsumImg = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`

  function handleClick(id) {
    setImageId(id)
  }

  return (
    <main className="container">
      <hgroup>
        <h2>Mini Görsel Uygulaması</h2>
        <h3>Görsel:</h3>
      </hgroup>
      <img src={getLoremPicsumImg(imageId)} alt="" style={{ width: '100%' }} />
      <div class="grid">
        {
          pictureIDs.map((item, index) => <div key={index}>
            <img
              onClick={() => handleClick(item)}
              src={getLoremPicsumImg((item), 100, 100)}
              alt="" />
          </div>)
        }
      </div>
    </main>

  );
}


/*ESKİ YÖNTEM..
 {
   [...Array(5)].map((item, index) => <div key={index}>
     <img 
     onClick={() => handleClick(200 + index)}
     src={getLoremPicsumImg((200 + index), 100, 100)}
      alt="" />
  </div>)
 } */

export default App;
