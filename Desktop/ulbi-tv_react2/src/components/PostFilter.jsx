import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

export const PostFilter = ({filter, setFilter}) => {
    return(
        <>
            <Input 
                value={filter.query}
                onChange = {e => setFilter({...filter, query: e.target.value})}
            />
            <Select 
                defaultValue={"Сортування по"}
                options={[
                    {value: "title", name: "По назві"},
                    {value: "body", name: "По опису"}
                ]} 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </>
    )
}

export default PostFilter;