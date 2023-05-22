export const Endpoints={
    base: process.env.REACT_APP_BASE_URL +"/api/v1",
    
    products:`/products`,
    create_products:`/products/create`,
    single_products:`/products`,

    create_user:'/users/create',
    get_user:(id)=>`/users/${id}`,

    get_categories:`/categories`,

    getSub_cat:`/subcategories/multiple`,
}