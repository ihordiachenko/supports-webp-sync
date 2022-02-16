export function  checkWebPSupport(): Boolean  {
    const isDocument = typeof document !== 'undefined'
    // Use canvas hack for webkit-based browsers
    // Kudos to Rui Marques: https://stackoverflow.com/a/27232658/7897049
    const e = isDocument && document.createElement('canvas')
    if (e && e.toDataURL && e.toDataURL('image/webp').indexOf('data:image/webp') == 0) {
        return true
    }

    const isNavigator = typeof navigator !== 'undefined'
    // Check other common browsers by version
    let m: any = isNavigator && navigator.userAgent.match(/(Edg|Firefox)\/(\d+)\./)
    if (m) {
        return (m[1] === 'Firefox' && m[2] >= 65) || (m[1] === 'Edge' && m[2] >= 18)
    }

    m = isNavigator && navigator.userAgent.match(/OS X\s?(?<os>\d+)?.+ Version\/(?<v>\d+\.\d+)/)
    if (m) {
        return m.groups.v >= 14 && (m.groups.os || 99) >= 11
    }

    return false
}
