import {useParams} from "react-router-dom";

export default () => {
    const {taskId} = useParams();

    return (
        <div>
            Task id: {taskId}
        </div>
    )
}