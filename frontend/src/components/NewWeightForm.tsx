'use client'

import { Button, Stack, TextField, Typography } from "@mui/material";

import { createDailyWeight } from '@/actions/formActions'

export default function NewCalorieForm({ date }: {date: string}) {
  return (
    <Stack height="75lvh" justifyContent="center" alignItems="center" gap="32px">
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">1日のカロリーを入力</Typography>
      <Stack component="form" width={560} gap="24px" aria-labelledby="login_heading" action={createDailyWeight}>
        <input type="hidden" name="date" value={date} />
        <TextField id="outlined-basic" label="体重" variant="outlined" name="weight"  />
        <TextField id="outlined-basic" label="メモ" variant="outlined" name="memo"  />
        <Button variant="contained" type="submit">Submit</Button>
      </Stack>
    </Stack>
  )
}