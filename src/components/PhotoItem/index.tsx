import * as C from './index.styles'

type Props = {
    name: string;
    url: string;
}


export const PhotoItem = ({url, name}:Props) =>{
    return(
        <C.Container>
            <img src={url} alt={name} />{name}
            </C.Container>
    )
}