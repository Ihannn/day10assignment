import '../styles/FormComponent.css'
import { useState, useEffect } from 'react' 

const DemoComponent2 = ({setDataList, dataList, EditIdx, setEditIdx}) => {
    
    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        status: 'Active',
    },)

    function addNewData() {
        if(EditIdx >= 0) { // edit data
            dataList[EditIdx].name = inputData.name
            dataList[EditIdx].age = inputData.age
            dataList[EditIdx].status = inputData.status
            setEditIdx(-1)
        }
        else { // add data
            setDataList([...dataList, inputData])
            // console.log(dataList)
        }
    }

    return (
        <div>
            <form>
                <div className="input-box">
                    <p>Name</p>
                    <input type="text" name="name" value={inputData.name} onChange={(e) => setInputData({...inputData, name: e.target.value})} required/>
                </div>
                <div className="input-box">
                    <p>Age</p>
                    <input type="number" name="age" value={inputData.age} onChange={(e) => setInputData({...inputData, age: e.target.value})} required/>
                </div>
                <div className="input-box">
                    <p>Status</p>
                    <select name="status" value={inputData.status} onChange={(e) => setInputData({...inputData, status: e.target.value})} required>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <button className='submit-button' type='button' onClick={addNewData}>Submit</button>
            </form>
        </div>
    )
}

export default DemoComponent2