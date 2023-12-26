'use client'

import { Button, Stack, TextField, Typography } from "@mui/material";

import { updateDailyWeight } from '@/actions/formActions'

type UpdateWeightFormProps = {
  id: number
  date: string
  weight: number
  memo?: string
}

export default function UpdateWeightForm({ id, date, weight, memo }: UpdateWeightFormProps) {
  return (
    <Stack height="75lvh" justifyContent="center" alignItems="center" gap="32px">
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">1日のカロリーを入力</Typography>
      <Stack component="form" width={560} gap="24px" aria-labelledby="login_heading" action={updateDailyWeight}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="date" value={date} />
        <TextField id="outlined-basic" label="体重" variant="outlined" name="weight" defaultValue={weight} />
        <TextField id="outlined-basic" label="メモ" variant="outlined" name="memo" defaultValue={memo} />
        <Button variant="contained" type="submit">Submit</Button>
      </Stack>
      {/* <Stack width={560} gap="24px" aria-labelledby="login_heading">
        <Button variant="contained" color="warning" onClick={async () => {
          await deleteDailyWeight(id)
        }}>Delete</Button>
      </Stack> */}
    </Stack>
  )
}