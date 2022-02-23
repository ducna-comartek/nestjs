import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsModel } from './products.model';


@Injectable()
export class ProductsService {
    products: ProductsModel[] = []

    insertProduct(title: string, desc: string, price: number){
        const proId = Math.random().toString()
        const newProduct = new ProductsModel(proId, title,desc,price)
        this.products.push(newProduct)
        return proId
    }

    getProducts(){
        return[...this.products]
    }

    getSingleProduct(productId : string){
        const product = this.findProduct(productId)[0]
        return {...product }
    }

    updateProduct(proId : string, title: string, desc: string, price: number){
        const [product, index] = this.findProduct(proId)
        const updatedProduct = {...product}
        if(title){
            updatedProduct.title = title
        }
        if(desc){
            updatedProduct.description = desc
        }
        if(price){
            updatedProduct.price = price
        }
        this.products[index] = updatedProduct
    }

    deleteProduct(proId : string){
        const index = this.findProduct(proId)[1]
        this.products.splice(index, 1)
    }

    private findProduct(id : string): [ProductsModel, number]{
        const productIndex = this.products.findIndex(prod => prod.id === id)
        const product = this.products[productIndex]
        if(!product){
            throw new NotFoundException('Could not find product')
        }
        return [product, productIndex]
    }
}
