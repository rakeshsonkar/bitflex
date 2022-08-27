import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const DashboardBarChart = () => {
  const data = [
    {
      name: 'Page A',
      WebsiteVister: 4000,
      MobileVister: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      WebsiteVister: 3000,
      MobileVister: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      WebsiteVister: 2000,
      MobileVister: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      WebsiteVister: 2780,
      MobileVister: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      WebsiteVister: 1890,
      MobileVister: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      WebsiteVister: 2390,
      MobileVister: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      WebsiteVister: 3490,
      MobileVister: 4300,
      amt: 2100,
    },
    {
      name: 'Page E',
      WebsiteVister: 1890,
      MobileVister: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      WebsiteVister: 2390,
      MobileVister: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      WebsiteVister: 3490,
      MobileVister: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
    <ResponsiveContainer width="100%" height="80%" className={'bg-info '}>
      <BarChart
        width={500}
        height={600}
        data={data}
        margin={{
          top: 40,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="WebsiteVister" fill="#85F4FA" />
        <Bar dataKey="MobileVister" fill="#FF49A0" />
      </BarChart>
    </ResponsiveContainer>
    </>
  )
}

export default DashboardBarChart