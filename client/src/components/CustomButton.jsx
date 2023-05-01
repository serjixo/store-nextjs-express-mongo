import {useSnapshot} from "valtio";
import dataState from "../store/Store.jsx";

export default function CustomButton(props) {
    let snap = useSnapshot(dataState);
    const generateStyle = (type) => {
        if (type == 'filled') {
            return {
                backgroundColor: snap.color,
            }
        } else if (type === 'outline') {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color
            }
        }
    }

    return (
        <button
            className={`px-2 py-1 flex-1 rounded-md ${props.customStyles}`}
            style={generateStyle(props.type)}
            onClick={props.handleClick}
            disabled={props.disabled}
        >
            {props.title}
        </button>
    )
}