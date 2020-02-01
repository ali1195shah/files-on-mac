class ProductsController < ApplicationController
    # =============================== { Display all products } =================================

    
    def index
        @products = Product.all
        render json: @products
    end


    # =============================== { Display each product id } =================================

    def show
        @product = Product.find(params[:id])
        render json: @product
    end


    # =============================== { Create a product } =================================


    def create
        @product = Product.create(product_params)
        render json: @product

    end
    # =============================== { Update a product } =================================



    def update
        @product = Product.find(params[:id])
        @product.update(product_params)
        render json: @product
    end

    # =============================== {Delete a product} =================================


    def destroy
        Product.destroy(params[:id])
    end



    private 

    def  product_params
        params.require(:product).permit(:name, :description, :price, :image)
    end

end
