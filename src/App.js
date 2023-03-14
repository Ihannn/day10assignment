import DemoComponent from "./Components/DemoComponent";
import FormComponent from "./Components/FormComponent";
import TableComponent from "./Components/TableComponent";
import './styles/App.css'
import { useState, useEffect } from 'react' 


function App() {
  const [dataList, setDataList] = useState([])
  const [EditIdx, setEditIdx] = useState(-1)
  useEffect(() => {
   
  }, [dataList])

  console.log(EditIdx)

  return (
    <div className="App">
      <DemoComponent/>
      <FormComponent setDataList={setDataList} dataList={dataList} EditIdx={EditIdx}
      setEditIdx={setEditIdx}/>
      <TableComponent setDataList={setDataList} dataList= {dataList} EditIdx={setEditIdx}/>
    </div>
  );
}

export default App;

// component harus .jsx
