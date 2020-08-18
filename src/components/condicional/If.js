/*
<If test={exp}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
</If>

Sendo exp uma expressão verdadeira
*/ 

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}