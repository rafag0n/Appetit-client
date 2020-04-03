
import mockProducts from '../db/products'
import mockCustomers from '../db/customers'

const order = {
    loadProducts: async (accessToken, page=0, itemsPerPage) => {
        return filterByPage(mockProducts, page, itemsPerPage)
    },
    loadProductData: async (accessToken, productId) => {
        return mockProducts.find((product)=>{return product._id == productId})
    },
    loadCustomers: async (accessToken, page=0, itemsPerPage=10) => {
        return filterByPage(mockCustomers, page, itemsPerPage)
    },
    submitOrder: async (accessToken, orderData) => {
        return true
    }
}


function filterByPage(list, page, itemsPerPage) {
    let lowerLimit = page*itemsPerPage;
    let upperLimit = (page*itemsPerPage)+(itemsPerPage-1)
    return list.filter((_,index)=>{
        if (index >= lowerLimit && index <= upperLimit) return true
    })   
}

export default order