import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

type CalorieProps = {
  date: string
  meal1?: number
  meal2?: number
  meal3?: number
  meal4?: number
  meal5?: number
}

export default function Calorie({date, meal1, meal2, meal3, meal4, meal5}: CalorieProps) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {date}
      </TableCell>
      <TableCell align="right">{meal1}</TableCell>
      <TableCell align="right">{meal2}</TableCell>
      <TableCell align="right">{meal3}</TableCell>
      <TableCell align="right">{meal4}</TableCell>
    </TableRow>
  )
}