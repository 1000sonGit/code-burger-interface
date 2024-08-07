import React, { useEffect, useState } from "react"
import api from "../../../services/api"
import { useForm, Controller } from "react-hook-form"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'
import ReactSelect from "react-select"
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from "../../../components"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string().required('Insert the product´s name'),
        price: Yup.string().required('Insert the product´s price'),
        category: Yup.object().required('Choose the category'),
        file: Yup.mixed().test('required', 'Load the file', value => {
            return value?.length > 0
        })
        .test('fileSize', 'Load files unless than 2Mb', value => {
            return value[0]?.size <= 200000
        })
        .test('type', 'Only file like JPEG and PNG', value => {
            return (
                value[0]?.type === 'image/jpeg' || 
                value[0]?.type === 'image/png'
            )
        })
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


        await toast.promise(api.post('products', productDataFormData), {
            pending: 'Creating product...',
            success: 'successfully created product!!!',
            error: 'Failure to create product'
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
                    <Input type='text' {...register('name')}/>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    <Label>Price</Label>
                    <Input type='number' {...register('price')}/>
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
                        render={({ field }) => {
                            return(
                                <ReactSelect
                                {...field}
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder="...Choose the category"
                                />
                            )
                        }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>
                <ButtonStyles>Add product</ButtonStyles>
            </form>
        </Container>

)
}

export default NewProduct