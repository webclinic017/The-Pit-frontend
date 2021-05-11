import { Spinner, Flex } from '@chakra-ui/react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts';
import { format, parseISO } from 'date-fns';

// const data = [];
// for (let num = 30; num >= 0; num--) {
// 	data.push({
// 		date: subDays(new Date(), num).toISOString().substr(0, 10),
// 		value: 1 + Math.random()
// 	});
// }

export function MainChart({ data }) {
	if (data.length === 0) {
		return (
			<Flex h="500px" justifyContent="center" alignItems="center">
				<Spinner thickness="4px" speed="0.65s" emptyColor="gray.400" color="#2B3D22" size="xl" />
			</Flex>
		);
	}
	return (
		<ResponsiveContainer width="95%" height={500}>
			<AreaChart data={data}>
				<defs>
					<linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
						<stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
					</linearGradient>
				</defs>
				<defs>
					<linearGradient id="open" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#b75324" stopOpacity={0.4} />
						<stop offset="75%" stopColor="#b75324" stopOpacity={0.05} />
					</linearGradient>
				</defs>
				<Area dataKey="c" stroke="#2451b7" fill="url(#color)" />
				<Area dataKey="o" stroke="#b75324" fill="url(#open)" />
				<XAxis
					dataKey="createdAt"
					axisLine={false}
					tickLine={false}
					tickFormatter={(str) => {
						const date = parseISO(str);
						if (date.getDate() % 7 === 0) {
							return format(date, 'MMM, d');
						}
						return '';
					}}
				/>
				<YAxis
					datakey="c"
					axisLine={false}
					tickLine={false}
					tickCount={8}
					type="number"
					domain={[ 'dataMin', 'dataMax' ]}
					allowDecimals={true}
					scale="auto"
					orientation="right"
					tickFormatter={(number) => `${number.toFixed(4)}`}
				/>
				<Tooltip content={<CustomTooltip data={data} />} />
				<CartesianGrid opacity={0.1} vertical={false} horizontal={false} />
			</AreaChart>
		</ResponsiveContainer>
	);
}

function CustomTooltip({ active, payload, label, data }) {
	if (active) {
		return (
			<div className="tooltip">
				<h4>{format(parseISO(label), 'eeee, d MMM, yyyy')}</h4>
				<p>{data[0].pair}</p>
			</div>
		);
	}
	return null;
}
