import { redirect } from "next/navigation";

export default function page({ params }) {
    console.log(params)
    redirect('/en/')
}
