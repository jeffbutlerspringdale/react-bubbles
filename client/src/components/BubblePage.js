import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


// class BubblePage extends React.Component {
//   state = {
//     setColorList: []
//   }

//   componentDidMount() {
//     this.getData();
// }

//   getData = () => {
//     axiosWithAuth()
//       .get('http://localhost:5000/api/colors')
//       .then(res => {
//         console.log('in colors list', res.data)
//         this.setState({
//           setColorList: res.data
//         });
//       })
//       .catch(err => console.log(err.response));
//   };
//   render() {
//     return (
//       <div>
//         <ColorList colors={colorList} updateColors={setColorList} />
//         <Bubbles colors={colorList} />
//       </div>
//     );
//   };
// }

//   export default BubblePage;

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

useEffect( () => {
  axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(res => {
      console.log('in colors list', res.data)
        setColorList(res.data)
    })
    .catch(err => console.log(err.response));
}, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

  export default BubblePage;
