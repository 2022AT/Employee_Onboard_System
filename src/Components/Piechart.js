import React from 'react'
import Chart from 'react-apexcharts'
function Piechart() 
{
 
  return (
    <React.Fragment>
    <div className='container-fluid'>
    
    <Chart 
    
    type ="pie"
    width={500}
    height={300}

    series={[ 41 , 59]}

    options={{ 
      title: {
        text: "Employees Count Reoprt",
        style: { fontSize: 18 }
    },


    labels:['Female','Male']
    }}
    >
    </Chart>
    </div>
    </React.Fragment>
    
    
  )
}

export default Piechart ;