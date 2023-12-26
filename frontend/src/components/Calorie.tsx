import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link'

type CalorieProps = {
  id?: number
  date: string
  meal1?: number
  meal2?: number
  meal3?: number
  meal4?: number
  meal5?: number
}

export default function Calorie({id, date, meal1, meal2, meal3, meal4, meal5}: CalorieProps) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
      { id ? (<Link href={`/management/calories/${id}?date=${date}`}>{date}</Link>) : <Link href={`/management/calories?date=${date}`}>{date}</Link>}
      </TableCell>
      <TableCell align="right">{meal1}</TableCell>
      <TableCell align="right">{meal2}</TableCell>
      <TableCell align="right">{meal3}</TableCell>
      <TableCell align="right">{meal4}</TableCell>
      <TableCell align="right">{meal5}</TableCell>
    </TableRow>
  )
}