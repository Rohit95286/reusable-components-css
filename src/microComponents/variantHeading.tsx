export default function VariantHeading({variant} : {variant : string | undefined}){
  return <p className="font-bold text-black ">{variant}</p>
}