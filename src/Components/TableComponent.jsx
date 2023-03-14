import '../styles/TableComponent.css'

const DemoComponent3 = ({setDataList, dataList, EditIdx}) => {
    let array = dataList
    console.log(dataList)

    function deleteData(index) {
        setDataList(dataList.filter((data, i) => i !== index))
    }

    function editData(index) {
        EditIdx(index)
    }

    return (
        <div>
            <table className="form-table">
                
                <tr>
                    <td className='small-column'>No</td>
                    <td className='big-column'>Name</td>
                    <td className='small-column'>Age</td>
                    <td className='big-column'>Status</td>
                    <td className='big-column'></td>
                </tr>
            
            
                {array.map((array, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{array.name}</td>
                        <td>{array.age}</td>
                        <td>{array.status}</td>
                        <td id='edit-box'>
                            <button onClick={(data) => deleteData(index)}>Delete</button>
                            <button onClick={(data) => editData(index)}>Edit</button>
                        </td>
                    </tr>
                ))}
                
            </table>
        </div>
    )

}

export default DemoComponent3