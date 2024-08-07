import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import paths from '../../constants/paths';

const listLink = [
    {
        id: 1,
        label: 'Orders',
        link: paths.Order,
        icon: ShoppingBagIcon
    },
    {
        id: 2,
        label: 'List Products',
        link: paths.Products,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'New Product',
        link: paths.NewProduct,
        icon: AddShoppingCartIcon
    }
]

export default listLink