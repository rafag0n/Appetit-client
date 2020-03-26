
import mockProducts from '../db/products'

const order = {
    loadProducts: async (page, itemsPerPage) => {
        let lowerLimit = page*itemsPerPage;
        let upperLimit = (page*itemsPerPage)+(itemsPerPage-1)
        return mockProducts.filter((_,index)=>{
            if (index >= lowerLimit && index <= upperLimit) return true
            
        });
    },
    loadProductData: async (productId) => {
        return mockProducts.find((product)=>{return product._id == productId})
    }
}


export default order