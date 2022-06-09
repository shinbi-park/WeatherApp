import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

// const ImageForm = styled.label`
// padding:25px 0; display:block;
// text-align: center;
// color:navy;


// `


const WhetherSearch = ({onSearch}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(text)
    }

    return (
    <Form onSubmit={onSubmit} style={{padding:'25px 0'}}>

    <div style={{textAlign: 'center'}}>
    <input type="text" value={text}  className="form-control"
    onChange={e => setText(e.target.value)}/>
    <button class="badge bg-warning" style={{marginLeft:'5px', border:'0'}}type='submit'>검색</button>
    
    </div>
    </Form>
            

    );
};

export default WhetherSearch;