import { useRecoilValue } from "recoil"
import { resultadoAmigoSecreto } from "../atom"

const useResultadoDoSorteio = () => {
    return useRecoilValue(resultadoAmigoSecreto)
}

export default useResultadoDoSorteio