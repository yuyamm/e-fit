'use client'

import { Button, Stack, TextField, Typography } from "@mui/material";

import { createDailyCalorie } from '@/actions/formActions'

export default function NewCalorieForm({ date }: {date: string}) {
  return (
    <Stack height="75lvh" justifyContent="center" alignItems="center" gap="32px">
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">1日のカロリーを入力</Typography>
      <Stack component="form" width={560} gap="24px" aria-labelledby="login_heading" action={createDailyCalorie}>
        <input type="hidden" name="date" value={date} />
        <TextField id="outlined-basic" label="MEAL1" variant="outlined" name="meal1"  />
        <TextField id="outlined-basic" label="MEAL2" variant="outlined" name="meal2"  />
        <TextField id="outlined-basic" label="MEAL3" variant="outlined" name="meal3"  />
        <TextField id="outlined-basic" label="MEAL4" variant="outlined" name="meal4"  />
        <TextField id="outlined-basic" label="MEAL5" variant="outlined" name="meal5"  />
        <Button variant="contained" type="submit">Submit</Button>
      </Stack>
    </Stack>
  )
}