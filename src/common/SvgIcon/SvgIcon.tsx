import { SvgIconProps } from '../types'

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => {
    if (src === null) {
        return null
    }

    return <img className={className ? className : ''} src={`/${src}`} alt={src} width={width} height={height} draggable='false' />
}