import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link'

type WeightProps = {
  id?: number
  date: string
  weight: number
  memo?: string
}

export default function Weight({id, date, weight, memo}: WeightProps) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
      { id ? (<Link href={`/management/weights/${id}?date=${date}`}>{date}</Link>) : <Link href={`/management/weights?date=${date}`}>{date}</Link>}
      </TableCell>
      <TableCell align="right">{weight} kg</TableCell>
      <TableCell align="right">{memo}</TableCell>
    </TableRow>
  )
}