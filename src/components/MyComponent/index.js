import React from "react";

export const MyComponent = props => <div>Hola 1
{props.param}, {props.param2}
<p>{props.children}</p>
</div>;
export const MyComponent2 = _ => <div>Hola 2</div>;

export default _ => <div>Hola 3</div>