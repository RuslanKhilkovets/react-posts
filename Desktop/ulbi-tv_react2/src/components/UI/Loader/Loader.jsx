import React from 'react';
import cl from "./Loader.module.css"

export const Loader = () => {
    return(
        <div className={cl.loader}>
            <div className={cl.loader_item}></div>
            <div className={cl.loader_item}></div>
            <div className={cl.loader_item}></div>
        </div>
    )
}
export default Loader;