
const args = {
    ALWAYS: 'always',
    OVERFLOW: 'overflow',
}

export const vTitle =  (el, binding, vnode) => {
    const content = el.textContent;
    if (binding.arg === args.ALWAYS || !binding.arg) {
        el.setAttribute('title', content);
    } else if (binding.arg === args.OVERFLOW) {
        //TODO: Title appears only when the text is overflowing
    }
}