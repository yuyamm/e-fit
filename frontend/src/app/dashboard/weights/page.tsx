import data from "@/data/weights.json"
import WeightsList from "@/components/WeightsList"
 
export default async function Page() {
  return (
    <>
      <h1>カロリー記録</h1>
      <WeightsList data={data} />
    </>
  )
}