import React from 'react'
import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import Piechart from './Piechart';
const  Barchart = () => {
    const [chartData, setChartData] = useState()
    const [categoryData, setCategoryData] = useState()
    const [yearMonth, setYearMonth] = useState()

    useEffect(() => {
        console.log(yearMonth,"asdfas")
        if (yearMonth === 'year') {
            setCategoryData(["2017", "2018", "2019", "2020", "2021", "2022"])
            setChartData([80, 60, 100, 120, 140, 110])

        } else {
            setCategoryData(["Jan", "Feb", "March", "April", "May", "June","july","Aug","Sept","Oct","Nov","Dec"])
            setChartData([6, 4, 7, 5, 4,6,8,4,8,4,7,10])
        }
    },[yearMonth])

    const onChangeData = (e) => {
        setYearMonth(e.target.value) 
    }
    return (
        <div className='container-fluid  p-5'>
            <div className="row">
                <div className='col-md-6'>
                    <h3 className='text-center mt-3 mb-3'>Bar Charts</h3>
                    <div>
                        <input onClick={onChangeData} type="radio" name="picked" value="year"/> Yearly
                        <br></br>
                        <input onClick={onChangeData} type="radio" name="picked" value="month"/> Monthly

                    </div>
                    
                    <Chart
                        type="bar"
                        width={500}
                        height={400}

                        series={[{name: "", data: chartData}]}
                        options={{
                            title: {
                                text: "",
                                style: { fontSize: 18 }
                            },
                            colors: ["#A569BD"],
                            theme: { mode: 'light' },
                            xaxis: {
                                categories: categoryData,
                                title: {
                                    text:yearMonth,
                                    style: { color: "#FF0000", fontSize: 20 }
                                }
                            },
                            yaxis: {
                                labels: {
                                    style: {
                                        fontSize: '15',
                                    }
                                },
                                title: {
                                    text: "(No. Of Employees)",
                                    style: { color: "#FF0000", fontSize: 20 }
                                }
                            },
                            legend: {
                                show: true,
                                position: "left",
                            }
                        }
                    }
                >
                    </Chart>
                </div>
                <div className='col-md-6 p-5'>
                        <h3 className='text-center mt-4 ms-2'>Employee Ratio</h3>
                        <Piechart />
                    </div>
                    </div>
                </div>
    )
}
export default Barchart;
