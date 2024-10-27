import styles from './product-item.module.css';
function ProductItem({singleProductItem,key}){
    return(
        <div style={{padding:'20px',border:'2px solid red',marginBottom:'10px'}} key={key}>
            <p>{singleProductItem}</p>
            <ButtonComponent/>
        </div>
    )
}
export default ProductItem;
function ButtonComponent(){
    return <button className={styles.buttonStyle}>Click</button>
}