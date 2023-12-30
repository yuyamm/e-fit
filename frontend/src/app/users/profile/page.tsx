import { Button, Stack, TextField, Typography } from "@mui/material";

import { updateDailyWeight } from '@/actions/formActions'

export default function Page() {
  return (
    <>
      <h1>プロフィールを登録してください</h1>
      <Stack height="75vh" justifyContent="center" alignItems="center" gap="32px">
        <Typography variant="h1" fontSize="1.5rem">1日のカロリーを入力</Typography>
        <Stack component="form" width={560} gap="24px" action={updateDailyWeight}>
          <TextField label="ニックネーム" variant="outlined" name="weight" />
          <TextField label="画像" variant="outlined" name="memo" />
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </Stack>
    </>
  )
}