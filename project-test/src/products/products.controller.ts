import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService){}

    @Post()
    addProduct(
        @Body('title') proTitle : string,
        @Body('desciption') proDesc : string, 
        @Body('price') proPrice : number
    ) {
        const generatedId = this.productsService.insertProduct(
            proTitle, 
            proDesc, 
            proPrice
        )
        return {id : generatedId}     
    }

    @Get()
    getAllProducts(){
        return this.productsService.getProducts()
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getSingleProduct(prodId)
    }

    @Patch(':id')
    updateProduct(
        @Param('id') proId : string,
        @Body('tilte') proTitle : string,
        @Body('desc') proDesc : string,
        @Body('price') proPrice : number
    ){
        this.productsService.updateProduct(proId,proTitle,proDesc,proPrice)
        return null
    }

    @Delete(':id')
    removeProduct(@Param('id') proId: string){
        this.productsService.deleteProduct(proId)
        return null
    }
}
