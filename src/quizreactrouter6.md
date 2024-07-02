1-What is a route/url parameter?
A:A portion of your route path that is a placeholder for what will eventually be the actual segment in the url of the page. 

2-Add a route parameter called productId to the Route path below:
<Route path="/products" element={} />

A- <Route path="/products/:productId" element={} />

3-Add whatever you need to add for the component below to display the route parameter in the <h1></h1>

function ProductDetail() { return

Product detail page goes here
}

A-
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { productId } = useParams();
    return <h1>Product Id is {productId}</h1>
}