import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:8000"}),
    endpoints: (builder)=>({
        signup: builder.mutation({
            query: (customer) => ({
                url:"/customer/signup",
                method: "POST",
                body: customer,
            }),
        }),

        login: builder.mutation({
            query: (customer) => ({
                url: "/customer/login",
                method:"POST",
                body: customer,
            }),
        }),
        products: builder.mutation({
            query: () => ({
                url: "products/all",
                method:"GET",
                body: null,
            }),
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: "/products",
                body: product,
                method: "POST",
            }),
        }),

        deleteProduct: builder.mutation({
            query: ({ product_id, user_id }) => ({
                url: `/products/${product_id}`,
                body: {
                    user_id,
                },
                method: "DELETE",
            }),
        }),

        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.id}`,
                body: product,
                method: "PATCH",
            }),
        }),

        // add to cart
        addToCart: builder.mutation({
            query: (cartInfo) => ({
                url: "/cart",
                body: cartInfo,
                method: "POST",
            }),
        }),
        // remove from cart
        removeFromCart: builder.mutation({
            query: (body) => ({
                url: `/cart/${body.id}`,
                body,
                method: "POST",
            }),
        }),

        // increase cart
        increaseCartProduct: builder.mutation({
            query: (body) => ({
                url: "/products/increase-cart",
                body,
                method: "POST",
            }),
        }),

        // decrease cart
        decreaseCartProduct: builder.mutation({
            query: (body) => ({
                url: "/products/decrease-cart",
                body,
                method: "POST",
            }),
        }),
        // create order
        createOrder: builder.mutation({
            query: (body) => ({
                url: "/orders",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useCreateProductMutation,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useIncreaseCartProductMutation,
    useDecreaseCartProductMutation,
    useCreateOrderMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
} = appApi;

export default appApi;