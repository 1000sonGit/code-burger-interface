import React, { useEffect, useState } from "react"
import api from "../../../services/api"
import { useForm, Controller } from "react-hook-form"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Container, Label, Input, ButtonStyles, LabelUpload, ContainerInput } from './styles'
import ReactSelect from "react-select"
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from "../../../components"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"

function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { 
        push, 
        location: {
            state: { product }
        }
    } = useHistory()    
    
    const schema = Yup.object().shape({
        name: Yup.string().required('Insert the product´s name'),
        price: Yup.string().required('Insert the product´s price'),
        category: Yup.object().required('Choose the category'),
        offer: Yup.bool()
    })

    const { register, 
        handleSubmit, 
        control, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])
        productDataFormData.append('offer', data.offer)

        await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
            pending: 'Editing product...',
            success: 'successfully edited product!!!',
            error: 'Failure to Edit product'
        })
        
        setTimeout(() => {
            push('/list-products')
        }, 2000)
    }
    
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories') 
            
            setCategories(data)      
        }        
        loadCategories()
    }, [])    

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Name</Label>
                    <Input type='text' {...register('name')} defaultValue={product.name}/>                    
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    <Label>Price</Label>
                    <Input type='number' {...register('price')} defaultValue={product.price}/>
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        { fileName || (
                            <>
                                < CloudUploadIcon />
                                Load product image
                            </>                        
                        )}
                        <input 
                        type='file'
                        id='image-input'
                        accept='image/png, image/jpeg'
                        {...register('file')}
                        onChange={ value => setFileName(value.target.files[0]?.name)}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>         
                </div>
                
                <div>
                    <Controller
                        name='category'
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {
                            return(
                                <ReactSelect
                                {...field}
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder="...Choose the category"
                                defaultValue={product.category}
                                />
                            )
                        }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>
                <ContainerInput>
                    <input type='checkbox' {...register('offer')} defaultChecked={product.offer}/>
                    <Label>Is it in offer?</Label>
                </ContainerInput>
                
                <ButtonStyles>Edit product</ButtonStyles>
            </form>
        </Container>

)
}

export default EditProduct