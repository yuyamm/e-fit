import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Page({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}) {
  if (typeof searchParams.date !== 'string') {
    redirect('/dashboard/calories')
  }

  const date = searchParams.date

  async function createDailyCalorie(formData: FormData) {
    'use server'
 
    const rawFormData = {
      calorie: {
        date: date, 
        meal1: formData.get('meal1'),
        meal2: formData.get('meal2'),
        meal3: formData.get('meal3'),
        meal4: formData.get('meal4'),
        meal5: formData.get('meal5'),
      }
    }

    console.log(rawFormData)

    // エラー処理を後で書く
    const res = await fetch('http://localhost:5000/api/calories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rawFormData),
      cache: 'no-cache'
    })

    if (!res.ok) {
      throw new Error('Failed to save new calorie data')
    }

    // // revalidate cache
    revalidatePath('/dashboard/calories')
    redirect('/dashboard/calories')
  }

  return (
    <>
      <h1>{date.replaceAll('-', '/')}のカロリー</h1>
      {/* <form action={createDailyCalorie}>
        <TextField id="outlined-basic" label="MEAL1" variant="outlined" name="meal1" />
        <TextField id="outlined-basic" label="MEAL2" variant="outlined" name="meal2" />
        <TextField id="outlined-basic" label="MEAL3" variant="outlined" name="meal3" />
        <TextField id="outlined-basic" label="MEAL4" variant="outlined" name="meal4" />
        <TextField id="outlined-basic" label="MEAL5" variant="outlined" name="meal5" />
        <Button variant="contained" type="submit">Submit</Button>
      </form> */}

      <Stack height="100lvh" justifyContent="center" alignItems="center" gap="32px">
        <Typography id="login_heading" variant="h1" fontSize="1.5rem">1日のカロリーを入力</Typography>
        <Stack component="form" width={560} gap="24px" aria-labelledby="login_heading" action={createDailyCalorie}>
          <TextField id="outlined-basic" label="MEAL1" variant="outlined" name="meal1" />
          <TextField id="outlined-basic" label="MEAL2" variant="outlined" name="meal2" />
          <TextField id="outlined-basic" label="MEAL3" variant="outlined" name="meal3" />
          <TextField id="outlined-basic" label="MEAL4" variant="outlined" name="meal4" />
          <TextField id="outlined-basic" label="MEAL5" variant="outlined" name="meal5" />
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </Stack>
    </>
  )
}