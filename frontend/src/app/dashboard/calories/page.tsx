import data from "@/data/calories.json"
import CaloriesList from "@/components/CaloriesList"

export default function Page() {
  return (
    <>
      <h1>カロリー記録</h1>
      <CaloriesList data={data} />
    </>
  )
}