export function checkWebPSupport () {
    // Check FF, Edge by user agent
    const match = navigator.userAgent.match(/(Edge|Firefox)\/(\d+)\./)
    if (match) {
        return (match[1] === 'Firefox' && +match[2] >= 65)
            || (match[1] === 'Edge' && +match[2] >= 18)
    }

    // Use canvas hack for webkit-based browsers
    // Kudos to Rui Marques: https://stackoverflow.com/a/27232658/7897049
    const e = document.createElement('canvas');
    return e.toDataURL
        ? e.toDataURL('image/webp').indexOf('data:image/webp') == 0
        : false
}