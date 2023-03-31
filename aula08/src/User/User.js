import { useParams } from "react-router-dom";

export default function User() {
    const { userId } = useParams();

    return <h1> Usuario { userId } </h1>;
}