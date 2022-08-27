import React from 'react'
import { PieChart, Pie, Cell,Tooltip } from 'recharts';

const Doughunt = () => {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        
      ];
      const COLORS = ['#FFD233', '#FF49A0'];
  return (
    <>
    <PieChart width={800} height={400} >
    <Pie
      data={data}
      cx={220}
      cy={150}
      innerRadius={50}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={2}
      dataKey="value"
      
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
      <Tooltip />
    </Pie>
  </PieChart>
  </>
  )
}

export default Doughunt