'use client'

import { Button, Stack, TextField, Typography } from "@mui/material";

import { updateDailyCalorie, deleteDailyCalorie } from '@/actions/formActions'

type UpdateCalorieFormProps = {
  id: number
  date: string
  meal1?: number
  meal2?: number
  meal3?: number
  meal4?: number
  meal5?: number
}

export default function UpdateCalorieForm({ id, date, meal1, meal2, meal3, meal4, meal5 }: UpdateCalorieFormProps) {
  return (
    <Stack height="75lvh" justifyContent="center" alignItems="center" gap="32px">
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">1日のカロリーを入力</Typography>
      <Stack component="form" width={560} gap="24px" aria-labelledby="login_heading" action={updateDailyCalorie}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="date" value={date} />
        <TextField id="outlined-basic" label="MEAL1" variant="outlined" name="meal1" defaultValue={meal1} />
        <TextField id="outlined-basic" label="MEAL2" variant="outlined" name="meal2" defaultValue={meal2} />
        <TextField id="outlined-basic" label="MEAL3" variant="outlined" name="meal3" defaultValue={meal3} />
        <TextField id="outlined-basic" label="MEAL4" variant="outlined" name="meal4" defaultValue={meal4} />
        <TextField id="outlined-basic" label="MEAL5" variant="outlined" name="meal5" defaultValue={meal5} />
        <Button variant="contained" type="submit">Submit</Button>
      </Stack>
      <Stack width={560} gap="24px" aria-labelledby="login_heading">
        <Button variant="contained" color="warning" onClick={async () => {
          await deleteDailyCalorie(id)
        }}>Delete</Button>
      </Stack>
    </Stack>
  )
}