import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

/*
  Convert these multi day assignments into the amount of minutes that occured each day
  For example, if 2 assignments had the same day in them, they would be added together.
  You do not need to worry about crossing months, just focus on these 5 days.
  You do not need to change the graph at all - just update the calulateResult function
 */

function calulateResult(assignments) {
  console.log(assignments)
  const exampleResult = [
    { date: "20200101", minutes: 200 },
    { date: "20200102", minutes: 200 },
    { date: "20200103", minutes: 300 },
    { date: "20200104", minutes: 200 },
    { date: "20200105", minutes: 100 },
  ] 

  return exampleResult
}

function Graph() {

  const assignments = [
    {id: 1, start_date: "20200102", end_date: "20200103", minutes_per_day: 100 },
    {id: 2, start_date: "20200101", end_date: "20200105", minutes_per_day: 100 },
    {id: 3, start_date: "20200103", end_date: "20200104", minutes_per_day: 100 },
    {id: 4, start_date: "20200101", end_date: "20200101", minutes_per_day: 100 },
  ]

  const result = calulateResult(assignments)

  return (
    <AreaChart
      width={500}
      height={200}
      data={result}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="minutes" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  )
}

export default Graph
