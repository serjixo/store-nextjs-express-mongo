import {useSnapshot} from "valtio";
import dataState from "@component/store/Store";
import {useRouter} from "next/router";

export default function LinkToBackPage() {
    let snap = useSnapshot(dataState)
    const router = useRouter()

    return (
        <button
            onClick={() => router.back()}
            className={'px-2 py-1 rounded-md w-fit px-4 py-2.5 font-bold text-sm m-10 ml-auto'}
            style={{
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color
            }}>
            Back
        </button>
    )
}
