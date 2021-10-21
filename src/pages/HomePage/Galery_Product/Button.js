import React from "react";
import Button from "react-bootstrap/Button";

function ButtonCate({ button, filter }) {
    return (
        <div className="menu-tabs d-flex justify-content-around">
            {button.map((category, index) => {
                return (
                    <Button
                        key={index}
                        variant="outline-secondary"
                        onClick={() => filter(category)}
                    >
                        {category}
                    </Button>
                );
            })}
        </div>
    );
}

export default ButtonCate;
