import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export default (props) => {

    console.log(props);
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search)
    const questionId = query.get('questionId');
    alert(props.match.params.id)
    return <div>Producto</div>
};