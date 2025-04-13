
const args = {
    ALWAYS: 'always',
    OVERFLOW: 'overflow',
}
/** 
 * vTitle directive to set the title attribute of an element.
 * @param {HTMLElement} el - The element to set the title attribute on.
 */

export const vTitle =  (el, binding, vnode) => {
    const content = el.textContent;
    if (binding.arg === args.ALWAYS || !binding.arg) {
        el.setAttribute('title', content);
    } else if (binding.arg === args.OVERFLOW) {
        if(el.scrollWidth > el.clientWidth) {
            el.setAttribute('title', content);
        }
    }
}