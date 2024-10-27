import React from 'react'
var folks = [ 
    {name: "Bob", age: "32", occupation: "developer"}, 
    {name: "Bill", age: "17", occupation: "delinquent"}, 
    {name: "Bob", age: "40", occupation: "yes"} 
  ]
const DisplayDataIntable = () => {
  return (
    <div>
      <table border={2}>
        <thead>
        <tr>
            <th>name</th>
            <th>Age</th>
            <th>Occupation</th>
        </tr>
        </thead>
        <tbody>
            {folks.map((folk,index)=>(
                <tr key={index}>
                    <td>{folk.name}</td>
                    <td>{folk.age}</td>
                    <td>{folk.occupation}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayDataIntable
