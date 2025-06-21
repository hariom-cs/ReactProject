function customRender(reactElement, container){
    //method-1
//    const domElement=document.createElement(reactElement.type)  //i.e. it create <a> elemnt
//    domElement.innerHTML = reactElement.children;
//    domElement.setAttribute('href',reactElement.props.href)
//    domElement.setAttribute('target',reactElement.target)
//    container.appendChild(domElement);

   
//method-2 efficient approaches->
    const domElement= document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
    for(const prop in reactElement.props){
        if(prop ==='children')continue;

        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);

}
const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'Click me goole'
}
const mainContainer=document.querySelector('#root');


customRender(reactElement, mainContainer);
