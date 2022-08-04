export function  checkWebPSupport(): Boolean  {
    if (typeof window === "undefined") { // SSE sanity check
        return false
    }

    // Use canvas hack for webkit-based browsers
    // Kudos to Rui Marques: https://stackoverflow.com/a/27232658/7897049
    const e = document.createElement('canvas')
    e.width = 1
    e.height = 1
    if (e.toDataURL && e.toDataURL('image/webp').indexOf('data:image/webp') == 0) {
        return true
    }

    // Check other common browsers by version
    let m: any = navigator.userAgent.match(/(Edg|Firefox)\/(\d+)\./)
    if (m) {
        return (m[1] === 'Firefox' && m[2] >= 65) || (m[1] === 'Edge' && m[2] >= 18)
    }

    m = navigator.userAgent.match(/OS X\s?\d*_?(?<os>\d+)?.+ Version\/(?<v>\d+\.\d+)/)
    if (m) {
        return m.groups.v >= 14 && (m.groups.os || 99) >= 11
    }

    return false
}
