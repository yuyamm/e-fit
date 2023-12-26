import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Weight from "@/components/Weight"

type WeightsListProps = {
  id: number
  date: string
  weight: number
  memo?: string
}[]

export default function WeightsList ({data} : {data: WeightsListProps}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell align="right">体重</TableCell>
            <TableCell align="right">メモ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dailyWeight, index) => (
            <Weight key={index} {...dailyWeight} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}