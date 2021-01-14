import React from 'react';

const Persion = (props) => {
    return (
        <div>
             <p> This is a Persion, name {props.name} and age {props.age}</p>
             <p>{props.children}</p>
        </div>
    );
};
export default Persion;

