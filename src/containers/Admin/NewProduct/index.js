import React, { useEffect, useState } from "react"
import api from "../../../services/api"
import { useForm } from "react-hook-form"

import { Container, Label, Input } from './styles'
import ReactSelect from "react-select"
import { Button } from "../../../components"


function NewProduct() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
    
    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')        
        }        
        loadOrders()
    }, [])

    return (
        <Container>
            <form noValidate>
                <Label>Name</Label>
                <Input type='text' {...register('name')}/>

                <Label>Price</Label>
                <Input type='number' {...register('price')}/>

                <Label>Upload of image</Label>
                <Input type='file' accept='image/png, image/jpeg'/>

                <ReactSelect/>
                
                <Button>Add product</Button>
            </form>
        </Container>

)
}

export default NewProduct