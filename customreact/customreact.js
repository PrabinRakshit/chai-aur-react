function customRender(reactELement, container){
    
    const domElement = document.createElement(reactELement.type)
    domElement.innerHTML = reactELement.children

    for (const prop in reactELement.props) {
        if(prop === 'children') continue;

        domElement.setAttribute(prop, reactELement.props[prop])
    }
    // domElement.setAttribute('href', reactELement.props.href)
    // domElement.setAttribute('target', reactELement.props.target)

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)