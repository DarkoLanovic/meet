import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const colors = ['#FFC60A', '#7C9BB6', '#7BB79D', '#4281A4', '#DE5456'];
  useEffect(() => { setData(() => getData());}, [events]);

  const getData = () => {
    const genres = ['JavaScript', 'jQuery', 'Node', 'React', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value: value };
    });
    return data;
  };


  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          innerRadius={20}
          dataKey="value"
          fill="#8884d8"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          >
          {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
        </Pie>
        <Legend layout="horizontal" verticalAlign="top" align="center" height={45} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;