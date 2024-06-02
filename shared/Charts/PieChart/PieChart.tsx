'use client';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

interface Props {
    data: any,
    colors: any

}

const PieChartComponent = ({ data, colors }: Props) => {
    return (
        <ResponsiveContainer  >
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={130}
                    fill="#8884d8"
                    paddingAngle={10}
                    dataKey="value"
                >
                    {data.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                    <Label content={<CustomLabel />} position="center" />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartComponent;


const CustomLabel = ({ viewBox }: any) => {
    const { cx, cy } = viewBox;
    return (
        <g>
            <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central">
                <tspan x={cx} dy="-1.2em" fontSize="16" fontWeight="normal">Total Earnings</tspan>
                <tspan x={cx} dy="1.2em" fontSize="16" fontWeight="bold">$0.00</tspan>
            </text>
        </g>
    );
};