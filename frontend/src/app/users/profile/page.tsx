import { Button, Stack, TextField, Typography } from "@mui/material";

import { updateUserWithOAuth } from '@/actions/formActions'

export default function Page() {
  return (
    <>
      <Stack height="75vh" justifyContent="center" alignItems="center" gap="32px">
        <Typography variant="h1" fontSize="1.5rem">ユーザーネームの登録</Typography>
        <Stack component="form" width={560} gap="24px" action={updateUserWithOAuth}>
          <TextField label="ニックネーム" variant="outlined" name="name" />
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </Stack>
    </>
  )
}