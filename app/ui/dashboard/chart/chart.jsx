"use client";

import styles from './chart.module.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  { name: 'Mon', visit: 200, click: 1398 },
  { name: 'Tue', visit: 300, click: 1200 },
  { name: 'Wed', visit: 400, click: 1600 },
  { name: 'Thu', visit: 250, click: 1100 },
  { name: 'Fri', visit: 500, click: 2000 },
  { name: 'Sat', visit: 450, click: 1700 },
  { name: 'Sun', visit: 380, click: 1500 }
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Records</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> Removed */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
