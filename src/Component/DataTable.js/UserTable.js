import React, { useEffect, useState } from 'react'
import DataTable , { createTheme } from 'react-data-table-component';
import "./Datatable.css";

const UserTable = () => {
  const data = [
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    },
    {
      users: "#10099",
      activeUser: 1152542,
      dropUsers: 'Alex senthil',
      graphs: '$5000',
      dateRange: '28 Aug 2022',
      netWorth: '$12000',
      byChannel: '$12000'
    }
  ];
  const [search, setsearch] = useState('');
  const [searchFilter, setsearchFilter] = useState([]);
  const [getApi,setApi]=useState([]);
  useEffect(() => {
    setApi(data)
    setsearchFilter(data)
  },[]);
  useEffect(()=>{
    const result=getApi.filter(d=>{
      return d.dropUsers.toLowerCase().match(search.toLowerCase());
    });
    setsearchFilter(result);
  },[search]);

  const colunms = [
    {
      name: "Total num. of users",
      selector: (row) => row.users,
      sortable:true

    },
    {
      name: "Active users",
      selector: (row) => row.activeUser,
      sortable:true
    },
    {
      name: "Users drop off ",
      selector: (row) => row.dropUsers,
      sortable:true
    },
    {
      name: "Graphs",
      selector: (row) => row.graphs,
      sortable:true
    },
    {
      name: "By date range",
      selector: (row) => row.dateRange,
      sortable:true
    },
    {
      name: "By net worth",
      selector: (row) => row.netWorth,
      sortable:true
    },
    {
      name: "User by channel",
      selector: (row) => row.byChannel,
      sortable:true
    }
  ];


createTheme('dark', {
  background: {
    default: 'transparent',
  },
});
 

  return (
  <div className='changesdata'>

  <DataTable columns={colunms} 
  data={data} 
  pagination
   fixedHeader 
   fixedHeaderScrollHeight='500px'
    selectableRowsHighlight
    highlightOnHover
    subHeader
    subHeaderComponent = {
      <input type='text' placeholder='search ...' value={search} onChange={(e)=>setsearch(e.target.value)}/>
    }
    subHeaderAlign="left" 
    theme="solarized"
    />
    </div>
    );
}

export default UserTable