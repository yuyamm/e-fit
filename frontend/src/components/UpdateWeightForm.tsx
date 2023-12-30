'use client'

import { Button, Stack, TextField, Typography } from "@mui/material";

import { updateDailyWeight, deleteDailyWeight } from '@/actions/formActions'

type UpdateWeightFormProps = {
  id: number
  date: string
  weight: number
  memo?: string
}

export default function UpdateWeightForm({ id, date, weight, memo }: UpdateWeightFormProps) {
  return (
    <Stack height="75vh" justifyContent="center" alignItems="center" gap="32px">
      <Typography variant="h1" fontSize="1.5rem">1日のカロリーを入力</Typography>
      <Stack component="form" width={560} gap="24px" action={updateDailyWeight}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="date" value={date} />
        <TextField label="体重" variant="outlined" name="weight" defaultValue={weight} />
        <TextField label="メモ" variant="outlined" name="memo" defaultValue={memo} />
        <Button variant="contained" type="submit">Submit</Button>
      </Stack>
      <Stack width={560} gap="24px">
        <Button variant="contained" color="warning" onClick={async () => {
          await deleteDailyWeight(id)
        }}>Delete</Button>
      </Stack>
    </Stack>
  )
}