import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Calorie from "@/components/Calorie"


type CaloriesListProps = {
  date: string
  calories: {
    meal1?: number
    meal2?: number
    meal3?: number
    meal4?: number
    meal5?: number
  }
}[]

export default function CaloriesList ({data} : {data: CaloriesListProps}) {
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>日付</th>
    //       <th>meal1</th>
    //       <th>meal2</th>
    //       <th>meal3</th>
    //       <th>meal4</th>
    //       <th>meal5</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((dailyCalorie, index) => (
    //       <Calorie key={index} date={dailyCalorie.date} {...dailyCalorie.calories} />
    //     ))}
    //   </tbody>
    // </table>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell align="right">MEAL&nbsp;1</TableCell>
            <TableCell align="right">MEAL&nbsp;2</TableCell>
            <TableCell align="right">MEAL&nbsp;3</TableCell>
            <TableCell align="right">MEAL&nbsp;4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dailyCalorie, index) => (
            <Calorie key={index} date={dailyCalorie.date} {...dailyCalorie.calories} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}