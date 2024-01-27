import React from "react";
import photo from "../media/phototo.webp";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	BarChart,
	Bar,
	Cell,
} from "recharts";
import { most_view_post } from "../data/data";

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${
		y + height
	} ${x + width / 2},${y + height / 3}
	${x + width / 2}, ${y}
	C${x + width / 2},${y + height / 3} ${
		x + (2 * width) / 3
	},${y + height} ${x + width}, ${y + height}
	Z`;
};
const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props;

	return (
		<path
			d={getPath(x, y, width, height)}
			stroke="none"
			fill={fill}
		/>
	);
};
const colors = [
	"#0088FE",
	"#00C49F",
	"#FFBB28",
	"#FF8042",
	"red",
	"pink",
];

function Activities() {
	return (
		<div className=" pl-4 activities gap-3 p-7 h-full w-full">
			<div className=" row-span-5 rounded-sm bg-red-500">
				<h1 className="text-lg font-bold px-4">
					Pending post for review
				</h1>
				<div className="flex items-center py-2 justify-center px-3 gap-4">
					<p className="w-[74%] text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit.{" "}
					</p>
					<div className="flex items-center h-8 w-8 justify-center relative">
						<img
							src={photo}
							fill
							className="rounded-full  "
							alt=""
						/>
					</div>
				</div>
				<div className="flex items-center py-2 justify-center px-3 gap-4">
					<p className="w-[74%] text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit.{" "}
					</p>
					<div className="flex items-center h-8 w-8 justify-center relative">
						<img
							src={photo}
							fill
							className="rounded-full  "
							alt=""
						/>
					</div>
				</div>
				<div className="flex justify-between px-5 items-center">
					<p className="text-sky-600 text-lg font-semibold">
						these and 12 more
					</p>
					<button className="mr-8 px-4 py-2 font-bold bg-sky-600 bg-opacity-30 rounded-full">
						Review All
					</button>
				</div>
			</div>
			<div className="bg-zinc-400 row-span-5 "> helo </div>
			<div className="bg-green-400 row-span-5 "> helo </div>
			<div className="col-span-full flex">
				<div className=" items-center flex-col flex justify-center flex-1 w-full">
					<h1 className="text-white font-medium text-2xl py-4">
						Viewed Statictis
					</h1>
					<div className=" text-lg font-bold">
						<ResponsiveContainer
							width={660}
							height={390}
						>
							<LineChart
								data={most_view_post}
								height={180}
								width={600}
								margin={{
									left: 0,
								}}
							>
								<CartesianGrid />
								<XAxis dataKey="category" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line
									type="monotone"
									dataKey="number_of_viewers"
									stroke="red"
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div className="flex justify-center items-center flex-col h-full flex-1 w-full">
					<h1 className="text-white font-medium text-2xl py-4">
						Viewed Statictis
					</h1>
					<div className="text-[#fa0092] w-full text-lg font-bold ">
						<BarChart
							className="text-[#fa0092]"
							width={600}
							height={370}
							data={most_view_post}
							margin={{
								right: 60,
							}}
						>
							<CartesianGrid />
							<XAxis
								color="#fa009"
								dataKey="category"
							/>
							<YAxis />
							<Bar
								dataKey="number_of_viewers"
								style={{ color: "#fa009" }}
								shape={<TriangleBar />}
								label={{ position: "top" }}
							>
								{most_view_post.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={colors[index % 20]}
									/>
								))}
							</Bar>
						</BarChart>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Activities;
