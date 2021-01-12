/*
<If test={exp}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
</If>

Sendo exp uma expressão verdadeira
*/ 

export default props => {
    // Entra na props > entra no Children
    // filtra cada item
    // retorna quando o item type for igual a 'Else'
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    // Entra na props > entra no Children
    // filtra cada item
    // retorna quando o item type for diferente de elseChild, ou seja, diferente de 'Else'
    const ifChildren = props.children.filter(child => {
        return child != elseChild
    })

    console.log(elseChild)

    if(props.test) {
        return ifChildren
    } else if(elseChild){
        return elseChild
    } else {
        return false
    }
}

// retorna o children do componente Else
export const Else = props => props.children