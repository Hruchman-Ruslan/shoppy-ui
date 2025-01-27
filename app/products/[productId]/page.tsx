interface SingleProductProps {
	params: { productId: string }
}

export default function SingleProduct({ params }: SingleProductProps) {
	return <p>Single product {params.productId}</p>
}
