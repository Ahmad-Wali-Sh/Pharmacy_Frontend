import React from "react"
import Header from "./Header"
import Navbar from "./Navbar/Navbar"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



export default function Home() {
    const data = [
        { name: 'Day 1', uv: 300, pv: 2400, amt: 200 },
        { name: 'Day 2', uv: 210, pv: 2400, amt: 400 },
        { name: 'Day 3', uv: 400, pv: 2400, amt: 400 },
        { name: 'Day 4', uv: 500, pv: 2400, amt: 400 },
        { name: 'Day 5', uv: 350, pv: 2400, amt: 400 },
        { name: 'Day 6', uv: 400, pv: 2400, amt: 400 },
        { name: 'Day 7', uv: 200, pv: 2400, amt: 400 },
    ];

    return (
        <div>
            <Header />
            <Navbar />
            <div className="graph">
                <h4 className="graph-label">Customer Attendence</h4>
                <LineChart width={800} height={400} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}