//instead of export default we have only used export function to keep track of things in a bigger project it's easier to find this way.
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import { Row, Col } from "react-bootstrap"

export function Store() {
    return (
    <> 
        <h1>Store</h1>
        <Row ms={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item =>(
                // <Col>{JSON.stringify(item)}</Col>
                <Col key={item.id}>
                    <StoreItem {...item}/>
                </Col>
                
            ))}
        </Row>
    </>
    )
}