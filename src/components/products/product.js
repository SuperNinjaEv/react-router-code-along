import { useParams, useNavigate } from "react-router-dom"

export default function Product({products}) {
    // useParams()
    let {id} = useParams();

    const navigate = useNavigate();

    const mockBuyNow = () => {
        alert('You pressed Buy Now! Congrats! Our sophisticated system is already charging your card and sending you your purchase. Let\'s go back to the home page!')
        navigate("/")
        console.log("Buying now")
    }
    // Here we are destructuring => extract a product from the products array
    // We are checking each product's ID in the array with the ID given to us
    // Then filtering out the specific product we want into the product variable
    const  [product] = products.filter( product => product.id === id)
        if (product) {return (
            <section>
            <h5>{product.name}</h5>
            <img src={product.image} alt={product.name} />
            <p>{product.type}</p>
            <p>{product.style}</p>
            <p>${product.price}</p>
            <button onClick={() => mockBuyNow()}>Buy Now!</button>
        </section>
        )}
        return (<h1>No products found</h1>)     
}