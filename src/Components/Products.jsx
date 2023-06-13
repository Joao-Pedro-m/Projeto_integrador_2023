import React, { useState, useEffect } from 'react';
import ProductItem from '../Components/ProductItem';

function Products() {
    const [productsSalonLine, setProductsSalonLine] = useState([]);
    useEffect(() => {
        // Carregar a lista de produtos da API ou de um arquivo JSON
        const productList = [
            {
                id: 1,
                name: 'Kit SOS Cachos + Poderosos com Ativador e Máscara Salon Line',
                price: 49.99,
                image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v3201808310329273120/products/43162%20V2.jpg'
            },
            {
                id: 2,
                name: 'Kit Completo SOS Cachos Ácido Hialurônico Salon Line',
                price: 79.99,
                image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQ59bSCmz7dkCdD1OxyNA_dfOtJdE_i9uEzEm_S4kt0V0t4NUv3yDGUrFUp3Q0wwfRXE0rexJ9KMYOjg4RkSWGrvntSU3g9kDHCp5Qra2AOQtS0-CLS-t5&usqp=CAE' },
            {
                id: 3,
                name: 'Creme Para Pentear Brilho Umidificado Salon Line 1kg',
                price: 31.99, image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5599393595327776464/products/95491_0.jpg&height=400&width=400' },
            {
                id: 4,
                name: 'Creme Para Pentear Hidratação Profunda 1kg Salon Line',
                price: 31.99,
                image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v8966741552438447259/products/34491_0.jpg&height=400&width=400' },
            {
                id: 5,
                name: 'Creme Para Pentear Reconstrução Intensa Salon Line 1kg',
                price: 31.99,
                image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v6891200411682246364/products/34490_0.jpg&height=400&width=400' },
            {
                id: 6,
                name: 'Creme Para Pentear Nutrição Reparadora Salon Line 1kg',
                price: 31.99,
                image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v2201661385563858872/products/95087_0.jpg&height=400&width=400' },
            {
                id: 7,
                name: 'Creme Para Pentear Kids Cachinhos Definidos Salon Line 1kg',
                price: 31.99,
                image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v4872582185084701116/products/95678_0.jpg&height=400&width=400' },
            {
                id: 8,
                name: 'Creme Para Pentear Super Óleos Salon Line 1L',
                price: 31.99,
                image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5268909483799747460/products/95556_0.jpg&height=400&width=400' },
            {
                id: 9,
                name: 'Creme Para Pentear Brilho Máximo Salon Line 1kg',
                price: 31.99,
                image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v9164510879606633903/products/34458_0.jpg&height=400&width=400' },
            {
                id: 10,
                name: 'Creme Para Pentear Definição Máxima Salon Line 1kg',
                price: 31.99,
                image: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v7557709976924908760/products/95701_0.jpg&height=400&width=400' },
        ];
        setProductsSalonLine(productList);
    }, []);

    return (
        <>
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4 text-[#ffffff]">Salon line</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {productsSalonLine.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Products;