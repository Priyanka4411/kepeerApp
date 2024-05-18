import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;








// import React from "react";
// import Header from "./Header";
// import Note from "./Note";
// import Footer from "./Footer";
// import notes from "../notes";

// function App1(){
//     return(
//         <>
//             <Header/>
//             {
//                 notes.map((ele)=>
//                             <Note
//                                 key={ele.id}
//                                 tit={ele.title}
//                                 des={ele.content}
//                             />
//                 )
//             }
//             <Footer/>
//         </>
//     )
// }

// export default App1;


