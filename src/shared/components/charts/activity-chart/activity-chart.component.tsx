import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, CurveProps } from "recharts";

const ActivityChartComponent = () => {
  const data: {name: string, value: number, task: string | null}[] = [
    {name: 'S', value: 1, task: null},
    {name: 'M', value: 2, task: '2Task'},
    {name: 'T', value: 1.5, task: "3 task"},
    {name: 'W', value: 2.5, task: null},
    {name: 'T', value: 2, task: null},
    {name: 'F', value: 2.5, task: null},
    {name: 'S', value: 1.5, task: null}
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid vertical={true} horizontal={false} stroke="#ccc" />
        <XAxis dataKey={'name'} />
        <YAxis tickLine={false} axisLine={false} tickMargin={20} domain={[1, 3]} allowDecimals={false} tickFormatter={(tick) => Number.isInteger(tick)? tick : ''} />
        {/* TODO */}
        {/* <Tooltip  active={true} content={<CustomeTooltip payload={data.find((data) => data.task)}/>} /> */}
        <Line type="monotone" dataKey={'value'} stroke='#000' strokeWidth={3} dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

const CustomeTooltip = ({payload} : {payload: any}) => {

  if(payload && payload[0]?.payload.task){
    return (
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        padding: '5px',
      }}>
        <p>{`${payload[0]?.payload.task}`}</p>
      </div>
    );
  }

  return null;
}

export default ActivityChartComponent;